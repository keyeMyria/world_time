class DashboardsController < ApplicationController

  def show
    @dashboard = Dashboard.first
  end

end
