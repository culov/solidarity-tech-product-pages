module EmailStatusHelper
	require 'aws-sdk-sesv2'

	def sesv2_client
		Aws::SESV2::Client.new(
			region: 'us-east-1',
			access_key_id: ENV['ST_AWS_ACCESS_KEY_ID'],
			secret_access_key: ENV['ST_AWS_SECRET_ACCESS_KEY']
		)
	end

	def list_suppressed_destinations
		client = sesv2_client
		next_token = nil

		begin
			response = client.list_suppressed_destinations({
						next_token: next_token, # Pagination token
			})
		
			response.suppressed_destination_summaries.each do |summary|

				# case summary.reason
				# when "BOUNCE"
				# 	u = User.where(email:summary.email_address).first
				# 	if u
				# 		if Ahoy::Message.where(to: summary.email_address).order("id ASC").last(1).select{|f|f.did_bounce}.count==1
				# 			u.email_permission = false
				# 			u.save
				# 			updated_perms = updated_perms + 1
				# 		else
				# 			no_update = no_update +1
				# 		end
						
				# 	end
				# when "COMPLAINT"
				# 	u = User.where(email:summary.email_address).first
				# 	if u
				# 		u.email_permission = false
				# 		u.save
				# 	end
				# end

				#sleep(3)
				#remove_suppressed_destination(summary.email_address)
				puts "Email: #{summary.email_address}, Reason: #{summary.reason}, Last Updated: #{summary.last_update_time}"
			end
			

			next_token = response.next_token
		end while next_token
	end

	def remove_suppressed_destination(email)
		client = sesv2_client
		client.delete_suppressed_destination({
			email_address: email,
		})
		puts "#{email} has been removed from the suppression list."
	end

end
