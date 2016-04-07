class DashboardCity < ActiveRecord::Base

  belongs_to :city
  belongs_to :dashboard

end
