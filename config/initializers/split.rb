# Split.configure do |config|
#   config.db_failover = Rails.env.production? # handle redis errors gracefully
#   config.db_failover_on_db_error = proc{|error| Rails.logger.error(error.message) }
#   # config.store_override = true
#   #config.allow_multiple_experiments = true

#   cookie_adapter = Split::Persistence::CookieAdapter
#   redis_adapter = Split::Persistence::RedisAdapter.with_config(
#                 lookup_by: -> (context) { context.send(:current_user).try(:id) },
#                 expire_seconds: 2592000
#                 )
#   config.persistence = Split::Persistence::DualAdapter.with_config(
#       logged_in: -> (context) { !context.send(:current_user).try(:id).nil? },
#       logged_in_adapter: redis_adapter,
#       logged_out_adapter: cookie_adapter)
# end


# Split::Trial.class_eval do
	
#     def complete!(goals=[], context = nil)
#     	puts "complete alt: " + alternative.inspect
#       if alternative
#         if Array(goals).empty?
#           alternative.increment_completion
#         else
#           Array(goals).each {|g| alternative.increment_completion(g) }
#         end

#         run_callback context, Split.configuration.on_trial_complete
#       end
#     end


#     # Choose an alternative, add a participant, and save the alternative choice on the user. This
#     # method is guaranteed to only run once, and will skip the alternative choosing process if run
#     # a second time.
#     def choose!(context = nil)
#       @user.cleanup_old_experiments!
#       # Only run the process once
#       return alternative if @alternative_choosen

#       if override_is_alternative?
#         self.alternative = @options[:override]
#         if should_store_alternative? && !@user[@experiment.key]
#           self.alternative.increment_participation
#         end
#       elsif @options[:disabled] || Split.configuration.disabled?
#         self.alternative = @experiment.control
#       elsif @experiment.has_winner?
#         self.alternative = @experiment.winner
#       else
#         cleanup_old_versions

#         if exclude_user?
#           self.alternative = @experiment.control
#         else
#           value = @user[@experiment.key]
#           if value
#             self.alternative = value
#           else
#             self.alternative = @experiment.next_alternative

#             # Increment the number of participants since we are actually choosing a new alternative
#             self.alternative.increment_participation

#             run_callback context, Split.configuration.on_trial_choose
#           end
#         end
#       end

#       @user[@experiment.key] = alternative.name if should_store_alternative?
#       @alternative_choosen = true
#       run_callback context, Split.configuration.on_trial unless @options[:disabled] || Split.configuration.disabled?
#       alternative
#     end
# end

