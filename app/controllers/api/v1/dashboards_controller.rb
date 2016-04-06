class DashboardsController < ApplicationController

  def show
    @dashboard = Dashboard.first
  end

  # def create
  #   binding.pry
  # end
end
