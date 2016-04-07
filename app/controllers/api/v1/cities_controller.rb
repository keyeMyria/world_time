class Api::V1::CitiesController < Api::V1::BaseController

  def index
    @city = City.all
    render json: @city, each_serializer: CitySerializer, root: false
  end

  # def create
  #   binding.pry
  # end

end
