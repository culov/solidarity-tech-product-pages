# frozen_string_literal: true

require 'swagger_helper'

describe 'Event Attendances API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/event_attendances' do
    get 'Lists event attendances' do
      tags 'Event Attendances'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :event_id, in: :query, description: 'Filters attendances by event_id within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'event attendances listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/event_attendances' do
    post 'Creates an event attendance' do
      tags 'Event Attendances'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an event attendance with the specified details.'
      parameter name: :event_attendance, in: :body, required: true, description: 'Data containing event attendance information', schema: {
        type: :object,
        properties: {
          event_id: { type: :integer, format: 'int64', description: 'Identifier for the Mobilize event', nullable: false },
          event_session_id: { type: :integer, format: 'int64', description: 'Identifier for the specific event session', nullable: false },
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the user attending to the event', nullable: false },
          attended: { type: :boolean, description: 'Indicates if the user attended the event', nullable: false }
        },
        required: %w[event_id event_session_id user_id attended]
      }

      response '201', 'event attendance created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, {
            event_id: 3,
            event_session_id: 3,
            user_id: 9,
            attended: true
          })
          expect(response.status).to eq(201)
        end
      end

      response '422', 'unprocessable entity' do
        it 'returns a 422 response' do |example|
          make_authorized_request(example, :post, { event_id: 0 })
          expect(response.status).to eq(422)
        end
      end
    end
  end
end
