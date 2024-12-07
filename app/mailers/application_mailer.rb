class ApplicationMailer < ActionMailer::Base
  default from: "noreply@solidarity.tech"
  layout 'mailer'

  def smtp_settings(from_email)


    settings = {
      :address => "email-smtp.us-east-1.amazonaws.com",
      :port => 587,
      :authentication       => :login,
      # :domain               => "solidarity.tech",
      :user_name => ENV['ST_SES_USERNAME'],
      :password => ENV['ST_SES_PASSWORD'],
      :enable_starttls_auto => true
    }

    if from_email.to_s.scan(/organize@iww.org|contact@connecticutdriversunitedfoundation.org/).length > 0
      settings[:user_name] = ENV['SES_USERNAME']
      settings[:password] = ENV['SES_PASSWORD']
    end


    return settings

  end

end
