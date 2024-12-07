module Devise
  module Models
    module AdminAuthenticatable
      extend ActiveSupport::Concern
    end
  end

  module Strategies
    class AdminAuthenticatable < Authenticatable
      def authenticate!


          @st_admin = SolidarityUser.where(:email => email.to_s.downcase).first
          if @st_admin
            if @st_admin.valid_password?(password)
              urs = @st_admin.user_role_scopes.first
              if urs

                @admin = Admin.find_by_id(urs.user_id)
                success!(@admin)
              else
                fail!('There are no active organizations for your account')
              end
              # redirect!("/admins/two_factor_authentication")
            else
              fail!('Invalid email or password')
            end
          else
            fail!('Invalid email or password')
          end

      end

      def phone_number
        params[:admin][:phone_number]
      end

      def email
        params[:admin][:email]
      end

      def password
        params[:admin][:password]
      end
    end
  end
end

Warden::Strategies.add(:admin_authenticatable, Devise::Strategies::AdminAuthenticatable)

Devise.add_module(:admin_authenticatable,
                  route: :session, ## This will add the routes, rather than in the routes.rb
                  strategy: true,
                  controller: :sessions,
                  model: "admin_authenticatable")

