ActiveSupport::Notifications.subscribe('deprecation.rails') do |name, start, finish, id, payload|
  Airbrake.notify(
    deprecation_warning:   "v2_deprecation_warning",
    error_message: payload[:message],
    backtrace:     payload[:callstack],
    action:        payload[:action]
  )
end