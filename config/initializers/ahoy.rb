class Ahoy::Store < Ahoy::DatabaseStore
  # customize here
   # Ahoy.track_visits_immediately = true
  
  def track_visit(data)
    # data[:visitor_email] = "example@email.com"
    data[:ip] = request.env['HTTP_X_REAL_IP'] ? request.env['HTTP_X_REAL_IP'] : request.remote_ip

    #hfkVrCS9PNZCU_he2MpHOqXwFUL = vcf contact card
    if data[:landing_page].to_s.scan(/\/api\/|\/api\.|thumbnail_preview|dashboard.solidarity|dashboard.localhost|cdn.solidarity.tech|hfkVrCS9PNZCU_he2MpHOqXwFUL/).length == 0

      super(data)
      
    end

  end

  def visit_model
    Visit
  end



end

