require 'test_helper'

class Dashboard::Finances::SubscriptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_finances_subscriptions_index_url
    assert_response :success
  end

  test "should get show" do
    get dashboard_finances_subscriptions_show_url
    assert_response :success
  end

  test "should get edit" do
    get dashboard_finances_subscriptions_edit_url
    assert_response :success
  end

end
