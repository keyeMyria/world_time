class Dashboard < ActiveRecord::Base

  belongs_to :user

  has_many :dashboard_cities
  has_many :cities, through: :dashboard_cities

  def set_home_city
    # binding.pry
    self.cities.first.set_home if self.cities.count == 1 && self.cities.first.home == false
  end

end
