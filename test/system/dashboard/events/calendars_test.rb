require "application_system_test_case"

class Dashboard::Events::CalendarsTest < ApplicationSystemTestCase
  setup do
    @dashboard_events_calendar = dashboard_events_calendars(:one)
  end

  test "visiting the index" do
    visit dashboard_events_calendars_url
    assert_selector "h1", text: "Dashboard/Events/Calendars"
  end

  test "creating a Calendar" do
    visit dashboard_events_calendars_url
    click_on "New Dashboard/Events/Calendar"

    click_on "Create Calendar"

    assert_text "Calendar was successfully created"
    click_on "Back"
  end

  test "updating a Calendar" do
    visit dashboard_events_calendars_url
    click_on "Edit", match: :first

    click_on "Update Calendar"

    assert_text "Calendar was successfully updated"
    click_on "Back"
  end

  test "destroying a Calendar" do
    visit dashboard_events_calendars_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Calendar was successfully destroyed"
  end
end
