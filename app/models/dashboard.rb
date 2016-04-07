class Dashboard < ActiveRecord::Base

  belongs_to :user

  has_many :dashboard_cities
  has_many :cities, through: :dashboard_cities

end
