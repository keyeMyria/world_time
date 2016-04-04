class TimeZone < ActiveRecord::Base

  has_many :dashboard_time_zones
  has_many :dashboards, through: :dashboard_time_zones

end
