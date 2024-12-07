class ApplicationController < ActionController::Base
	include RedisSessionStore
	# before_action :store_user_location!, if: :storable_location?

	protect_from_forgery prepend: true, with: :null_session

	# before_action :redirect_from_old_domain_solidarity_tech_org

	# before_action :redirect_to_valid_subdomain
	# before_action :update_user_language_if_none
	# before_action :new_relic_custom_attributes

	before_action :set_locale

	after_action -> { flash.discard }, if: -> { request.xhr? }


	def new_relic_custom_attributes
		::NewRelic::Agent.add_custom_attributes({ user_agent: request.user_agent })
		::NewRelic::Agent.add_custom_attributes({ ip_address: request.remote_ip })
	end

	def redirect_from_old_domain_solidarity_tech_org
		if ['solidarity-tech.org', 'solidarity.app'].include?(request.domain)
			if request.get?
				redirect_to domain: 'solidarity.tech', subdomain: (request.subdomain.nil? ? 'www' : request.subdomain), allow_other_host: true
			elsif request.post?
				@post_url = request.original_url.to_s.gsub(/solidarity-tech.org/, 'solidarity.tech')
				# Airbrake.notify(:redirect_post => @post_url)
				if @post_url.include?('iww')
					controller_you_want = ActionsController.new
					controller_you_want.request = request
					controller_you_want.response = response
					controller_you_want.process(:action_by_url)
				else
					# Airbrake.notify(:post_from_old_domain_redirect => request.original_url, :params => params.inspect)
					# repost(@post_url, params: params.to_unsafe_h, options: {})
				end
			end
		end
	end

  	# rescue_from ActionController::Redirecting::UnsafeRedirectError do
    # 	redirect_to root_url
  	# end

  	def redirect_to(options = {}, response_options = {})
    	super(options, response_options.merge(allow_other_host: true))
  	end

	def redirect_to_valid_subdomain
		if request.get? && request.subdomain.blank? && Rails.env == 'production' && request.domain != "sldr.it"

			if request.domain.nil?
		      render plain: 'Invalid request', status: :bad_request
		      return
		    end
		    
			new_url = "https://www." + request.domain + request.fullpath
			redirect_to(new_url, allow_other_host: true, status: 301)
		end
	end

	def devise_current_user
		# puts "looking for devise_current_user: OK "
		@devise_current_user ||= request.env['warden'].user(:user)
	end


	def set_organization
		# puts "host: #{request.host}, request.domain: #{request.domain}, request.subdomain: #{request.subdomain}"

		@organization = nil if @organization.nil?
		@website = nil  if @website.nil?
		# Airbrake.notify(:sub => request.subdomain, :host => request.host, :original_url => request.original_url, :params=>params.inspect)

		if @organization.nil?
			# puts "SET ORGANIZATION!!!!!"
			@raw_host = request.host.to_s.gsub(/\Awww./, '')
			# puts "@raw_host: #{@raw_host}"
			if !params[:organization_url].nil?
				if params[:organization_url] == 'www'
					@organization = Organization.find_by_url_slug("www")
					@website = Website.find_by_url_slug("www")
				else
					@website = Website.find_by_url_slug(params[:organization_url])
					@organization = @website.scope
				end
			elsif ['solidarity-tech.org', 'solidarity.tech', 'staging-solidarity.com',
						 'localhost', 'localhost.com'].include?(request.domain)

				# puts "request.subdomain: #{request.subdomain.inspect}"
				if request.subdomain.blank? || request.subdomain == "www"
					# Solidarity Tech
					@website = Website.find_by_url_slug("www")
					@organization = Organization.find_by_url_slug("www")
				else
					@website = Website.find_by_url_slug(request.subdomain)
					if @website
						@organization = @website.scope
						# puts "GREAT!!!!!"
					else
						#something wrong if it gets here. Should never get here.
					end
				end

			else
				# act.drivers-united.org
				@website_domain = WebsiteDomain.find_by_host(@raw_host)
				if @website_domain
					@website = @website_domain.website
					@organization = @website.scope
				end
			end

			if @organization.nil?
				if request.original_url.include?('drivers-united.org') || request.original_url.include?('http://localhost:3000')

					@organization = Organization.first
					@website = Website.find(1)
				else
					# Airbrake.notify(:error_class => "Invalid URL: " + request.original_url)
					flash[:alert] = 'Invalid URL'
					render body: nil
				end
			end
		end
		@organization
	end

	def set_locale

		@locale = if params[:locale].nil?
			!current_user.nil? && !current_user.preferred_language.nil? ? current_user.preferred_language : http_accept_language.compatible_language_from(I18n.available_locales)
		else
			params[:locale].to_s.downcase
		end
		I18n.locale = @locale
	rescue StandardError => e
		Airbrake.notify(error_class: 'set_locale error: ' + e.message,
										error_message: 'error params:  ' + params.inspect)
	end

	def update_user_language_if_none
		if current_user && current_user.preferred_language.nil?
			@languages = http_accept_language.user_preferred_languages.uniq
			@preferred_language = @languages.first ? @languages.first.to_s.first(2) : nil
			current_user.languages = @languages
			current_user.preferred_language = @preferred_language
			current_user.save
		end
	end

	def ssl_configured?
		Rails.env.production? && request.path != '/cable'
	end

	def redirect_to_https
		redirect_to protocol: 'https://' unless request.ssl? || request.local? || request.path == '/cable'
	end

	def routing_error
		# Airbrake.notify(:error_message => "FUCK DAT Routing error: " + request.env['PATH_INFO'].inspect)
		# puts "ok lets go after deploy...ROUTING ERROR HERE??????? #{request.env['PATH_INFO'].inspect} .... #{request.env['HOST'].inspect}"
		raise ActionController::RoutingError,
			"No route matches [#{request.env['REQUEST_METHOD']}] #{request.env['PATH_INFO'].inspect}"
	end

	def track_search_conversion(item)
		if params[:search_id]
			search = Searchjoy::Search.find(params[:search_id])
			if !search.nil? && !item.nil? && search.convertable_id.nil? && search.user_id == current_admin.id
				search.convert(item)
			end
		end
	end

	private

	# Its important that the location is NOT stored if:
	# - The request method is not GET (non idempotent)
	# - The request is handled by a Devise controller such as Devise::SessionsController as that could cause an
	#    infinite redirect loop.
	# - The request is an Ajax request as this can lead to very unexpected behaviour.

	def storable_location?
		request.get? && is_navigational_format? && !devise_controller? && !request.xhr? && request.path != "/user-filters/data"
	end

	def store_user_location!
		# :user is the scope we are authenticating
		# puts "STORE user LOCATION??"
		store_location_for(:user, request.fullpath)
	end

	def store_admin_location!
		# puts "STORE ADMIN LOCATION"
		# :user is the scope we are authenticating
		store_location_for(:admin, request.fullpath)
	end

	def after_sign_in_path_for(resource_or_scope)
		# puts "store after_sign_in_path_for 22222222"
		stored_location_for(resource_or_scope) || super
	end
end
