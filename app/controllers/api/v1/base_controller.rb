class Api::V1::BaseController < ApplicationController

  skip_before_filter :verify_authenticity_token
  protect_from_forgery with: :null_session
  respond_to :json

end
