require 'test_helper'

class Dashboard::Tasks::TeamControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_tasks_team_index_url
    assert_response :success
  end

end
