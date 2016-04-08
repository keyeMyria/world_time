class Api::V1::CitiesController < Api::V1::BaseController

  def show
    @city = City.find(params[:id])
    respond_with @city, serializer: CitySerializer
  end

  def index
    @city = City.all
    render json: @city, each_serializer: CitySerializer, root: false
  end


end
