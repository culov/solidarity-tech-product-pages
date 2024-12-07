# frozen_string_literal: true

class SubdomainConstraint

  STATIC_DOMAINS = %w[solidarity-tech.org solidarity.tech localhost lvh.me].freeze
  # STATIC_SUB_DOMAINS = %w[lms biblio ip c2i epn archimed].freeze
  RESERVED_SUB_DOMAINS = %w[www dashboard dash app staging api cdn dev sites beta status docs].freeze

  def initialize
    generate_hosts
  end

  def generate_hosts
    dynamic_domains = Website.select('DISTINCT url_slug').pluck(:url_slug).uniq.compact
    sanitized_dynamic_domains = dynamic_domains - domains_for(STATIC_DOMAINS, RESERVED_SUB_DOMAINS)
    @hosts = sanitized_dynamic_domains
    set_timestamp
  end

  def set_timestamp
    Rails.cache.write('rails_routes_ts', Digest::MD5.hexdigest(@hosts.inspect))
  rescue StandardError
    warn "WARNING - Error in SUBDOMAIN set_timestamp method, maybe redis is down? (method:#{__method__} in #{__FILE__}"
  end

  def matches?(request)
    check_if_expired_routes?
    # puts "request.host: " + request.host
    # puts "request.subdomain: " + request.subdomain
    # puts "@hosts: " + @hosts.inspect
    does_match = @hosts.include?(request.subdomain)

    #Airbrake.notify({subdomain_constraint: does_match, data: "request.host:#{request.host}, request.subdomain: #{request.subdomain}"})

    return does_match
  rescue StandardError
    warn "WARNING - Error detecting Route auth for current domain #{request.host} (method:#{__method__} in #{__FILE__}"
    false
  end

  def domains_for(domains, subdomains)
    subdomains.product(domains).map { |domain| domain.join '.' }
  end

  def check_if_expired_routes?
    if Rails.cache.read('rails_routes_ts') != Digest::MD5.hexdigest(@hosts.inspect)
      generate_hosts
    end
  rescue StandardError
    warn "WARNING - Error in check_if_expired_routes? method, maybe redis is down? (method:#{__method__} in #{__FILE__}"
  end
end







class DomainConstraint

  def initialize
    generate_hosts
  end

  def generate_hosts
    distinct_hosts = WebsiteDomain.select('DISTINCT host').pluck(:host).uniq.compact
    @hosts = distinct_hosts.each_with_object([]) do |host, array|
      array.push(host)
      # Add 'www' version unless it already includes 'www' or is a subdomain
      array.push("www.#{host}") unless host.split('.').first == 'www' || host.count('.') > 1
    end
    set_timestamp
  end

  def set_timestamp
    Rails.cache.write('rails_domain_routes_ts', Digest::MD5.hexdigest(@hosts.inspect))
  rescue StandardError
    warn "WARNING - Error in DOMAIN set_timestamp method, maybe redis is down? (method:#{__method__} in #{__FILE__}"
  end

  def matches?(request)
    check_if_expired_routes?

    does_match = @hosts.include?(request.host)

    #Airbrake.notify({domain_constraint: does_match, data: "request.host:#{request.host}, request.subdomain: #{request.subdomain}"})

    return does_match
  rescue StandardError
    warn "WARNING - Error detecting Route auth for current domain #{request.host} (method:#{__method__} in #{__FILE__}"
    false
  end



  def check_if_expired_routes?
    if Rails.cache.read('rails_domain_routes_ts') != Digest::MD5.hexdigest(@hosts.inspect)
      generate_hosts
    end
  rescue StandardError
    warn "WARNING - Error in check_if_expired_routes? method, maybe redis is down? (method:#{__method__} in #{__FILE__}"
  end
end




