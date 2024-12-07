module SimpleTokenAuthentication
  class TokenGenerator
    include Singleton

    def generate_token
      Devise.friendly_token(64)
    end
  end
end