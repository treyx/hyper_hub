Rails.application.routes.draw do
  root "home#index"
  get "/dashboard", to: "dashboard#show"
  get "auth/github/callback", to: "sessions#create"
end
