Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :repos, only: [:index], defaults: { format: :json }
      resources :commits, only: [:index], defaults: { format: :json }
    end
  end
  root "home#index"
  get "/dashboard", to: "home#show"
  get "auth/github/callback", to: "sessions#create"
end
