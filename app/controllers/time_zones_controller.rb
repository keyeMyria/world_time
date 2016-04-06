class TimeZonesController < ApplicationController
  before_action :set_time_zone, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @time_zones = TimeZone.all
    render json: @time_zones, each_serializer: TimeZoneSerializer
  end

  def show
    respond_with(@time_zone)
  end

  def new
    @time_zone = TimeZone.new
    respond_with(@time_zone)
  end

  def edit
  end

  def create
    @time_zone = TimeZone.new(time_zone_params)
    @time_zone.save
    respond_with(@time_zone)
  end

  def update
    @time_zone.update(time_zone_params)
    respond_with(@time_zone)
  end

  def destroy
    @time_zone.destroy
    respond_with(@time_zone)
  end

  private
    def set_time_zone
      @time_zone = TimeZone.find(params[:id])
    end

    def time_zone_params
      params.require(:time_zone).permit(:name)
    end
end
