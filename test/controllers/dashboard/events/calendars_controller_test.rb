require 'test_helper'

class Dashboard::Events::CalendarsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dashboard_events_calendar = dashboard_events_calendars(:one)
  end

  test "should get index" do
    get dashboard_events_calendars_url
    assert_response :success
  end

  test "should get new" do
    get new_dashboard_events_calendar_url
    assert_response :success
  end

  test "should create dashboard_events_calendar" do
    assert_difference('Dashboard::Events::Calendar.count') do
      post dashboard_events_calendars_url, params: { dashboard_events_calendar: {  } }
    end

    assert_redirected_to dashboard_events_calendar_url(Dashboard::Events::Calendar.last)
  end

  test "should show dashboard_events_calendar" do
    get dashboard_events_calendar_url(@dashboard_events_calendar)
    assert_response :success
  end

  test "should get edit" do
    get edit_dashboard_events_calendar_url(@dashboard_events_calendar)
    assert_response :success
  end

  test "should update dashboard_events_calendar" do
    patch dashboard_events_calendar_url(@dashboard_events_calendar), params: { dashboard_events_calendar: {  } }
    assert_redirected_to dashboard_events_calendar_url(@dashboard_events_calendar)
  end

  test "should destroy dashboard_events_calendar" do
    assert_difference('Dashboard::Events::Calendar.count', -1) do
      delete dashboard_events_calendar_url(@dashboard_events_calendar)
    end

    assert_redirected_to dashboard_events_calendars_url
  end
end
