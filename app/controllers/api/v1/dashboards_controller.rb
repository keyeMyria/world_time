class Api::V1::DashboardsController < Api::V1::BaseController
  before_action :city_ids_params, only: [:update]
  before_action :set_dashboard, only: [:update, :show]

  def index
    @dashboards = Dashboard.all
    respond_with @dashboards, each_serializer: DashboardSerializer
  end

  def show
    respond_with @dashboard, serializer: DashboardSerializer
  end

  def update
    @dashboard.update(dashboard_params)
    @dashboard.set_home_city
    render json: @dashboard, serializer: DashboardSerializer
  end

private

  def dashboard_params
    params.permit(city_ids: [] )
  end

  def city_ids_params
    params[:city_ids] ||= [] if params.has_key?(:city_ids)
  end

  def set_dashboard
    @dashboard = Dashboard.find(params[:id])
  end

end
