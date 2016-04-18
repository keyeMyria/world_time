class Api::V1::TestsController < ApplicationController

  before_filter :verify_jwt_token

  def test
    render json: {'sample' => 'data'}
  end

end
