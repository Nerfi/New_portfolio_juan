Rails.application.routes.draw do

  get 'about/index'
  devise_for :users
  root to: 'pages#home'
  #get 'about/tecnologies', as: :tecnologies
  get 'tecnologies', to: 'about#tecnologies', as: :tecnologies



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
