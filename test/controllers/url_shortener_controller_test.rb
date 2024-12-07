require 'test_helper'

class UrlShortenerControllerTest < ActionDispatch::IntegrationTest
  test "should get verify_account" do
    get url_shortener_verify_account_url
    assert_response :success
  end

  test "should get pay_dues" do
    get url_shortener_pay_dues_url
    assert_response :success
  end

  test "should get complete_profile" do
    get url_shortener_complete_profile_url
    assert_response :success
  end

  test "should get standard" do
    get url_shortener_standard_url
    assert_response :success
  end

end
