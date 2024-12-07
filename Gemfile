source 'https://rubygems.org'

git_source(:github) do |repo_name|
	repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
	"https://github.com/#{repo_name}.git"
end

ruby '3.3.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'mimemagic', '0.3.8' # old rails dependency gem pulled, must specify version

rails_version = "7.1.3"
gem 'rails', rails_version # github: "rails/rails", branch: "7-0-stable" #:ref => "f8f8d97" #, '7.0.0'
gem 'activerecord', rails_version
gem 'actionmailer', rails_version
gem 'activemodel', rails_version
gem 'actionview', rails_version
gem 'activejob', rails_version
gem 'railties', rails_version
gem 'actionpack', rails_version
gem 'activesupport', rails_version

# Use Uglifier as compressor for JavaScript assets
# gem 'uglifier', '4.2.0'#'>= 1.3.0'
gem 'terser'
# gem 'sqlite3', '~> 2.4'


# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'nokogiri', '1.16.0.rc1'

gem 'sprockets', '4.2.1' # need at 3.7.2 because otherwise, bootstrap-sass gem issue: https://github.com/rails/rails/issues/38723
# gem 'mini_racer', '~> 0.4.0'
gem 'libv8-node', '18.16.0.0'
gem 'mini_racer', '0.8.0'

gem 'ethon', '0.14.0' # m1 issue

gem 'mechanize'	#used for testing crawling pages.

# gem 'therubyracer'#, platforms: :ruby
gem 'bootsnap', '1.10.1', require: false

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '5.0.0'

gem 'sitemap_generator'

# gem 'grover', '1.1.2'    # used to make pdf exports of html. also used in commented out code to take screenshots and upload https://levelup.gitconnected.com/'screenshot-websites-with-ruby-on-rails-and-google-puppeteer-on-aws-elastic-beanstalk-6ace17487c26

gem 'wicked_pdf'		# used for sending invoices as pdf
gem 'ferrum', '0.14'	# was using for sending invoices as images, but stopped working, likely due to the added docker memory restrictions

gem 'turbo-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
gem 'mocha', group: :test
# rails basics
gem 'actionpack-action_caching'
gem 'json', '2.6.3'
gem 'pg', '1.5.4'
gem 'pkg-config'
gem 'sass-rails', '>= 6'
# gem 'webpacker'
gem 'jsbundling-rails'

gem 'hiredis'
gem 'redis'

gem 'activejob-uniqueness', '0.3.1'#, github: 'veeqo/activejob-uniqueness' # prevents duplicate jbos
gem 'execjs'
gem 'sidekiq', '7.2.0'
gem 'sidekiq-cron', '1.12.0' # Used to run billing jobs
gem 'sidekiq-status' # removed because it was hardly being used, and not for anyhting critical. #An extension to the sidekiq message processing to track your jobs
# gem 'sidekiq-delay_extensions'
# gem 'sinatra', require: false #used for web interface
gem 'legitbot'#, '1.9.4'
gem 'rack', '3.0.8'
# gem 'rack-session'
gem 'rack-attack', '6.7.0'
gem 'rubocop', require: false
gem 'rubocop-rails', require: false
gem 'rubocop-performance', require: false
gem 'ancestry'      # tracing ancestry of Organizations
gem 'faker'         # creates demo data
gem 'mail', github: '/mikel/mail', ref: 'refs/pull/1439/head'
gem 'monetize'      # handling Money data
gem 'paper_trail'   # records Billing::OrganizationPlan trail so we can query over time.
gem 'prawn', '2.4.0' # pdf writer
gem 'public_suffix' # domain parser
gem 'simple_stats' # provides stats functions .modes, .median, etc
gem 'ttfunk', '1.7.0' # Font Metrics Parser for the Prawn PDF generator
gem 'valid_email2', '5.1.1' # validating emails
gem 'where_exists', github: "EugZol/where_exists" # queries negating existence
# gem "prawn-gmagick"   #pdf-writer
gem 'cliver'          # pdf-writing requirement
gem 'combine_pdf'     # pdf-writing requirement
gem 'origami', github: 'culov/origami' # used to read pdf metadata for placing images. ruby 3 fix personal repo
gem 'pdf-forms' # connects with pdftk to write pdf
# gem 'pdf-reader'    #Read embeded pdf fonts
gem 'clicksend_client' # send pdf via mail
gem 'hexapdf' # changes the embedded fonts in form fields to ensure it's an available fonr
# gem 'order_as_specified'  #for ordering sort in tasks custom filter
gem 'elasticsearch', '7.16.1' # {}"8.0.0.pre1"#, github: 'elastic/elasticsearch', tag: 'v7.16.2'#, '7.16.2' #elasticsearch
gem 'elasticsearch-api', '7.16.1'
gem 'elasticsearch-transport'
gem 'searchjoy' # tracking searchkick conversions
gem 'searchkick'#, '4.5.2' # , github: "ankane/searchkick", ref: "ff02dba"    #elasticsearch
# gem "faraday", "1.8.0"  #elasticsearch & other dependencies
gem 'faraday', '~> 1.8'
gem 'faraday-multipart', '~> 1.0.4'

