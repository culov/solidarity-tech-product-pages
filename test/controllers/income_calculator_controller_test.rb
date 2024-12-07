require 'test_helper'

class IncomeCalculatorControllerTest < ActionDispatch::IntegrationTest
  test "should get calculator" do
    get income_calculator_calculator_url
    assert_response :success
  end

end
