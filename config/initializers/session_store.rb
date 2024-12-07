Rails.application.config.session_store :cookie_store, 
  key: "_stor-devel-solidarity_session_#{Rails.env}", 
  expire_after: 2.years