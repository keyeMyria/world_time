require 'rails_helper'

describe 'Cities API' do

  describe 'GET /index' do
    let!(:cities) { create_list(:city, 5) }
    before { get "/api/v1/cities" }

    it 'included in cities object' do
      expect(response.body).to have_json_size(5)
    end

    %w(id text home hour).each do |attr|
      it "does contain #{attr}" do
        expect(response.body).to have_json_path("0/#{attr}")
      end
    end
  end

end
