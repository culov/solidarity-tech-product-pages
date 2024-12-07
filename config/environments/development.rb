require "active_support/core_ext/integer/time"
Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

#for subdomains on localhost https://gist.github.com/indiesquidge/b836647f851179589765
  config.action_dispatch.tld_length = 0

  config.sass.preferred_syntax = :sass
  config.sass.line_comments = false
  config.sass.cache = false
  config.assets.debug = true
  config.assets.unknown_asset_fallback = false
  config.active_job.queue_adapter     = :sidekiq

  # Do not eager load code on boot.
  config.eager_load = false
  # Show full error reports.
  config.consider_all_requests_local = true


  #allows ngrok
  config.hosts << "f96c-2603-8000-cf41-6000-1849-a4c1-a2e8-4abb.ngrok-free.app"

  # config.hosts << /[a-z0-9]+.localtest\.me/
  # config.hosts << "beta.localtest.me"
  # config.hosts << "dashboard.localtest.me"
  config.hosts <</[a-z0-9]*\.*localhost\.test/
  config.hosts <</[a-z0-9]*\.*localhost\.localdomain/
  config.hosts <</[a-z0-9]*\.*localhost\.com/
  config.hosts <</[a-z0-9]*\.*lvh\.me/

  # config.hosts << "solidarity.app"

  #for nginx
  config.hosts << "railsapp"


  config.hosts << "solidarity.app"


  # Store uploaded files on the local file system (see config/storage.yml for options)
  # config.active_storage.service = :local
  # config.active_storage.service = :amazon


  config.action_mailer.perform_caching = false


  # config.web_console.permissions = begin
  #   addrinfo = Socket.ip_address_list.detect(&:ipv4_private?)
  #   addrinfo.try(:ip_address).sub(/\.(\d{1,3})$/, '.0/16')
  # end




  # config.log_level = :debug
  #   logger           = ActiveSupport::Logger.new(STDOUT)
  # Print deprecation notices to the Rails logger.
  # config.active_support.deprecation = :log
  config.active_support.deprecation = :raise

   # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation = :raise
  # Tell Active Support which deprecation messages to disallow.
  config.active_support.disallowed_deprecation_warnings = []


  # Raise an error on page load if there are pending migrations.
  # config.active_record.migration_error = :page_load

  # # Highlight code that triggered database queries in logs.
  # config.active_record.verbose_query_logs = true

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true




# if Rails.env.development?
#   require 'sidekiq/testing'
#   Sidekiq::Testing.inline!
# end


 # Annotate rendered view with file names.
  # config.action_view.annotate_rendered_view_with_filenames = true



  # Uncomment if you wish to allow Action Cable access from any origin.
  # config.action_cable.disable_request_forgery_protection = true



  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  # if Rails.root.join('tmp', 'caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    
    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.to_i}"
    }
  # else
  #   config.action_controller.perform_caching = false

  #   config.cache_store = :null_store
  # end

  config.force_ssl = false

  # config.action_cable.allowed_request_origins = [/http:\/\/*/, /https:\/\/*/]

  config.action_mailer.default_url_options = { host: 'solidarity.tech' }
  # config.action_mailer.perform_caching = false
  config.action_mailer.perform_deliveries = true
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

  config.assets.js_compressor = :terser
  # config.assets.js_compressor =  Uglifier.new(harmony: true)
  # Suppress logger output for asset requests.
  config.assets.quiet = true

  # Raises error for missing translations
  # config.i18n.raise_on_missing_translations = true
  # config.action_view.raise_on_missing_translations = true
  config.i18n.available_locales = ALL_LANGUAGES.keys#[:en, :es, :zh, :pt, :hy, :fa, :ar, :tr, :ko, :ru, :vi, :ja, :fr, :uk, :"zh-Hans", :tl, :he, :de, :it, :ur, :hi, :bn, :ms, :id, :kn, :te, :af]
  config.i18n.default_locale = :en
  config.i18n.fallbacks = [:en]

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  # config.file_watcher = ActiveSupport::EventedFileUpdateChecker
end
