AhoyEmail.api = true

AhoyEmail.default_options[:open] = true
AhoyEmail.default_options[:click] = true
AhoyEmail.default_options[:utm_params] = false


class EmailSubscriber
  def open(event)
    # any code you want
    @my_message = event[:message]
    # Airbrake.notify(:error_class => "ahoy open:"+event.inspect, :error_message => "ahoy open:"+event.inspect)
    Activity.generate("open_email", @my_message.user_id, @my_message) if @my_message && @my_message.user_id && Ahoy::Message.find(@my_message.id).did_bounce != true
  
  end

  def click(event)
    # any code you want
    # @my_message = event[:message]
    begin
        @original_url = URI.parse(event[:url].to_s.strip)
        @uri = @original_url.dup
        @uri.fragment = @uri.query = nil
        if event[:message]
            @umlc = UserMessageLinkClick.create(message_resource: event[:message], user_id: event[:message].user_id, url: @uri.to_s)
            @original_url.query = (@original_url.query.to_s + "#{'&' if !@original_url.query.blank?}stcid=#{@umlc.id}")
        end

        
        return @original_url.to_s
    rescue => exception
        Airbrake.notify(exception)
        return event[:url]
    end
  end
end

AhoyEmail.subscribers << EmailSubscriber.new


class AhoyMailObserver
    def self.delivered_email(message)
        ahoy_message = message.ahoy_message
        ahoy_message.update(message_id: message.message_id) if ahoy_message && message
    end
end
ActionMailer::Base.register_observer(AhoyMailObserver)
