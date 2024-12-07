require 'test_helper'

class Dashboard::Finances::OverviewControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_finances_overview_index_url
    assert_response :success
  end

  test "should get show" do
    get dashboard_finances_overview_show_url
    assert_response :success
  end

end
