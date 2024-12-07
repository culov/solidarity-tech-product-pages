# frozen_string_literal: true

require 'swagger_helper'

describe 'Phonebanks API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/phonebanks' do
    get 'Lists phonebanks' do
      tags 'Phonebanks'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :event_id, in: :query, description: 'Filters phonebanks by event_id within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'phonebanks listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/phonebanks/{id}' do
    get 'Shows a single phonebank' do
      tags 'Phonebanks'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the phonebank to retrieve'

      response '200', 'phonebank found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 3 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'phonebank not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
