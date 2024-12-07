require 'test_helper'

class Dashboard::Tasks::AnalyticsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_tasks_analytics_index_url
    assert_response :success
  end

end
