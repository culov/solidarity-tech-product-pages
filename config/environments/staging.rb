Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.cache_classes = true



  config.sass.preferred_syntax = :sass
  config.sass.line_comments = false
  config.sass.cache = false

  # Eager load code on boot. This eager loads most of Rails and
  # your application in memory, allowing both threaded web servers
  # and those relying on copy on write to perform better.
  # Rake tasks automatically ignore this option for performance.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  config.action_controller.asset_host = ENV['CLOUDFRONT_ENDPOINT']
  # config.action_controller.asset_host = 'https://s3.us-west-2.amazonaws.com/solidarity.tech.cdn'
  # config.action_controller.asset_host = 'https://cdn2.solidarity.tech'
    # config.assets.prefix = "/"
    
  # Ensures that a master key has been made available in either ENV["RAILS_MASTER_KEY"]
  # or in config/master.key. This key is used to decrypt credentials (and other encrypted files).
  # config.require_master_key = true

  # Disable serving static files from the `/public` folder by default since
  # Apache or NGINX already handles this.
  config.public_file_server.enabled = true#ENV['RAILS_SERVE_STATIC_FILES'].present?

  # Compress JavaScripts and CSS.
  
  # config.assets.css_compressor = :sass

  # Do not fallback to assets pipeline if a precompiled asset is missed.
  config.assets.compile = false

  # `config.assets.precompile` and `config.assets.version` have moved to config/initializers/assets.rb

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.action_controller.asset_host = 'http://assets.example.com'

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = 'X-Sendfile' # for Apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for NGINX

  # Store uploaded files on the local file system (see config/storage.yml for options)
  # config.active_storage.service = :local
  config.active_storage.service = :amazon


  # Use the lowest log level to ensure availability of diagnostic information
  # when problems arise.
  config.log_level = :debug

  # Prepend all log lines with the following tags.
  config.log_tags = [ :request_id ]

  # Use a different cache store in production.
  # config.cache_store = :mem_cache_store

  # Use a real queuing backend for Active Job (and separate queues per environment)
  config.active_job.queue_adapter     = :sidekiq
  # config.active_job.queue_name_prefix = "irdu_rails_#{Rails.env}"

  config.action_mailer.perform_caching = false

  # Ignore bad email addresses and do not raise email delivery errors.
  # Set this to true and configure the email server for immediate delivery to raise delivery errors.
  # config.action_mailer.raise_delivery_errors = false

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation cannot be found).
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners.
  config.active_support.deprecation = :notify

  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Use a different logger for distributed setups.
  # require 'syslog/logger'
  # config.logger = ActiveSupport::TaggedLogging.new(Syslog::Logger.new 'app-name')

  if ENV["RAILS_LOG_TO_STDOUT"].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false

  # Inserts middleware to perform automatic connection switching.
  # The `database_selector` hash is used to pass options to the DatabaseSelector
  # middleware. The `delay` is used to determine how long to wait after a write
  # to send a subsequent read to the primary.
  #
  # The `database_resolver` class is used by the middleware to determine which
  # database is appropriate to use based on the time delay.
  #
  # The `database_resolver_context` class is used by the middleware to set
  # timestamps for the last write to the primary. The resolver uses the context
  # class timestamps to determine how long to wait before reading from the
  # replica.
  #
  # By default Rails will store a last write timestamp in the session. The
  # DatabaseSelector middleware is designed as such you can define your own
  # strategy for connection switching and pass that into the middleware through
  # these configuration options.
  # config.active_record.database_selector = { delay: 2.seconds }
  # config.active_record.database_resolver = ActiveRecord::Middleware::DatabaseSelector::Resolver
  # config.active_record.database_resolver_context = ActiveRecord::Middleware::DatabaseSelector::Resolver::Session



  # temporary until airbrake releases gem upgrade ruby 3
  config.eager_load = true



  config.hosts = nil



  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  config.force_ssl = true


  config.ssl_options = {
  redirect: {
    exclude: -> request { request.path =~ /cable/ || request.path =~ /caddy-domain-check/ }
  }
}




  config.assets.js_compressor = :terser
  # config.assets.js_compressor = :uglify_with_source_maps




  config.action_mailer.default_url_options = { host: 'solidarity.tech' }
  # config.action_mailer.perform_caching = false
  # config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.delivery_method = :smtp
  
  config.action_mailer.smtp_settings = {
      :address => "email-smtp.us-east-1.amazonaws.com",
      :port => 587,
      :authentication       => :login,
      # :domain               => "solidarity.tech",
      :user_name => ENV['ST_SES_USERNAME'], #'<%=ENV["SES_USERNAME"]%>'
      :password => ENV['ST_SES_PASSWORD'],
      :enable_starttls_auto => true
  }
  config.paperclip_defaults = {
    storage: :s3,
    s3_protocol: :https,
    s3_credentials: {
      bucket: 'solidarity.tech', #ENV.fetch('S3_BUCKET_NAME'),
      access_key_id: ENV['ST_AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['ST_AWS_SECRET_ACCESS_KEY'],
      s3_region: 'us-east-1', #ENV.fetch('AWS_REGION'),
    }
  }



  # Mount Action Cable outside main process or domain
   # config.action_cable.mount_path = "cable"
   # config.action_cable.url = "wss://#{ST_DOMAIN}/cable"
   # config.web_socket_server_url = "wss://#{ST_DOMAIN}/cable"
   config.action_cable.allowed_request_origins = [/http:\/\/*/, /https:\/\/*/]#[ 'https://solidarity-tech.org', 'https://www.solidarity-tech.org', 'http://solidarity-tech.org' ]


  # All existing in DB: ["en", "es", "uk", "pt", "ru", "zh-Hans", "hy", "zh", "ko", "ja", "fr", "vi", "ar", "id", "it", "tr", "bn"] 
  # Offered : [:en, :de, :es, :fr, :it, :pl, :"pt-BR", :ru, :"zh-CN"] 
  config.i18n.available_locales = ALL_LANGUAGES.keys
  config.i18n.default_locale = :en
  config.i18n.fallbacks = [:en]



end
