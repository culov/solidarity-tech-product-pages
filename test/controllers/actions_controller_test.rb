require 'test_helper'

class ActionsControllerTest < ActionDispatch::IntegrationTest
	# test "the truth" do
	#   assert true
	# end

	def test_plain_form
		# get the login page
		get "http://rdu.localhost:3000/test-plan-form-submit"
		assert_equal 200, status

		# post the login and follow through to the home page
		post "/a/wage-claims-cd", params: { username: people(:jamis).username,
														 password: people(:jamis).password }
		follow_redirect!
		assert_equal 200, status
		assert_equal "/a/wage-claims-cd/thanks", path
	end

	def test_pdf
		# get the login page
		get "/a/wage-claims-cd"
		assert_equal 200, status

		# post the login and follow through to the home page
		post "/a/wage-claims-cd", params: { username: people(:jamis).username,
														 password: people(:jamis).password }
		follow_redirect!
		assert_equal 200, status
		assert_equal "/a/wage-claims-cd/thanks", path
	end

end
