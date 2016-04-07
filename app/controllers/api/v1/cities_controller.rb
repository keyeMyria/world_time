class Api::V1::CitiesController < Api::V1::BaseController

  def index
    @city = City.all
    respond_with @city, each_serializer: CitiesSerializer, root: false
  end

  # def create
  #   binding.pry
  # end

end
