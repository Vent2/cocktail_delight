Rails.application.routes.draw do
  resources :cocktail_ingredients
  resources :ingredients
  resources :cocktails
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/cocktails/last', to: 'cocktails#last'
end

