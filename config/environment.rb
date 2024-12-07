# Load the Rails application.
require_relative 'application'

# ENV['RAILS_MASTER_KEY'] = 'd7b4337ba3a05c0537c6a4113264b624'

# Initialize the Rails application.
Rails.application.initialize!


require "#{Rails.root}/lib/election.rb"
# require "#{Rails.root}/lib/st_where_exists.rb"
# require 'signalwire/sdk'



def random64(n=64)
	SecureRandom.urlsafe_base64(n)
end



def photo_from_url(url)
	photo_url = nil
  if !Nokogiri::HTML(open(url)).css("meta[property='og:image']").blank?
    photo_url = Nokogiri::HTML(open(url)).css("meta[property='og:image']").first.attributes["content"].text
  end
  return photo_url
end

def url_request_with_proxy(url, no_rush=false)
	uri = URI(url)
	http=nil
	request=nil
	randp = DO_PROXY_CLASS12
	http = randp.new(uri.host, uri.port)
	request = randp::Get.new(uri.request_uri)

	response = http.request(request)
	response.body
end

def url_request(url)
	uri = URI(url)
	http = Net::HTTP.new(uri.host, uri.port)
	request = Net::HTTP::Get.new(uri.request_uri)
	response = http.request(request)
	response.body
end



require 'uri'
require 'net/http'
def url_request_https(url)
	uri = URI(url)
	res = Net::HTTP.get_response(uri)
	res.body
end





require "origami"

def pdf_field_metadata(file_path, fields_to_find=[])
  pdf = Origami::PDF.read file_path

  field_to_page = {}
  pdf.pages.each_with_index do |page, page_index|

    (page.Annots || []).each do |annot|
      field_to_page[annot.refno] = page_index
    end
  end

  field_metas = []
  pdf.fields.each do |field|
  	if fields_to_find.length==0 || fields_to_find.include?(field.T)
	  	# puts field.Rect
	  	if field.Rect
		    field_metas << {
		      name: field.T,
		      page_index: field_to_page[field.no],
		      x: field.Rect[0].to_f,
		      y: field.Rect[1].to_f,
		      h: field.Rect[3].to_f - field.Rect[1],
		      w: field.Rect[2].to_f - field.Rect[0]
		    }
		end
	end
  end

  field_metas
end


def humanize(secs)
  [[60, :seconds], [60, :minutes], [24, :hours], [1000, :days]].map{ |count, name|
    if secs > 0
      secs, n = secs.divmod(count)
      "#{n.to_i} #{name}"
    end
  }.compact.reverse.join(' ')
end





def valid_phone_number?(phone_number, root_organization_id=nil)

	return PhoneNumber.lookup_phone_number_carrier(phone_number, root_organization_id)

end



#constants
DEAD_MILES_DRIVEN_PER_LIVE_MILE = 1.1
WEEKS_IN_A_MONTH = 4.0
WORKING_WEEKS_IN_A_YEAR = 50.0
KBB_ADDITIVE = 50000.0




