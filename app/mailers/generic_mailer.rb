class GenericMailer < ApplicationMailer
	layout false
	self.delivery_job = EmailBlastDeliveryJob

    def email(email, subject, content, from, my_attachments=[], reply_to=nil, email_message_id=nil, user=nil, track_opens=true, track_clicks=true, cc_to=nil, show_watermark=true)

		track open: track_opens, click: track_clicks
		track extra: {email_message_id: email_message_id} if email_message_id
		track user: -> { user } if user

		# my_attachments as array of URLS

		# must store file data in memcache to avoid serializing the FIle and o avoid refetching the file with every send
		my_attachments.each do |attachment_url|

			tempfile_data = Rails.cache.read("temp-file-for-email-message-attachments-#{attachment_url}")
			tempfile = nil
			@uri = URI.parse(attachment_url)
			filename = File.basename(@uri.path)

			if !tempfile_data.nil?

				tempfile = Tempfile.create(filename)
				tempfile.binmode # This will help deal encoding problem with download files from the internet
				tempfile.write(tempfile_data)

			else

				data = @uri.read
				tempfile = Tempfile.create(filename)
				tempfile.binmode # This will help deal encoding problem with download files from the internet
				tempfile.write(data)

				Rails.cache.write("temp-file-for-email-message-attachments-#{attachment_url}", data, :expires_in => 1.day)

			end

			tempfile.rewind

			attachments[filename] = IO.read(tempfile.path)

			tempfile.close

		end



		if reply_to
			valid_reply_to_emails = []
			reply_to.split(",").each do |rt|
				if User.valid_email?(rt.to_s)
					valid_reply_to_emails.push(rt)
				end
			end
			reply_to = !valid_reply_to_emails.blank? ? valid_reply_to_emails.join(",") : nil
		end


		



		mail(to: email, subject: subject, from: from, reply_to: reply_to, cc: cc_to, delivery_method_options: self.smtp_settings(from)) do |format|
  			format.html { render html: render_to_string(template: 'generic_mailer/email', locals: {content: content, show_watermark: show_watermark}).html_safe }
		end
    end
end
