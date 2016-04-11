require 'rails_helper'

describe 'Dashboard API' do

  describe 'GET /index' do
    # let!(:cities) { create_list(:city, 5) }
    let!(:dashboard) { create_list(:dashboard, 5) }
    before { get "/api/v1/dashboards" }

    it 'included in dashboard object' do
      expect(response.body).to have_json_size(5).at_path("dashboards")
    end

    it 'included in cities object' do
      expect(response.body).to have_json_path("cities")
    end

    %w(id city_ids).each do |attr|
      it "does contain #{attr}" do
        expect(response.body).to have_json_path("dashboards/0/#{attr}")
      end
    end
  end

end
