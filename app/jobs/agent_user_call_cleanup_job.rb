class AgentUserCallCleanupJob < ApplicationJob

	def perform(*args)
		
		#NOT RUNNING THIS YET in schedule.yml because we're waiting to see if it's needed. Does the query every come up with any records?

		AgentUserCall.where("chapter_id IS NOT NULL AND twilio_call_sid IS NOT NULL AND call_ended_at IS NULL and call_started_at < ?", 2.hours.ago).find_each do |auc|
			call_data = auc.get_twilio_call_data
			# puts "call_data: #{call_data.inspect}"
			status_map = AgentUserCall::Status::MAP.invert
			twilio_completed_statuses = AgentUserCall::Status::COMPLETED.map{|status| status_map[status]}.compact
			if call_data && twilio_completed_statuses.include?(call_data.status)
				auc.status = AgentUserCall::Status::MAP[call_data.status]
				if call_data.end_time
					auc.call_ended_at = call_data.end_time
				end
				auc.save
			end
		end

	end
end
