class Api::V1::Users::SessionsController < Devise::SessionsController

  skip_before_action :verify_authenticity_token
  respond_to :json
  require 'auth_token'

  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message(:notice, :signed_in) if is_flashing_format?
    sign_in(resource_name, resource)
    yield resource if block_given?

    token = AuthToken.issue_token({ user_id: resource.id })

    respond_to do |format|
      format.json { render json: {user: resource.email, token: token} }
    end
  end

end