def get_minimum_wage_stats

	operating_expenses_hash={:car_washes_per_month=>"40", :tire_costs_per_year=>"400", :routine_maintenance_per_year=>"750", :unexpected_maintenance_per_year=>"0", :accessories_per_year=>"100", :phone_service_per_month=>"", :percentage_phone_use_rideshare=>""}
	ownership_expenses_hash={:insurance=>{:rideshare_insurance_per_month=>"50", :base_insurance_per_month=>"150", :vehicle_registration_per_year=>"", :include_insurance_and_registration=>"true"}, :financing=>{:car_loan_monthly_payment=>"315", :vehicle_rideshare_usage_percentage=>"90", :include_car_note=>"true", :type=>"buying_loan", :kbb_value_now=>"9143", :kbb_value_plus_50k=>"6460"}}
	my_driving_hash={:average_trip_distance=>"6.7", :average_trip_time=>"16.21", :average_trips_per_hour=>"1.77", :average_price_of_gas=>"", :hours_driving_per_week=>"40", :vehicle_mpg=>"50"}
	market_hash={:market_id=>"85", :service=>"uberx"}

	@over_min = []
	RideshareMarket.all.each do |market|
		@average_trip_time = (market.average_trip_time.nil? || market.average_trip_time.blank?) ? "14.22" : market.average_trip_time
		@average_trip_distance = market.average_trip_distance.nil? ? "6.4" : market.average_trip_distance
		my_driving_hash={:average_trip_distance=>@average_trip_distance, :average_trip_time=>@average_trip_time, :average_trips_per_hour=>"1.77", :average_price_of_gas=>market.gas_prices_in_state, :hours_driving_per_week=>"40", :vehicle_mpg=>"50"}
		market_hash={:market_id=>market.id.to_s, :service=>"uberx"}
		@resp = calculate_wages(operating_expenses_hash, ownership_expenses_hash, my_driving_hash, market_hash)

		if @resp[:hourly_rate].to_f > @resp[:minimum_wage].to_f
			@over_min.push(market)
		end
	end
	@over_min
end

