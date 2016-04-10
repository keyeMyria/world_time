class Api::V1::DashboardsController < Api::V1::BaseController

  def index
    @dashboards = Dashboard.all
    respond_with @dashboards, each_serializer: DashboardSerializer
  end

  def show
    @dashboard = Dashboard.find(params[:id])
    respond_with @dashboard, serializer: DashboardSerializer
  end

  def update

    @dashboard = Dashboard.find(params[:id])
    # binding.pry
    # @dashboard.city_ids
    @dashboard.update(dashboard_params)
    render json: @dashboard, serializer: DashboardSerializer
  end

private

  def dashboard_params
    params.permit(city_ids: [])
  end

end
