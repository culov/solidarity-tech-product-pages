require 'sidekiq'
require 'sidekiq-status'

rails_root = Rails.root || File.dirname(__FILE__) + '/../..'
rails_env = Rails.env || 'development'
redis_config = YAML.load_file(rails_root.to_s + '/config/redis.yml')
redis_config.merge! redis_config.fetch(Rails.env, {})
redis_config.symbolize_keys!
# Sidekiq::DelayExtensions.enable_delay!

# Sidekiq::Extensions::DelayedClass = Sidekiq::DelayExtensions::DelayedClass
# Sidekiq::Extensions::DelayedModel = Sidekiq::DelayExtensions::DelayedModel
# Sidekiq::Extensions::DelayedMailer = Sidekiq::DelayExtensions::DelayedMailer


Sidekiq.configure_server do |config|
 	config.redis = { url: ["staging", "production"].include?(Rails.env) ? "#{ENV["REDIS_URL"]}/12" : "redis://localhost:6379" }
 	Sidekiq::Status.configure_server_middleware config

  config.server_middleware do |chain|
    chain.add JobInterruptMiddleware
  end

  config.average_scheduled_poll_interval = 4

 	schedule_file = "config/schedule.yml"
	if File.exist?(schedule_file) && Sidekiq.server?
	  Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file)
	end

end

# Required to allow predictive dialer advance session jobs every 5 seconds
# Sidekiq.options[:poll_interval] = 4

Sidekiq.configure_client do |config|
 config.redis = { url: ["staging", "production"].include?(Rails.env) ? "#{ENV["REDIS_URL"]}/12" : "redis://localhost:6379"}
 Sidekiq::Status.configure_client_middleware config
 Sidekiq::Status.configure_client_middleware config
end





# if Rails.env.development?
#   require 'sidekiq/testing'
#   Sidekiq::Testing.inline!
# end


