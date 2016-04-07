class Api::V1::DashboardsController < Api::V1::BaseController

  def index
    @dashboards = Dashboard.all
    respond_with @dashboards, each_serializer: DashboardSerializer
  end

  def show
    @dashboard = Dashboard.find(params[:id])
    # respond_with @dashboard
    render :json => @dashboard, :serializer => DashboardSerializer
  end

  def update
    @dashboard = Dashboard.first
    @city = City.where(id: params[:city_id]).take
    # @dashboard.cities << @city if @city.present?
    # binding.pry
    # @dashboard.update()
    # respond_with @dashboard, each_serializer: DashboardSerializer
    # respond_with @dashboard, each_serializer: DashboardSerializer

    # @dashboard.update(city_ids: @city.id)
    # respond_with @dashboard, each_serializer: DashboardSerializer
    # binding.pry
    if @dashboard.cities << @city
      respond_with @dashboard, each_serializer: DashboardSerializer
    else
      render nothing: true, status: 404
    end


  end
  # def create
  #   binding.pry
  # end
end
