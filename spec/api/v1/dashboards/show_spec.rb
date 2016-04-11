require 'rails_helper'

describe 'Dashboard API' do

  describe 'GET /api/v1/city/:id/' do
    let!(:dashboard) { create(:dashboard) }

    it 'returns 200 status code', :lurker do
      get "/api/v1/dashboards/#{dashboard.id}"
      expect(response).to be_success
    end

    it "give non exist city" do
      get "/api/v1/dashboards/999"
      expect(response.status).to eq 404
    end

  end

end
