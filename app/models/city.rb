class City < ActiveRecord::Base

  has_many :dashboard_cities
  has_many :dashboards, through: :dashboard_cities

  belongs_to :hour
end
