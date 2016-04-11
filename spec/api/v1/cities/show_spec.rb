require 'rails_helper'

describe 'Cities API' do

  describe 'GET /api/v1/city/:id/' do
    let!(:city) { create(:city) }

    it 'returns 200 status code' do
      get "/api/v1/cities/#{city.id}"
      expect(response).to be_success
    end

    %w(id text hour home).each do |attr|
      it "does contain #{attr}" do
        get "/api/v1/cities/#{city.id}"
        expect(response.body).to have_json_path("#{attr}")
      end
    end

    it "give non exist city" do
      get "/api/v1/cities/999"
      expect(response.status).to eq 404
    end

  end

end