gem 'aws-sdk-ses' # verifying domains
gem 'aws-sdk-sesv2'	#managing supression list
gem 'oj' # elastic search - Significantly increase performance with faster JSON generation

gem 'mini_magick' # stitching together images for montage

gem 'ahoy_email', github: 'culov/ahoy_email', ref: '936b349' # , "1.0.3"     #email analytics
gem 'ahoy_matey', '3.3.0' # page analytics
# gem 'authtrail' # track all devise login attempts
gem 'autoprefixer-rails', '9.1.0' # this version required for old bootstrap
gem 'bootstrap-sass', '~> 3.3.7'
gem 'chronic' # used for creating recurring mothly event sessions
gem 'congress_forms' # contacting congress with CWC API
# gem 'devise', '4.9.3' # user system
gem 'geocoder', '~> 1.6.4 ' # geocodes visit data and more
gem 'http_accept_language' # detecting visitors language
gem 'mailkick', github: 'culov/mailkick', branch: 'my-custom-branch', ref: 'b1b8762' #github: 'culov/mailkick' #'1.2.2' # email unsubscribes
gem 'simple_token_authentication', github: 'culov/simple_token_authentication' # app token authentication
gem 'two_factor_authentication', github: 'culov/two_factor_authentication' # 2fa authentication
# gem "paperclip", "~> 6.0.0"

gem 'airbrake', '13.0.4' # github: "airbrake/airbrake"#, ref: "refs/pull/1206/head"    #'12.0.0',     #error tracking
gem 'aws-sdk-s3', '~> 1' # s3 for paperclip
gem 'haikunator' # username generator
gem 'kt-paperclip', '>= 6.4.1' # image and file uploads
gem 'browser' # standard browser detection
gem 'data-confirm-modal' # turns data-confirm into bootstrap modal
gem 'device_detector', '1.0.5' # user agent parser for form submission data
# gem 'webpush'              # web push notifications
gem 'humanize'            # numbers to words
gem 'openssl', '3.1.0'
gem 'phonelib', '0.8.5'            # phone number validation
gem 'rpush', github: 'culov/rpush', ref: 'afa4c349f4eb679da00a44c409e0ab74c4d55275' # ios and android push notifications. (culov/rpush updates web-push dependency to allow for ssl3. Was previously 7.0.1)
gem 'string-similarity' # string comparison
gem 'web-push', '3.0.0' # web push notificationsreplaces webpush for ssl 3 errors.
# gem 'split', require: 'split/dashboard', github: "culov/split_fix", :ref => '4eba2c2'   #AB testing
gem 'chroma' # color manipuation (rgba to hex for avatars)
gem 'liquid' # liquid template rendering
gem 'mobility', '1.2.9' # translations
gem 'newrelic_rpm'#, '8.2.0' # new relic agent
# gem "skylight"
gem "jmespath", "1.6.2"		#aws-sdk dependency which needs higher version to patch vulnerability
# gem 'split', '4.0.0.pre2', require: 'split/dashboard' # replaced with original version to eliminate deprecation warning
gem 'vcardigan' # library for building vcards
gem 'will_paginate' # pagination
# gem 'fluent-plugin-newrelic'  #logging for new relic
# gem 'lograge'                 #logging for new relic
gem 'facebookbusiness', '0.12.0.1' # fb lead ads
gem 'google-api-client', '~> 0.49.0', require: 'google/apis/calendar_v3' # google calendar auth
gem 'googleapis-common-protos-types', '1.0.1' # google calendar auth
gem 'googleauth', '0.15.0' # google calendar auth

gem 'google-protobuf', '3.25.2'		#dependency, needs specific version for vulnerability fix
gem 'sanitize', '6.1.0'

