# frozen_string_literal: true

require 'swagger_helper'

describe 'User Lists API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/user_lists' do
    get 'Lists user lists' do
      tags 'User Lists'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'user lists listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/user_lists/{id}' do
    get 'Shows a single user list' do
      tags 'User Lists'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the user list to retrieve'

      response '200', 'user list found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 1 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'user list not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
