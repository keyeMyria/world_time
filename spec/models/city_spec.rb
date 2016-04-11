require 'rails_helper'

describe City do

  it { should have_many(:dashboard_cities) }
  it { should have_many(:dashboards) }
  it { should belong_to(:hour) }

  describe 'set_city_home' do
    let(:cities) { create_list(:city, 5) }

    it 'set self true home ' do
      city = cities.first
      city.set_city_home

      expect(city.home).to be_truthy
    end

    it 'set other false home ' do
      city = cities.first
      city.set_city_home

      cities.delete(city)

      cities.each do |city|
        expect(city.home).to be_falsey
      end

    end

  end

end