def calculate_wages(operating_expenses_hash, ownership_expenses_hash, my_driving_hash, market_hash)

	# @gas_per_week = operating_expenses_hash[:gas_per_week].to_f
	@car_washes_per_month = operating_expenses_hash[:car_washes_per_month].to_f
	@tires_per_year = operating_expenses_hash[:tire_costs_per_year].to_f
	@routine_maintenance_per_year = operating_expenses_hash[:routine_maintenance_per_year].to_f
	@unexpected_maintenance_per_year = operating_expenses_hash[:unexpected_maintenance_per_year].to_f
	@accessories_per_year = operating_expenses_hash[:accessories_per_year].to_f
	@phone_per_month = operating_expenses_hash[:phone_service_per_month].to_f
	@phone_for_rideshare_percentage = (operating_expenses_hash[:percentage_phone_use_rideshare].to_f/100.0)


	@car_washes_per_week = @car_washes_per_month/WEEKS_IN_A_MONTH
	@tires_per_week = @tires_per_year/WORKING_WEEKS_IN_A_YEAR
	@routine_maintenance_per_week = @routine_maintenance_per_year/WORKING_WEEKS_IN_A_YEAR
	@unexpected_maintenance_per_week = @unexpected_maintenance_per_year/WORKING_WEEKS_IN_A_YEAR



	@accessories_per_week = @accessories_per_year/WORKING_WEEKS_IN_A_YEAR

	@phone_per_week = 0.0
	if @phone_per_month
		@phone_per_week = (@phone_per_month*@phone_for_rideshare_percentage)/WEEKS_IN_A_MONTH
	end


	@market = RideshareMarket.find_by_id(market_hash[:market_id])

	#my driving - with defaults
	@average_trip_time = my_driving_hash[:average_trip_time].to_f
	@average_trip_distance = my_driving_hash[:average_trip_distance].to_f
	@trips_per_hour = my_driving_hash[:average_trips_per_hour].to_f


	@dead_miles_per_live_mile = my_driving_hash[:average_dead_miles_per_on_fare_mile].nil? ? 1 : my_driving_hash[:average_dead_miles_per_on_fare_mile].to_f

	#my driving - user input
	@hours_working_per_week = my_driving_hash[:hours_driving_per_week].to_f

	logger.info "trips per hour: " + @trips_per_hour.to_s
	logger.info "hours_working_per_week: " + @hours_working_per_week.to_s
	logger.info "average_trip_distance: " + @average_trip_distance.to_s
	logger.info "my driving hash: " + my_driving_hash.inspect


	@total_on_fare_miles_per_week = @average_trip_distance * @trips_per_hour * @hours_working_per_week
	@total_dead_miles_per_week = @total_on_fare_miles_per_week * @dead_miles_per_live_mile

	@gas_price = my_driving_hash[:average_price_of_gas].to_f

	logger.info "@gas_price: " + @gas_price.inspect
	logger.info "@total_on_fare_miles_per_week: " + @total_on_fare_miles_per_week.inspect
	logger.info "@total_dead_miles_per_week: " + @total_dead_miles_per_week.inspect
	logger.info "my_driving_hash[:vehicle_mpg]: " + my_driving_hash[:vehicle_mpg].inspect

	@gas_per_week = ((@total_on_fare_miles_per_week + @total_dead_miles_per_week)/my_driving_hash[:vehicle_mpg].to_f)*@gas_price


	#ownership expenses
	@weekly_ownership_expenses = 0.0


	@insurance_hash = ownership_expenses_hash[:insurance]
	@base_insurance_per_month = @insurance_hash[:base_insurance_per_month].to_f
	@rideshare_insurance_per_month = @insurance_hash[:rideshare_insurance_per_month].to_f
	@vehicle_registration_per_year = @insurance_hash[:vehicle_registration_per_year].to_f
	@weekly_insurance_costs = 0
	if @insurance_hash[:include_insurance_and_registration].to_bool
		@weekly_insurance_costs = ((@base_insurance_per_month/WEEKS_IN_A_MONTH) + (@rideshare_insurance_per_month/WEEKS_IN_A_MONTH) + (@vehicle_registration_per_year/WORKING_WEEKS_IN_A_YEAR))
		@weekly_ownership_expenses += ((@base_insurance_per_month/WEEKS_IN_A_MONTH) + (@rideshare_insurance_per_month/WEEKS_IN_A_MONTH) + (@vehicle_registration_per_year/WORKING_WEEKS_IN_A_YEAR))
	end



	#buying
	@financing = ownership_expenses_hash[:financing]
	@depreciation_costs_per_week = 0.0
	@weekly_operating_expenses= 0.0
	@car_weekly_payment = 0

	if @financing[:type] == "buying_loan" || @financing[:type] == "buying_cash"
		@weekly_operating_expenses = @phone_per_week + @gas_per_week + @car_washes_per_week + @tires_per_week + @routine_maintenance_per_week + @unexpected_maintenance_per_week + @accessories_per_week

		logger.info "@phone_per_week: " + @phone_per_week.inspect
		logger.info "@gas_per_week: " + @gas_per_week.inspect
		logger.info "@car_washes_per_week: " + @car_washes_per_week.inspect
		logger.info "@tires_per_week: " + @tires_per_week.inspect
		logger.info "@routine_maintenance_per_week: " + @routine_maintenance_per_week.inspect
		logger.info "@unexpected_maintenance_per_week: " + @unexpected_maintenance_per_week.inspect
		logger.info "@accessories_per_week: " + @accessories_per_week.inspect

		logger.info "@financing[:car_loan_monthly_payment].to_f: " + @financing[:car_loan_monthly_payment].to_f.to_s


		if @financing[:car_loan_monthly_payment].to_f && @financing[:car_loan_monthly_payment].to_f > 0

			@percentage = @financing[:vehicle_rideshare_usage_percentage] ? @financing[:vehicle_rideshare_usage_percentage].to_f/100.0 : 1.0
			@car_loan_monthly_payment = @financing[:car_loan_monthly_payment].to_f*@percentage

			@car_weekly_payment = @car_loan_monthly_payment / WEEKS_IN_A_MONTH

			@weekly_ownership_expenses += @car_weekly_payment if @financing[:include_car_note].to_bool



		elsif @financing[:upfront_price].to_f && @financing[:upfront_price].to_f > 0
		end





		#@car_loan_apr = @financing[:car_loan_apr]
		#@car_loan_balance = @financing[:car_loan_balance]

		#depreciation costs
		@kbb_value_now = @financing[:kbb_value_now].to_f
		@kbb_value_plus_50k = @financing[:kbb_value_plus_50k].to_f

		@depreciation_cost_per_mile = (@kbb_value_now - @kbb_value_plus_50k)/KBB_ADDITIVE
		# logger.info "@depreciation_cost_per_mile: " + @depreciation_cost_per_mile.to_s

		@depreciation_costs_per_week = @depreciation_cost_per_mile * (@total_on_fare_miles_per_week + @total_dead_miles_per_week)

	elsif @financing[:type] == "rental"
		@depreciation_costs_per_week = 0
		@depreciation_cost_per_mile = 0
		@weekly_ownership_expenses += @financing[:weekly_price].to_f
		@car_weekly_payment = @financing[:weekly_price].to_f
		@weekly_operating_expenses = @phone_per_week + @gas_per_week + @car_washes_per_week + @accessories_per_week
	end


