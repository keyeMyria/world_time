Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get 'creatives/index'
  get "tests/test"

  # post 'authenticate' => 'auth#authenticate'

  root 'home#index'

  namespace :api do
    namespace :v1 do


      get 'test', to: 'tests#test'

      resources :cities, defaults: { format: :json } do
        put :set_home, on: :member
      end

      resources :dashboards, defaults: { format: :json }

    end
  end

end
