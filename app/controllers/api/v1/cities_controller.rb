class Api::V1::CitiesController < Api::V1::BaseController

  def show
    @city = City.find(params[:id])
    respond_with @city, serializer: CitySerializer
  end

  def index
    @city = City.all
    respond_with @city, each_serializer: CitySerializer
  end

  # def create
  #   binding.pry
  # end

end
