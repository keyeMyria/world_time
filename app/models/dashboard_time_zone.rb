class DashboardTimeZone < ActiveRecord::Base

  belongs_to :time_zone
  belongs_to :dashboard

end
