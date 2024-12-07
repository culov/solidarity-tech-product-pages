module ApplicationCable
  class Connection < ActionCable::Connection::Base
     identified_by :current_user

  def connect
    self.current_user = find_verified_user
  end

   protected

    def find_verified_user # this checks whether a user is authenticated with devise
      # Airbrake.notify(:admin_envwareden_from_cable => env['warden'].user(:admin).inspect)

      if !request.params[:token].blank? && !request.params[:email].blank?
        verified_user=User.find_by_authentication_token_and_email(request.params[:token], request.params[:email])
        if verified_user
          return verified_user
        else
          return reject_unauthorized_connection
        end
      end

      if verified_user = env['warden'].user(:admin)
       return verified_user
      else
        # Airbrake.notify(:da_result => (verified_user = env['warden'].user(:admin)).inspect, :ok_failing_warden_is => env['warden'].inspect)
        # verified_user
        return reject_unauthorized_connection
      end
    end


  end
end