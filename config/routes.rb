Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :cities, defaults: { format: :json } do
        put :set_city_home, on: :collection
      end

      resources :dashboards, defaults: { format: :json }

    end
  end

end
