class EmailBlastDeliveryJob < ActionMailer::MailDeliveryJob
	# unique :until_executed
	unique :until_executed#, lock_ttl: 24.hours#, on_conflict: ->(job) { job.logger.info 'OopsHUHH???'; puts "job: #{job.inspect}" }
end
