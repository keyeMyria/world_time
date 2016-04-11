class Api::V1::CitiesController < Api::V1::BaseController


  def set_city_home
    @city = City.find(params[:city_id])

    if @city.set_city_home
      @cities = City.all
      render json: @cities, each_serializer: CitySerializer, root: false
    else
      render noting: true, status: 404
    end

  end

  def show
    @city = City.find(params[:id])
    respond_with @city, serializer: CitySerializer, root: false
  end

  def index
    @city = City.all
    render json: @city, each_serializer: CitySerializer, root: false
  end


end
