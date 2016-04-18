class Api::V1::BaseController < ApplicationController

  skip_before_action :verify_authenticity_token
  # skip_before_filter :verify_authenticity_token
  # skip_before_filter :verify_authenticity_token

  protect_from_forgery with: :null_session
  respond_to :json

end
