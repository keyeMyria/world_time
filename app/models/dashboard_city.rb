class DashboardCity < ActiveRecord::Base

  belongs_to :time_zone
  belongs_to :dashboard

end
