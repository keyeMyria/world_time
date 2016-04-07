class OperationDashboardsController < ApplicationController
  before_action :set_time_zone, only: [:create, :destroy]
  before_action :set_dashboard, only: [:create, :destroy]

  # def index
  #   binding.pry
  # end

  def create
    @dashboard.time_zones << @time_zone
    redirect_to :back
  end

  def destroy
    zones = @dashboard.time_zones
    first_zone = zones.find_index(@time_zone)
    @dashboard.time_zones.delete_at(first_zone)
  end

private

  def set_time_zone
    @time_zone = TimeZone.find(params[:time_zone_id])
  end

  def set_dashboard
    @dashboard = Dashboard.find(params[:dashboard_id])
  end

end