# NYC
# $625 vehicle diamond application fees, paid every two years.

# $475 registration, paid every year.

# Quarterly NYS inspection which is $40 each (unless your car is 23 months or newer, in which case it is $10)

# Insurance depends on the age of your driver's license and TLC license along with other factors. Typically $3,500/yr for liability, and another $2,500/yr for physical damage. Your figures may be lower or higher. This is the average.


# @same = []
# @uber_higher=[]
# @lyft_higher =[]
# RideshareMarket.all.each do |rm|
# 	# puts rm.uber_pricing["uberx"]["cost_per_mile"].to_s
# 	# puts rm.lyft_pricing["lyft"]["cost_per_mile"].to_s
# 	if rm.uber_pricing["uberx"]["cost_per_mile"].to_f == rm.lyft_pricing["lyft"]["cost_per_mile"].to_f
# 		@same.push(rm)
# 	elsif rm.uber_pricing["uberx"]["cost_per_mile"].to_f > rm.lyft_pricing["lyft"]["cost_per_mile"].to_f
# 		@uber_higher.push(rm)
# 	else
# 		@lyft_higher.push(rm)
# 	end
# end





	@per_mile_rate = nil
	@per_minute_rate = nil
	@base_fare = 0.0

	if market_hash[:service]=="uberx"
		@uberx = @market.uber_pricing["uberx"]
		# logger.info "MARKET : " + @uberx.inspect
		@per_mile_rate = @uberx["cost_per_mile"].to_f*0.75
		@per_minute_rate = @uberx["cost_per_minute"].to_f*0.75
		@base_fare = @uberx["base_fare"].to_f*0.75
	elsif market_hash[:service]=="lyft"
		@lyft = @market.lyft_pricing["standard"]
		@per_mile_rate = @lyft["cost_per_mile"].to_f*0.75
		@per_minute_rate = @lyft["cost_per_minute"].to_f*0.75
		@base_fare = @lyft["base_fare"].to_f*0.75
	end

	# logger.info "@per_minute_rate: " + @per_minute_rate.to_s



	@average_ride_earnings = (@average_trip_time*@per_minute_rate + @average_trip_distance*@per_mile_rate) + @base_fare

	@surge = my_driving_hash[:surge]
	#@surge = {:none=>.70, :one25=>.10, :one5=>.05, :two=>0.03, :two5=>0.02}

	@average_ride_earnings_with_surge_ratio = @average_ride_earnings # @average_ride_earnings*@surge[:none] + (@average_ride_earnings*@surge[:one25]*1.25) + (@average_ride_earnings*@surge[:one5]*1.5) + (@average_ride_earnings*@surge[:two]*2.0) + (@average_ride_earnings*@surge[:two5]*2.5) + my_driving_hash[:average_tip_per_ride]

	@earnings_per_hour = @average_ride_earnings_with_surge_ratio*@trips_per_hour
	@total_earnings_per_week_without_bonus = @earnings_per_hour * @hours_working_per_week
	@total_earnings_per_week = @earnings_per_hour*1.1372 * @hours_working_per_week



	@earnings_per_week_after_expenses = @total_earnings_per_week - @weekly_operating_expenses - @weekly_ownership_expenses - @depreciation_costs_per_week


		logger.info "@total_earnings_per_week: " + @total_earnings_per_week.inspect
		logger.info "@weekly_operating_expenses: " + @weekly_operating_expenses.inspect
		logger.info "@weekly_ownership_expenses: " + @weekly_ownership_expenses.inspect
		logger.info "@depreciation_costs_per_week: " + @depreciation_costs_per_week.inspect

	@taxable_income_per_week = @total_earnings_per_week - ((@total_on_fare_miles_per_week + @total_dead_miles_per_week)*0.54)


	@total_expenses = @weekly_operating_expenses + @weekly_ownership_expenses + @depreciation_costs_per_week
	@minimum_wage = @market.city_minimum_wage && !@market.city_minimum_wage.empty? ? @market.city_minimum_wage : @market.state_minimum_wage


	@pay_after_ab5 = ([@total_earnings_per_week.to_f, (@minimum_wage.to_f * @hours_working_per_week.to_f).to_f ].max + @total_expenses)

	@hash = {:taxable_income_per_week => @taxable_income_per_week, :dead=>@total_dead_miles_per_week,
		:onfare=>@total_on_fare_miles_per_week,  :total_rideshare_miles => (@total_on_fare_miles_per_week + @total_dead_miles_per_week).to_i,
		:total_earnings_per_week => sprintf('%.2f', @total_earnings_per_week_without_bonus),
		:total_earnings_with_surge_per_week => sprintf('%.2f', @total_earnings_per_week*0.1372),
		:weekly_operating_expenses => sprintf('%.2f', @weekly_operating_expenses),
		:weekly_ownership_expenses => sprintf('%.2f', @weekly_ownership_expenses),
		:depreciation_cost_per_mile => sprintf('%.3f',  @depreciation_cost_per_mile),
		:depreciation_costs_per_week => sprintf('%.2f',  @depreciation_costs_per_week),
		:weekly_rate =>  sprintf('%.2f', (@earnings_per_week_after_expenses.to_s)) ,
		:minimum_wage => @market.city_minimum_wage && !@market.city_minimum_wage.empty? ? @market.city_minimum_wage : @market.state_minimum_wage, :per_mile_rate => sprintf('%.3f',  @per_mile_rate),
		:per_minute_rate => sprintf('%.3f',  @per_minute_rate), :base_fare => sprintf('%.2f',  @base_fare),
		:hourly_rate => sprintf('%.2f',  (@earnings_per_week_after_expenses/@hours_working_per_week).to_s), #/
		:other_costs_per_week =>  sprintf('%.2f',(@phone_per_week + @car_washes_per_week +@accessories_per_week + @unexpected_maintenance_per_week+@routine_maintenance_per_week+@tires_per_week)) ,
		:gas_per_week => sprintf('%.2f',  (@gas_per_week)),
		:car_payment_cost => sprintf('%.2f',  (@car_weekly_payment)),
		:weekly_insurance_cost => sprintf('%.2f',  (@weekly_insurance_costs)),
		:weekly_pay_after_ab5 => @pay_after_ab5,
		:hourly_pay_after_ab5 => sprintf('%.2f', @pay_after_ab5.to_f/@hours_working_per_week.to_f )
	}



	if @financing[:type] == "buying_cash"
		@hash[:weeks_to_pay_back_cash_investment] = (@financing[:upfront_price].to_f / @earnings_per_week_after_expenses).round(1) #/
	elsif @financing[:type] == "rental"
		@hash[:hours_before_weekly_expenses_are_paid] = ((@weekly_operating_expenses + @weekly_ownership_expenses) / @earnings_per_hour).round(1) #/
	end

	# logger.info @hash.inspect

	# logger.info "earnings per year after expenses: " + (@earnings_per_week_after_expenses*50).to_s
	# logger.info "earnings per week after expenses: " + @earnings_per_week_after_expenses.to_s
	# logger.info "earnings per hour: " + (@earnings_per_week_after_expenses/@hours_working_per_week).to_s #/

	return @hash

