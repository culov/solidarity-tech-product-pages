require_relative 'boot'


require "active_support/core_ext/module/attribute_accessors_per_thread"

require "rails"
# Only require the frameworks you need:
require "action_controller/railtie"
require "action_view/railtie"
require "action_mailer/railtie"
require "active_job/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# Do not require ActiveRecord or ActiveStorage:
# require "active_record/railtie"
# require "active_storage/engine"

# require "active_record_extended"
require_relative '../lib/middleware/job_interrupt_middleware'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

require_relative 'initializers/constants'

module IrduRails
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    
    # config.load_defaults 5.1
    # potentially fix sidekiq issue where certain jobs stay on busy: https://github.com/mperham/sidekiq/issues/4283#issuecomment-691211287
    
    #results in ActionController::InvalidAuthenticityToken:  ActionController::InvalidAuthenticityToken
    # config.load_defaults 6.1
    config.load_defaults 7.0
    # config.autoloader = :classic

    config.generators.orm = nil
    
    config.middleware.use Rack::Deflater

    Rails.application.config.action_mailer.delivery_job = "ActionMailer::MailDeliveryJob"
    
    Dir.glob("#{Rails.root}/app/assets/images/**/").each do |path|
      config.assets.paths << path
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
