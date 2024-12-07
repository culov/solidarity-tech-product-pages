class DynamicCookieDomain
  def initialize(app)
    @app = app
  end

  def call(env)
    # host = env["HTTP_HOST"].split(':').first

    request = ActionDispatch::Request.new(env)
    host = request.host

    puts "host: #{host.inspect}"
    @client_subdomain = ""
    if host.ends_with?("solidarity.tech")
      if !['www.solidarity.tech', 'dashboard.solidarity.tech', 'beta.solidarity.tech'].include?(host)
        @client_subdomain = "_#{host.force_encoding('UTF-8').parameterize}"
      end
    end

    my_custom_domain = custom_domain(host)
    # puts "my_custom_domain: #{my_custom_domain}"
    # request.session_options[:domain] = my_custom_domain
    # request.session_options[:key] = "_solidarity#{@client_subdomain}_session"
    # request.session_options[:tld_length] = 2
    # puts "request.session_options: #{request.session_options.inspect}"
    puts "request.session_options[:key]: #{request.session_options[:key].inspect}"
    puts "request.session_options[:domain]: #{request.session_options[:domain].inspect}"
    # Rails.application.config.session_store :cookie_store, key: "_solidarity#{@client_subdomain}_session_#{Rails.env}", domain: cd, tld_length: 2

    # Airbrake.notify(:client_subdomain=>@client_subdomain, :host => host, :custom_domain => cd, :ok => Rails.application.config.session_store.inspect)

    @app.call(request.env)
  end

  private


  def custom_domain(host)

    # case host
    # when 'rdu.solidarity.tech', 'demo.solidarity.tech'
    #    Airbrake.notify(:dahost=>host)
    # end

    case host
    when 'www.solidarity.tech', 'dashboard.solidarity.tech', 'beta.solidarity.tech'
      return '.solidarity.tech'
    when 'www.staging-solidarity.com', 'dashboard.staging-solidarity.com', 'beta.staging-solidarity.com'
      return '.staging-solidarity.com'
    when 'www.localhost', 'dashboard.localhost', 'beta.localhost'
      return '.localhost'
    else
      return ".#{host}"
    end
  end
end
