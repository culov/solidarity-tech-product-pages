require 'test_helper'

class MobilizeControllerTest < ActionDispatch::IntegrationTest
  test "should get receive_sms" do
    get mobilize_receive_sms_url
    assert_response :success
  end

end
