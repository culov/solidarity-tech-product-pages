require 'test_helper'

class Dashboard::Tasks::TargetingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_tasks_targeting_index_url
    assert_response :success
  end

end
