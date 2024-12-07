require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get receive_sms" do
    get messages_receive_sms_url
    assert_response :success
  end

end
