Rails.application.routes.draw do

  devise_for :users

  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :cities, defaults: { format: :json }
      resources :dashboards, defaults: { format: :json }
      resources :operation_dashboards, defaults: { format: :json }, only: [:show]

    end
  end

end
