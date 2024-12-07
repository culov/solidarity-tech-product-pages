require 'test_helper'

class Dashboard::Tasks::AutomationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_tasks_automations_index_url
    assert_response :success
  end

end
