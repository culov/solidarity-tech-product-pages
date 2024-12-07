module Devise
  module Models
    module UserAuthenticatable
      extend ActiveSupport::Concern
    end
  end

  module Strategies
    class UserAuthenticatable < Authenticatable
      def authenticate!
         # chunk of code...
         # puts "params: " + params.inspect


          @organization = nil
          if !params[:organization_url].nil?
            @organization = Organization.find_by_url_slug(params[:organization_url])
          elsif ["solidarity-tech.org", "solidarity.tech", "localhost"].include?(request.domain) && Website.find_by_url_slug(request.subdomain)
            #rdu.solidarity.tech
            @organization = Website.find_by_url_slug(request.subdomain).scope.root_organization

          elsif WebsiteDomain.where(host: request.domain, domain_type: "apex").first

            wd = WebsiteDomain.where(host: request.domain, domain_type: "apex").first
            @organization = wd.website.scope.root_organization

          elsif WebsiteDomain.where(host: request.host, domain_type: "subdomain").first
            
            #act.drivers-united.org
            wd = WebsiteDomain.where(host: request.host, domain_type: "subdomain").first
            @organization = wd.website.scope.root_organization

          end


          @user = User.where(:root_organization_id => @organization.id, :phone_number => params[:user][:phone_number]).first
          if @user
            if @user.direct_otp == params[:user][:otp]
              success!(@user)

            else
              fail!('Invalid phone number or password')
            end
          else
            fail!('Invalid phone number or password')
          end

      end


    end
  end
end





Warden::Strategies.add(:user_authenticatable, Devise::Strategies::UserAuthenticatable)


Devise.add_module(:user_authenticatable,
                  route: :session, ## This will add the routes, rather than in the routes.rb
                  strategy: true,
                  controller: :sessions,
                  model: "user_authenticatable")




