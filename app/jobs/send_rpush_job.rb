class SendRpushJob < ApplicationJob
	queue_as :push_notifications
	sidekiq_options :retry => false
	
	def perform(*args)
		Rpush.push
	end
end