gem 'i18n_data' # 2-letter code language data
gem 'iso-639' # user language parsing
gem 'local_time' # show local time in views easily
gem 'mailcheck' # fix email mis-spellings
gem 'maxminddb' # used to parse and read local city data files in geocoder
gem 'whenever', require: false # cron jobs

gem 'icalendar' # calendar manipulation
gem 'signet', '~> 0.14.0' # , '0.8.1'                                         #oauth
gem 'zoom_rb', github: 'culov/zoom_rb'

gem 'stripe', '5.26.0'
gem 'twilio-ruby', '6.0.2'
# gem "signalwire", "~> 2.3.4"
# gem 'signalwire', git: "git://github.com/culov/signalwire-ruby.git"

gem 'httparty', '0.21.0'
gem 'recaptcha'


gem 'chartkick' # , '4.0.3' #reporting charts
gem 'groupdate', '6.0.1' # reporting charts

# gem 'flipper'	#feature flags (automations)
# gem 'flipper-active_record'

# gem 'rgeo', git: "git://github.com/Kdoggett887/rgeo.git", branch: "fix-212"
gem 'activerecord-postgis-adapter', '9.0.1'# github: 'culov/activerecord-postgis-adapter' # , "7.1.1"
gem 'my_zipcode_gem' # zip code tables gem, with some helper and update features
gem 'rgeo', github: 'culov/rgeo' # geospatial-data, moved above fix for geometry fixes into my repo
gem 'rgeo-activerecord' # , "7.0.1"                                          #geospatial-data
gem 'rgeo-geojson' # geospatial-data
gem 'validates_zipcode' # for future: used for validating international postcodes
gem 'zip-codes' # fallback for user zip code identification
gem 'ziptz' # zip to timezone, used in guessing proper timezone.

gem 'timeout', '0.4.1'
gem 'pghero'
gem 'pg_query', '>= 0.9.0'
gem 'thor', '1.3.0'
gem 'acts_as_list'

group :development, :test do
	# Call 'byebug' anywhere in the code to stop execution and get a debugger console
	gem 'byebug', platforms: %i[mri mingw x64_mingw]
	# Adds support for Capybara system testing and selenium driver
	gem 'capybara', '~> 2.13'
	gem 'solargraph'
	gem 'awesome_print'
	gem 'dotenv-rails'
	gem 'pry-rails'
	# gem 'selenium-webdriver'
end

group :development do
	# Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
	gem 'web-console'
	# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
	gem 'active_record_query_trace'
	gem 'better_errors'
	gem 'binding_of_caller', '1.0.0'
	gem 'listen'
	gem 'rb-readline'
	gem 'spring'
	# gem 'meta_request'
	# gem 'active_record_doctor'
	# gem 'spring-watcher-listen', '~> 2.0.0'
	# gem 'activerecord-analyze'
end


gem 'nio4r', '2.5.4' # puma dependency for which we're specifying version
gem 'profanity-filter' # used for cnam registration before submission
gem 'puma', '6.4.2'
# group :production do
#   # Use Puma as the app server
#   gem 'puma', "= 5.5.2"
# end

gem 'rqrcode'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

gem 'google-cloud-translate'
gem 'ruby-openai'

# gem 'thredded', '0.16.16'  #forum
gem 'kramdown-parser-gfm'   # needed for threddded to work
gem 'onebox', '~> 1.8.19'   # needed for threddded to work
# gem 'db_text_search', '~> 0.3.2'
gem 'ice_cube', '0.16.4' # must be explicit for ruby > 3
gem 'net-http-persistent', '4.0.2' # must be explicit for ruby > 3

gem 'nested-hstore' # only used for RideshareMarket, ActiveRecord::Coders::NestedHstore, can dump if causing trouble
# gem 'repost'  #redirects post from solidarity-tech.org migration (eg POST to iww.solidariry-tech.org)
gem 'active_record_extended' # for .union queries


gem 'rswag'
gem 'rswag-api'
gem 'rswag-ui'

group :development, :test do
  gem 'rspec-rails'
  gem 'rswag-specs'
end

# gem 'ruby-statistics'
# gem 'lol_dba'                 # for detecting needed indices
# gem 'activerecord-analyze'
# gem 'active_record_union'

# gem 'iconv' removed because couldn't find usage
# gem 'unidecoder' removed because couldn't find usage
# gem 'postmark-spam_check'removed because couldn't find usage
# gem  'paypal-sdk-rest'    #commented out instances of PayPal:: and paypal requires
# gem 'reverse_markdown'
# gem 'daemons'
# gem 'roadie'
# gem "letter_opener", :group => :development
