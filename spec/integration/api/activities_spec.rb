# spec/integration/api/activities_spec.rb

require 'swagger_helper'

RSpec.describe 'Activities API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  

  path '/activities' do


    get 'Retrieves all activities' do
      tags 'Activities'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter activities created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :user_id, in: :query, description: 'User ID to filter activities for a specific user.', required: false, schema: { type: :integer }

      response '200', 'successful' do
        schema type: :object,
               properties: {
                 data: {
                   type: :array,
                   items: {
                     '$ref' => '#/components/schemas/Activity'
                   }
                 },
                 meta: {
                   type: :object,
                   properties: {
                     total_count: { type: :integer },
                     limit: { type: :integer },
                     offset: { type: :integer }
                   }
                 }
               }


        # makes request to /v1/activites
        it 'returns a 200 response' do |example|
          make_authorized_request(example)
        end

       # before do
       #    # Explicitly set the host for the request
       #    host! 'api.localhost:3000'
          
       #    # Set headers directly in the get request
       #    @headers = { 'Authorization' => "Bearer #{ENV['TESTING_ST_API_KEY']}" }
       #  end


       #  it 'returns a 200 response' do |example|
       #    # Make the request with headers
       #    get '/v1/activities', headers: @headers

       #    expect(response.status).to eq(200)
       #    assert_response_matches_metadata(example.metadata)
       #  end
        



        # it 'returns a 200 response' do |example|
        #   make_authorized_request('/v1/activities', example)
        # end
        # it 'returns a 200 response' do |example|
        #   # Set the host to the subdomain
        #   # host! 'api.localhost:3002'
          
        #   # Set headers directly in the get request
        #   headers = { 'Authorization' => "Bearer #{ENV['TESTING_ST_API_KEY']}" }

        #   # Logging for debugging
        #   puts "Headers being set: #{headers}"
        #   puts "Requesting path: /v1/activities"

        #   # Make the request with headers
        #   get '/v1/activities', headers: headers

        #   expect(response.status).to eq(200)
        #   assert_response_matches_metadata(example.metadata)
        # end
      

      end
    end
  end
end
