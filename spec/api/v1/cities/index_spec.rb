require 'rails_helper'

describe 'Cities API' do

  describe 'GET /index' do
    let!(:cities) { create_list(:city, 5) }
    before { get "/api/v1/cities" }

    it 'returns 200 status code', :lurker do
      expect(response).to be_success
    end

    it 'included in cities object' do
      expect(response.body).to have_json_size(5)
    end

  end

end
