require 'test_helper'

class LeaderControllerTest < ActionDispatch::IntegrationTest
  test "should get dashboard" do
    get leader_dashboard_url
    assert_response :success
  end

  test "should get members" do
    get leader_members_url
    assert_response :success
  end

  test "should get messages" do
    get leader_messages_url
    assert_response :success
  end

  test "should get polls" do
    get leader_polls_url
    assert_response :success
  end

  test "should get dues" do
    get leader_dues_url
    assert_response :success
  end

  test "should get setup" do
    get leader_setup_url
    assert_response :success
  end

  test "should get posts" do
    get leader_posts_url
    assert_response :success
  end

end
