require 'test_helper'

class AccountControllerTest < ActionDispatch::IntegrationTest
  test "should get complete_profile" do
    get account_complete_profile_url
    assert_response :success
  end

  test "should get verify_account" do
    get account_verify_account_url
    assert_response :success
  end

  test "should get pay_dues" do
    get account_pay_dues_url
    assert_response :success
  end

end
