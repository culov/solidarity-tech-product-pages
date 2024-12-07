# frozen_string_literal: true

require 'swagger_helper'

describe 'Event Rsvps API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/event_rsvps' do
    get 'Lists event rsvps' do
      tags 'Event Rsvps'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :event_id, in: :query, description: 'Filters rsvps by event_id within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'event rsvps listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/event_rsvps/{id}' do
    get 'Shows a single event rsvp' do
      tags 'Event Rsvps'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the event rsvp to retrieve'

      response '200', 'event rsvp found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 3 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'event rsvp not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/event_rsvps' do
    post 'Creates an event rsvp' do
      tags 'Event Rsvps'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an event rsvp with the specified details.'
      parameter name: :event_rsvp, in: :body, required: true, description: 'Data containing event RSVP information', schema: {
        type: :object,
        properties: {
          event_id: { type: :integer, format: 'int64', description: 'Identifier for the Mobilize event', nullable: false },
          event_session_id: { type: :integer, format: 'int64', description: 'Identifier for the specific event session', nullable: false },
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the user RSVPing to the event', nullable: false },
          is_attending: { type: :string, description: 'Indicates if the user is attending the event', nullable: false, enum: ['yes', 'no', 'maybe'] },
          is_confirmed: { type: :boolean, description: 'Indicates if the RSVP is confirmed', nullable: false },
          agent_user_id: { type: :integer, format: 'int64', description: 'Identifier for the agent user, if applicable', nullable: true },
          source: { type: :string, description: 'Source of the RSVP', nullable: true },
          source_system: { type: :string, description: 'System from which the RSVP originated', nullable: true }
        },
        required: %w[event_id event_session_id is_attending agent_user_id]
      }

      response '201', 'event rsvp created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, {
            event_id: 3,
            user_id: 9,
            event_session_id: 3,
            is_attending: 'yes',
            agent_user_id: 2
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

  path '/event_rsvps/{id}' do
    put 'Updates an event rsvp' do
      tags 'Event Rsvps'
      consumes 'application/json'
      produces 'application/json'
      description 'Updates an event rsvp with the specified details.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the event rsvp to update'
      parameter name: :event_rsvp, in: :body, required: true, description: 'Data containing event RSVP information', schema: {
        type: :object,
        properties: {
          is_attending: { type: :string, description: 'Indicates if the user is attending the event', nullable: false, enum: ['yes', 'no', 'maybe'] },
          is_confirmed: { type: :boolean, description: 'Indicates if the RSVP is confirmed', nullable: false },
          agent_user_id: { type: :integer, format: 'int64', description: 'Identifier for the agent user, if applicable', nullable: true },
          source: { type: :string, description: 'Source of the RSVP', nullable: true },
          source_system: { type: :string, description: 'System from which the RSVP originated', nullable: true }
        }
      }

      response '200', 'event rsvp updated' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :put, {
            id: 3,
            is_attending: 'maybe',
            is_confirmed: false
          })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'event rsvp not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :put, { id: 0 })
          expect(response.status).to eq(404)
        end
      end

      # TODO: Right now since we are not validating types and values in the controller, this test will always pass.
      #
      # response '422', 'unprocessable entity' do
      #   it 'returns a 422 response for invalid data' do |example|
      #     make_authorized_request(example, :put, {
      #       id: 3,
      #       event_id: nil
      #     })
      #     expect(response.status).to eq(422)
      #   end
      # end
    end
  end

  path '/event_rsvps/{id}' do
    delete 'Deletes an event rsvp' do
      tags 'Event Rsvps'
      consumes 'application/json'
      produces 'application/json'
      description 'Deletes an event rsvp with the specified ID.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the event rsvp to delete'

      response '404', 'not found' do
        it 'returns a 404 response for a non-existent event rsvp' do |example|
          make_authorized_request(example, :delete, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
