class Api::V1::CitiesController < Api::V1::BaseController
  before_action :set_city, only: [:set_home, :show]

  def set_home
    if @city.set_home
      @cities = City.all
      render json: @cities, each_serializer: CitySerializer, root: false
    else
      render noting: true, status: 404
    end
  end

  def show
    respond_with @city, serializer: CitySerializer, root: false
  end

  def index
    @city = City.all
    render json: @city, each_serializer: CitySerializer, root: false
  end

private

  def set_city
    @city = City.find(params[:id])
  end

end
