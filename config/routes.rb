Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get 'creatives/index'
  get "tests/test"

  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :cities, defaults: { format: :json } do
        put :set_home, on: :member
      end

      resources :dashboards, defaults: { format: :json }

    end
  end

end
