require 'rails_helper'

describe 'Cities API' do

  describe 'PUT /set_home' do
    let!(:cities) { create_list(:city, 5) }
    before { @city = City.first }
    before { put "/api/v1/cities/#{@city.id}/set_home" }

    it 'included in city object' do
      expect(response.body).to have_json_size(5)
    end

    it 'returns 200 status code', :lurker do
      expect(response).to be_success
    end

  end

  describe 'PUT /set_sity_home not exist' do
    it "give non exist city" do
      put "/api/v1/cities/set_home"
      expect(response.status).to eq 404
    end
  end

end