end

# def median(array, already_sorted=false)
# 	 return nil if array.empty?
# 	 array = array.sort unless already_sorted
# 	 m_pos = array.size / 2
# 	 return array.size % 2 == 1 ? array[m_pos] : mean(array[m_pos-1..m_pos])
# end

# def modes(array, find_all=true)
# 	 histogram = array.inject(Hash.new(0)) { |h, n| h[n] += 1; h }
# 	 modes = nil
# 	 histogram.each_pair do |item, times|
# 	 modes << item if modes && times == modes[0] and find_all
# 	 modes = [times, item] if (!modes && times>1) or (modes && times>modes[0])
# 	 end
# 	 return modes ? modes[1…modes.size] : modes
# end

# def mean(array)
# 	 array.inject(array.inject(0) { |sum, x| sum += x }) / array.size.to_f
# end




class Hash
	def symbol_hash
		self ? self.inject({}){|memo,(k,v)| memo[k.to_sym] = v; memo} : nil
	end
	def first_value_that_exists_from_array(arr)
		arr.each do |k|
			return self[k] if self.key?(k)
		end
		return nil
	end
end

module Possessive
  def possessive
    suffix = if self.downcase == 'it'
      "s"
    elsif self.downcase == 'who'
      'se'
    elsif self.end_with?('s')
      "'"
    else
      "'s"
    end
    self + suffix
  end
