Rails.application.routes.draw do

  devise_for :users

  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :cities, defaults: { format: :json }
      resources :operation_dashboard, defaults: { format: :json }, only: [:show]

    end
  end

  # resources :time_zones
  # resource :operation_dashboard

  # root 'dashboards#show'

end
