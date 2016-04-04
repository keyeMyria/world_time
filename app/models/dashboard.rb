class Dashboard < ActiveRecord::Base

  has_many :dashboard_time_zones
  has_many :time_zones, through: :dashboard_time_zones

end
