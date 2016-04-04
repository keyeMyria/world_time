Rails.application.routes.draw do

  devise_for :users

  # root 'home#index'
  # root 'time_zones#index'
  resources :time_zones
  resource :operation_dashboard

  root 'dashboards#show'

end
