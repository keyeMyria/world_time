class City < ActiveRecord::Base

  has_many :dashboard_cities
  has_many :dashboards, through: :dashboard_cities

  belongs_to :hour

  def set_home

    City.all.each do |city|
      city.home = false
      city.save
    end

    self.home = true
    self.save

  end


end