end

class String
	include Possessive
	def remove_special_chars
		self.downcase.gsub(/\$|\%/i, "").strip
	end
	def textable_message
		@str = CGI.unescapeHTML(self.gsub(/<div>/,"").gsub(/<\/div>/,"\n").gsub(/<br>/,"\n"))
		@str = @str.gsub(/&nbsp;/," ").gsub(" , ", ", ")
		@str
	end
	def conservative_message_encoding
		# to save money yet preserve message authenticity, replace UCS-2 Strings with common GSM replacements
		self.gsub(/[`’]/, "'").gsub("\t", "")
	end
	def liquid_to_redactor_html
		self.gsub(/\{\{\s*(complete_profile_url)\s*\}\}/, ("<p data-type=\"\\1\"class=\"non-editable\">Includes Complete Profile URL</p>" ) ).gsub(/\{\{\s*(demands_url)\s*\}\}/, ("<p data-type=\"\\1\"class=\"non-editable\">Includes Demands URL</p>" ) ).textable_message
	end
	def strip_html_tags
		self.split(/\<.*?\>/)
		   .map(&:strip)
		   .reject(&:empty?)
		   .join('')
		   .gsub(/\s,/,'')
		   .gsub(/\&nbsp;/,"")
	end
    def is_number?
      true if Float(self) rescue false
    end
end


#to_boolean core.
class String
  def to_boolean
    ActiveRecord::Type::Boolean.new.cast(self)
  end
end

class NilClass
  def to_boolean
    false
  end
end

class TrueClass
  def to_boolean
    true
  end
  def to_i
    1
  end
end

class FalseClass
  def to_boolean
    false
  end

  def to_i
    0
  end
end

class Integer
  def to_boolean
    to_s.to_boolean
  end
end





module ExplainBlock
  def explain_block(&block)
    exec_explain(collecting_queries_for_explain { instance_exec(&block) })
  end
end

ActiveRecord::Relation.include(ExplainBlock)


def median(array, already_sorted=false)
	 return nil if array.empty?
	 array = array.sort unless already_sorted
	 m_pos = array.size / 2
	 return array.size % 2 == 1 ? array[m_pos] : mean(array[m_pos-1..m_pos])
end

