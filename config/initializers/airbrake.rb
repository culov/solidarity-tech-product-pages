# Airbrake is an online tool that provides robust exception tracking in your Rails
# applications. In doing so, it allows you to easily review errors, tie an error
# to an individual piece of code, and trace the cause back to recent
# changes. Airbrake enables for easy categorization, searching, and prioritization
# of exceptions so that when errors occur, your team can quickly determine the
# root cause.
#
# Configuration details:
# https://github.com/airbrake/airbrake-ruby#configuration
require 'airbrake/sidekiq'

Airbrake.configure do |c|
  # You must set both project_id & project_key. To find your project_id and
  # project_key navigate to your project's General Settings and copy the values
  # from the right sidebar.
  # https://github.com/airbrake/airbrake-ruby#project_id--project_key
  # c.project_id = 111754
  # c.project_key = '39cb6e558dea3ee1b2de43f75a3c8132'
  
  c.project_id = 0
  c.project_key = ''

  # Configures the root directory of your project. Expects a String or a
  # Pathname, which represents the path to your project. Providing this option
  # helps us to filter out repetitive data from backtrace frames and link to
  # GitHub files from our dashboard.
  # https://github.com/airbrake/airbrake-ruby#root_directory
  c.root_directory = Rails.root

  # By default, Airbrake Ruby outputs to STDOUT. In Rails apps it makes sense to
  # use the Rails' logger.
  # https://github.com/airbrake/airbrake-ruby#logger
  # c.logger = Rails.logger
  c.logger = Logger.new('airbrake-logs.txt')

  # Configures the environment the application is running in. Helps the Airbrake
  # dashboard to distinguish between exceptions occurring in different
  # environments.
  # NOTE: This option must be set in order to make the 'ignore_environments'
  # option work.
  # https://github.com/airbrake/airbrake-ruby#environment
  c.environment = Rails.env
  c.performance_stats = true
  # Setting this option allows Airbrake to filter exceptions occurring in
  # unwanted environments such as :test.
  # NOTE: This option *does not* work if you don't set the 'environment' option.
  # https://github.com/airbrake/airbrake-ruby#ignore_environments
  c.ignore_environments = %w(test)

  # A list of parameters that should be filtered out of what is sent to
  # Airbrake. By default, all "password" attributes will have their contents
  # replaced.
  # https://github.com/airbrake/airbrake-ruby#blacklist_keys
  c.blocklist_keys = [/password/i, /authorization/i]

  # Alternatively, you can integrate with Rails' filter_parameters.
  # Read more: https://goo.gl/gqQ1xS
  # c.blacklist_keys = Rails.application.config.filter_parameters

  # c.ignore.delete('ActionController::RoutingError')
  # c.ignore >> "ActionController::RoutingError"
  # puts config.ignore.inspect

end

Airbrake.add_filter do |notice|
  if notice.stash[:rack_request]
    request = notice.stash[:rack_request]
    session_data = request.session.to_hash

    if session_data
      if session_data['warden.user.admin.key']
        notice[:params][:current_admin_id] = session_data['warden.user.admin.key'].first.first
      elsif session_data['warden.user.user.key']
        notice[:params][:current_user_id] = session_data['warden.user.user.key'].first.first
      else
        # Session data is present but does not contain the expected IDs
        notice[:params][:session_data] = session_data
      end
    else
      # Session data is not found
      notice[:params][:session_data] = 'No session data found'
    end
  else
    # Rack request is not found
    notice[:params][:session_data] = 'No rack request found'
  end
end


# A filter that collects request body information. Enable it if you are sure you
# don't send sensitive information to Airbrake in your body (such as passwords).
# https://github.com/airbrake/airbrake#requestbodyfilter
# Airbrake.add_filter(Airbrake::Rack::RequestBodyFilter.new)

# Airbrake.add_filter << "ActionController::RoutingError"

# If you want to convert your log messages to Airbrake errors, we offer an
# integration with the Logger class from stdlib.
# https://github.com/airbrake/airbrake#logger
# Rails.logger = Airbrake::AirbrakeLogger.new(Rails.logger)
