require 'subdomain'

Rails.application.routes.draw do





  constraints subdomain: 'dashboard' do




    get "user-filters/data" => "dashboard/users/user_filters#data"

    get 'automations/:id' => "dashboard/automations/automations#show"
    get 'automations' => "dashboard/automations/automations#index"
    post 'automations/create' => "dashboard/automations/automations#create"



    post 'resource/audio/upload' => "dashboard/resources/upload#audio"
    delete 'resource/audio/upload' => "dashboard/resources/upload#delete_audio"





    get 'people/:hash_id' => "dashboard/users/users#show"
    get 'people/:hash_id/activity' => "dashboard/users/users#activity"
    post 'people/:hash_id/update' => "dashboard/users/users#update"
    delete 'people/:hash_id/delete' => "dashboard/users/users#destroy"




    get 'search/users' => "dashboard/search#users"
    get 'search/users/json' => "dashboard/search#select2_users"
    get 'search/all' => "dashboard/search#all"
    get 'searches' => "dashboard/search#index"

    

    post 'image/upload' => 'dashboard/resources/upload#image_upload'
    post 'file/upload' => "dashboard/resources/upload#file_upload"
    post 'file/upload/delete' => "dashboard/resources/upload#delete_file_upload"
    delete 'file/upload/delete' => "dashboard/resources/upload#delete_file_upload"


    post 'resources/email/test/send' => "dashboard/resources/send_tests#email"
    post 'resources/text/test/send' => "dashboard/resources/send_tests#text"
    get 'resources/email/test/send' => "dashboard/resources/send_tests#email"


    get '', to: redirect('/people')



  end





  mount ActionCable.server => '/cable'
  






  # devise_for :users, controllers: { sessions: 'users/sessions'}, skip: [:sessions, :registrations, :passwords]

  # devise_for :solidarity_users,
  #         controllers: { passwords: 'admins/passwords' }


  # devise_for :admins,
  #         controllers: { sessions: 'admins/sessions', confirmations: 'admins/confirmations', two_factor_authentication: "admins/two_factor_authentication", passwords: 'admins/passwords' },
  #         skip: [:sessions, :two_factor_authentication, :passwords]


  as :admin do
      constraints subdomain: 'dashboard' do
        root to: redirect('/people'), as: :admin_root

        get 'login', to: "admins/sessions#new", as: :new_admin_session, :from_dashboard => true
        post 'login', to: 'admins/sessions#create', as: :admin_session, :from_dashboard => true
        delete "logout" => "admins/sessions#destroy", :as => :destroy_admin_session

        get 'admins/two_factor_authentication', to: 'admins/two_factor_authentication#update', as: :new_admin_two_factor_authentication
        post 'admins/two_factor_authentication', to: 'admins/two_factor_authentication#update', as: :admin_two_factor_authentication
        get 'admins/two_factor_authentication/resend_code', to: 'admins/two_factor_authentication#resend_code', as: :resend_code_admin_two_factor_authentication

        put 'resource/password' => 'users/passwords#update'
        post 'resource/password' => 'users/passwords#create'
        get 'admins/password/new' => 'admins/passwords#new', as: :new_admin_password


      end

  end

  as :user do
      scope constraints: lambda { |req| !(req.subdomain == 'www' && req.domain == "solidarity.tech") } do
        get 'login', to: 'users/sessions#new', as: :new_user_session #new_session,
        post 'login', to: 'users/sessions#create', as: :session
      end
      delete 'logout', to: 'devise/sessions#destroy', as: :destroy_user_session
      get 'logout', to: 'devise/sessions#destroy'
      # get 'signup' => 'users/registrations#new', as: :new_registration
      # post 'signup' => 'users/registrations#create', as: :registration
       get 'users/password/new' => 'users/passwords#new', as: :new_password


  end




  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'




  mount Ahoy::Engine => "/ahoy", as: :my_ahoy
  mount AhoyEmail::Engine => "/ahoy", as: :my_ahoy_email
  mount Mailkick::Engine => "/mailkick"



  constraints subdomain: "www", domain: ["solidarity.tech", "staging-solidarity.com", "localhost"] do
    root "marketing#index", as: :marketing_root
    get 'crm', to: 'marketing#crm'
    get 'calling', to: 'marketing#voice'
    get 'texting', to: 'marketing#sms'
    get 'email', to: 'marketing#email'
    get 'events', to: 'marketing#events'
    get 'reporting', to: 'marketing#reporting'
    get 'field-app', to: 'marketing#field_app'
    get 'website', to: 'marketing#website'
    get 'pricing', to: 'marketing#pricing'
    get 'privacy', to: 'marketing#privacy'
    get 'terms', to: 'marketing#terms'
    get 'cookies', to: 'marketing#cookies'
    get 'industries/non-profits', to: 'marketing#industries_non_profits'
    get 'industries/unions', to: 'marketing#industries_unions'
    get 'admins/two_factor_authentication',  to: redirect(subdomain: "dashboard")
    match 'schedule-a-call', to: 'onboarding#intake', via: [:get, :post]
    match 'find-a-time' => "actions#action_by_url", via: [:get, :post], action_url: "find-a-time"
    get 'find-a-time/confirm' => "actions#call_confirmation", action_url: "find-a-time"
    get 'find-a-time/reschedule' => "actions#reschedule_call", action_url: "find-a-time"

    get 'privacy' => "blog#privacy"
    get 'terms' => "blog#terms"
    get 'admins/two_factor_authentication',  to: redirect(subdomain: "dashboard")
    get 'support', to: 'marketing#support'  #for Zoom

    get 'sms' => redirect("/texting")
    get 'voice' => redirect("/calling")

    # https://solidarity.tech/event/cancel/707?rsvp_token=H2ZDLdiZ4GEttJ+JcS5XJg==\n&rsvp_id=62837
    # redirect to cancel/confirm page most associated with that
    constraints event_action_type: /cancel|confirm/ do
      get 'event/:event_action_type/:event_session_id' => "actions#event_follow_up_redirect"
    end

  end


  #this here instead of above domain constraint routes, allows ST blog posts to be rendered 
  constraints subdomain: "www", domain: ["solidarity.tech", "staging-solidarity.com", "localhost"] do
    get '*path', to: 'marketing#page_not_found'
  end


  get 'blank' => "blog#blank"


  constraints subdomain: 'dashboard' do
    match '*path', to: 'dashboard#routing_error', via: [:get, :post]
  end
  match '*path', to: 'application#routing_error', via: [:get, :post]#, constraints: lambda{|req|  !req.original_url.to_s.include?("ahoy") && !req.original_url.to_s.include?("mailkick")}#{ path: /!(ahoy)/ }



end