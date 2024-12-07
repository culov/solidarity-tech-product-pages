require 'test_helper'

class BlogControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get blog_index_url
    assert_response :success
  end

  test "should get edit" do
    get blog_edit_url
    assert_response :success
  end

  test "should get create" do
    get blog_create_url
    assert_response :success
  end

end
