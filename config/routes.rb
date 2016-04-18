Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  get "tests/test"
  get 'creatives/index'

  root 'home#index'

  namespace :api, as: nil do
    namespace :v1, as: nil do

      devise_for :users, controllers: {
        sessions: 'api/v1/users/sessions',
        registrations: 'api/v1/users/registrations'
      }

      get 'test', to: 'tests#test'

      resources :cities, defaults: { format: :json } do
        put :set_home, on: :member
      end

      resources :dashboards, defaults: { format: :json }

    end
  end

end
