class Admins::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]
  layout "application_dashboard"

  class Responder < ActionController::Responder
    def to_turbo_stream
      controller.render(options.merge(formats: :html))
    rescue ActionView::MissingTemplate => error
      if get?
        raise error
      elsif has_errors? && default_action
        render {}.merge(formats: :html, status: :unprocessable_entity)
      else
        redirect_to navigation_location
      end
    end
  end

  self.responder = Responder
  respond_to :html, :turbo_stream

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    # super
    params[:admin][:remember_me] = '1' # Auto-check the 'Remember me' checkbox
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    sign_out :solidarity_user
    sign_in(:solidarity_user, resource.urs.solidarity_user)
    yield resource if block_given?
    #respond_with resource, location: after_sign_in_path_for(resource)
    redirect_to "/admins/two_factor_authentication" and return
  end

  # DELETE /resource/sign_out
  def destroy
    sign_out :solidarity_user
    sign_out(current_solidarity_user) if current_solidarity_user
    super
  end

  def after_sign_in_path_for(resource)

    # puts "after sign in path 1111"
    # puts "resource: " + resource.inspect
    is_fully_authenticated? ? (stored_location_for(resource) || super) : "/admins/two_factor_authentication"
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end
end
