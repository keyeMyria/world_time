class Api::V1::Users::RegistrationsController < Devise::RegistrationsController

  skip_before_action :verify_authenticity_token
  respond_to :html, :json

end
