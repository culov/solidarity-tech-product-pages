require 'test_helper'

class OrganizerControllerTest < ActionDispatch::IntegrationTest
  test "should get members" do
    get organizer_members_url
    assert_response :success
  end

end
