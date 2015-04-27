Rails.application.routes.draw do
  scope :api do
    resources :repos, only: [:index], defaults: {format: :json}
  end
  root "home#index"
  get "/dashboard", to: "home#show"
  get "auth/github/callback", to: "sessions#create"
end
