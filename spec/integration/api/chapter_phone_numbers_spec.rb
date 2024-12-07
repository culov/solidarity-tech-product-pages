# frozen_string_literal: true

require 'swagger_helper'

describe 'Chapter Phone Numbers API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/chapter_phone_numbers' do
    get 'Lists chapter phone numbers' do
      tags 'Chapter Phone Numbers'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :chapter_id, in: :query, description: 'Filters chapter phone numbers by chapter_id within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'chapter phone numbers listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
