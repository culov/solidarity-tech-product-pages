# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

Rails.application.configure do
  config.content_security_policy do |policy|
    # policy.default_src :self, :https
    # policy.font_src    :self, :https, :data
    # policy.img_src     :self, :https, :data
    # policy.object_src  :none
    # policy.script_src  :self, :https
    # policy.style_src   :self, :https
    # Specify URI for violation reports
    # policy.report_uri "/csp-violation-report-endpoint"
    # policy.script_src  :self, :https, 'https://js.stripe.com', 'https://hcaptcha.com', 'https://*.hcaptcha.com'
    # policy.style_src   :self, :https
    # policy.connect_src :self, :https, 'https://api.stripe.com', 'https://maps.googleapis.com'
    # policy.frame_src   :self, 'https://js.stripe.com', 'https://hooks.stripe.com', 'https://*.hcaptcha.com'

    if Rails.env.development?
      policy.connect_src :self, :https, 'http://dashboard.localhost:3035', 'ws://dashboard.localhost:3035', 'http://localhost:3035', 'ws://localhost:3035', 'http://0.0.0.0:3035', 'ws://0.0.0.0:3035', 'http://webpack:3035', 'ws://webpack:3035', "wss://chunderw-vpc-gll.twilio.com/signal", 'wss://voice-js.roaming.twilio.com/signal', 'wss://nexus-websocket-a.intercom.io', 'https://api.stripe.com', 'https://maps.googleapis.com'
    end
  end
#
#   # Generate session nonces for permitted importmap and inline scripts
#   config.content_security_policy_nonce_generator = ->(request) { request.session.id.to_s }
#   config.content_security_policy_nonce_directives = %w(script-src)
#
#   # Report CSP violations to a specified URI. See:
#   # https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
#   # config.content_security_policy_report_only = true
end
