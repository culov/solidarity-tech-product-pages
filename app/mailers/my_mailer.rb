class MyMailer < ApplicationMailer
	default from: email_address_with_name("noreply@solidarity.tech", "Solidarity Tech")

	def basic_message(user, subject, content, noreply=false)
    	@user = user
      track message: false
    	@content = content

      if noreply
        mail(to: @user.email, subject: subject, delivery_method_options: self.smtp_settings(@from) )
      else
        @from = @user.root_organization.default_email_sender_from
    	 mail(to: @user.email, subject: subject, from: @from, delivery_method_options: self.smtp_settings(@from) )
      end
  end


  def email_message(email, subject, content, from_name, from_address, reply_to, email_message_id=nil, user=nil)
      @user = user
      track open: true, click: true
      track extra: {email_message_id: email_message_id} if email_message_id
      @email_message_id = email_message_id
      @content = content

      # @read1 = open("https://s3.amazonaws.com/irdu/images/5-8-airport-strike-map.png") {|f| f.read }
      # attachments['strike-map.png'] = @read1

      # @read2 = open("https://s3.amazonaws.com/irdu/images/5-8-strike.png") {|f| f.read }
      # attachments['strike-flyer.png'] = @read2
      puts "from_address: " + from_address.inspect
      mail(to: email, subject: subject, from: from_name + ' <'+ from_address+'>', reply_to: reply_to, delivery_method_options: self.smtp_settings(from_address))

    end

    def email_message_to_legislator(legislator_email, subject, content, from_name, reply_to, email_action_id=nil, user=nil)
      @user = user
      track open: true, click: true
      track extra: {email_action_id: email_action_id} if email_action_id
      @email_action_id = email_action_id
      @content = content
      @from = from_name + ' <'+ @user.root_organization.default_email_sender_address+'>'

      mail(to: legislator_email, subject: subject, from: @from, reply_to: reply_to, cc: reply_to, delivery_method_options: self.smtp_settings(@from))


    end


    def email_message_to_custom_target(target_email, subject, content, cc_to=nil, email_action_id=nil, user=nil)
      @user = user
      track open: true, click: true
      track extra: {email_action_id: email_action_id} if email_action_id
      @email_action_id = email_action_id
      @content = content
      @from = @user.root_organization.default_email_sender_from
      mail(to: target_email, subject: subject, from: @from, cc: cc_to, delivery_method_options: self.smtp_settings(@from))

    end



end
