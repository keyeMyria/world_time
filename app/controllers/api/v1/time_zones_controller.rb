class Api::V1::TimeZonesController < Api::V1::BaseController

  def index
    @time_zones = TimeZone.all
    respond_with @time_zones, root: false
  end

  def create
    binding.pry
  end

end
