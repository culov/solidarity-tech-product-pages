require 'test_helper'

class Dashboard::Search::SearchControllerTest < ActionDispatch::IntegrationTest
  test "should get users" do
    get dashboard_search_search_users_url
    assert_response :success
  end

end
