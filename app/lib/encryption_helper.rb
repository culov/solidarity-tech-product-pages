# encoding: utf-8
module EncryptionHelper
	require 'openssl'
	require 'base64'
	def self.decrypt(data)
		@alg = 'aes-128-cbc'
		@key = ENV['JS_CRYTPO_KEY']  ## 16 Characters
		@iv = ENV['JS_CRYTPO_IV'] ## 16 characters
	    des = OpenSSL::Cipher::Cipher.new(@alg)
	    des.decrypt
	    des.key = @key
	    des.iv = @iv
	    result = des.update(Base64.decode64(data))
	    result << des.final
	    return result
	end
	def self.encrypt(data)
		@alg = 'aes-128-cbc'
		@key = ENV['JS_CRYTPO_KEY']  ## 16 Characters
		@iv = ENV['JS_CRYTPO_IV'] ## 16 characters
	    des = OpenSSL::Cipher::Cipher.new(@alg)
	    des.encrypt
	    des.key = @key
	    des.iv = @iv
	    # encrypted = des.update(Base64.decode64(data)) + des.final
	    # encrypted = des.update(Base64.encode64(data)) + des.final
	    result = des.update(data)
	    result << des.final
	    return Base64.encode64(result)
	end
end