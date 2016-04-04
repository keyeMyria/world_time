class DashboardsController < ApplicationController


  # def index
  # end

  def show
    @dashboard = Dashboard.first
  end


end
