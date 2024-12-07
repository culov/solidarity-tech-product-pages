module ApplicationHelper
	def gravatar_url(email, size)
		gravatar = Digest::MD5::hexdigest(email).downcase
		url = "http://gravatar.com/avatar/#{gravatar}.png?s=#{size}&d=identicon"
	end

	def body_page_name
		@body_page_name ||=[controller_name.camelcase.gsub('::',''),action_name.camelcase].join
	end

	def format_date(created)
		Time.at(created).getutc.strftime("%m/%d/%Y")
	end

	def will_paginate(collection_or_options = nil, options = {})
		if collection_or_options.is_a? Hash
			options, collection_or_options = collection_or_options, nil
		end
		unless options[:renderer]
			options = options.merge :renderer => CustomPaginationRenderer
		end
		super *[collection_or_options, options].compact
	end



	# def url_to_image(url)
	# 	browser = Ferrum::Browser.new(browser_options: { 'no-sandbox': nil })
	# 	browser.go_to(url)

	# 	@tmp = Tempfile.new("#{url.parameterize}-#{random64(5)}")
	# 	img = browser.screenshot(path: @tmp.path, format: "png")

	# 	browser.quit

	# 	# @file = StringIO.new(img)
	# 	@image = ImageUpload.new
	# 	@image.image = @tmp
	# 	@image.user_id = 28
	# 	@image.image_type = "screenshot"
	# 	@image.save!
	# 	@image.update_attribute(:image_url, @image.image.url)

	# 	@tmp.close
	# @tmp.unlink


	# 	@image.image.url


	# end

    def options_for_component_name(options, component_name)
        case component_name
        when "preferred_language" 
            return ALL_LANGUAGES.keys.map{|k|{value: k, label: ALL_LANGUAGES[k]}}.to_json
        when "country"
            return ALL_COUNTRIES.keys.map{|k|{value:k, label: ALL_COUNTRIES[k]}}.to_json
        end

        return options.map{|o|{label: Form.translate(o["label"], I18n.locale), value: o["value"] }}.to_json
    end


	def determine_content_type(url)
		# Use a regular expression to extract the file extension
		extension = nil
		begin
			extension = url.match(/\.([a-zA-Z0-9]+)(?=[?#]|$)/)[1].downcase
		rescue
		end

		# Define the possible content types based on file extensions
		video_extensions = %w[mp4 avi mov wmv flv]
		audio_extensions = %w[mp3 wav aac ogg wma]
		image_extensions = %w[jpg jpeg png gif bmp]

		# Determine the content type based on the extension
		case extension
		when *video_extensions
			Message::FileAttachment::VIDEO
		when *audio_extensions
			Message::FileAttachment::AUDIO
		when *image_extensions
			Message::FileAttachment::IMAGE
		else
			Message::FileAttachment::FILE
		end
	end

	def extract_non_amp_url(amp_url)
		# Extract the main part of the domain from the AMP URL
		domain_part = amp_url.split('.cdn.ampproject.org').first

		# Replace the first occurrence of '-com' with '.com' to handle common top-level domains
		# Then, replace remaining '-' with '.' to reconstruct subdomains if any
		non_amp_domain = domain_part.sub('-com', '.com').gsub('-', '.').gsub('www.', '')

		non_amp_domain
	end

	def deep_unfreeze(object)
		case object
		when Hash
			object.each_with_object({}) do |(key, value), new_hash|
				new_hash[key] = deep_unfreeze(value)
			end
		when Array
			object.map { |element| deep_unfreeze(element) }
		else
			object.duplicable? ? object.dup : object
		end
	end

	def format_amount(amount)
		sprintf('$%0.2f', amount.to_f / 100.0).gsub(/(\d)(?=(\d\d\d)+(?!\d))/, "\\1,")
	end



end
