require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html
  require 'auth_token'

  protect_from_forgery with: :exception

protected

  def verify_jwt_token

    binding.pry
    head :unauthorized if request.headers['Authorization'].nil? ||
        !AuthToken.valid?(request.headers['Authorization'].split(' ').last)
  end

end

