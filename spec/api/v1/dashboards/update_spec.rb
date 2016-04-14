require 'rails_helper'

describe 'Dashboard API' do

  describe 'PUT /api/v1/dashboards/:id/' do
    let!(:city) { create(:city) }
    let!(:dashboard) { create(:dashboard ) }
    let!(:dashboard_city) { create(:dashboard_city, dashboard: dashboard, city: city) }

    it 'returns 304 status code' do
      put "/api/v1/dashboards/#{dashboard.id}", city_ids: [city.id]

      expect(response.status).to eq 304
    end


  end

end
