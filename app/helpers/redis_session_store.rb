module RedisSessionStore
  def store_in_redis(key, value, expiry = 2.hours)
    redis_key = "session:#{session.id}:#{key}"
    $redis.set(redis_key, value.to_json)
    $redis.expire(redis_key, expiry)
  end

  def retrieve_from_redis(key)
    redis_key = "session:#{session.id}:#{key}"
    value = $redis.get(redis_key)
    value ? JSON.parse(value) : nil
  end


  def self.redis
    $redis  # Assuming $redis is your Redis client instance
  end
  
  def self.set_flag(key, expiry = 5)  # Set the flag with a 5 second expiry
    redis_key = "flag:#{key}"
    redis.set(redis_key, "true", ex: expiry, nx: true)
  end
  
  def self.flag_exists?(key)
    redis_key = "flag:#{key}"
    redis.exists?(redis_key)
  end
end