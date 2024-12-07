# frozen_string_literal: true

require 'swagger_helper'

describe 'Event Sessions API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/event_sessions' do
    get 'Lists event sessions' do
      tags 'Event Sessions'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :event_id, in: :query, description: 'Filters sessions by event_id within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'event sessions listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/event_sessions/{id}' do
    get 'Shows a single event session' do
      tags 'Event Sessions'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the event session to retrieve'

      response '200', 'event session found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 3 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'event session not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/event_sessions' do
    post 'Creates an event session' do
      tags 'Event Sessions'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an event session with the specified details.'
      parameter name: :event_session, in: :body, required: true, description: 'Data containing event session information', schema: {
        type: :object,
        properties: {
          event_id: { type: :integer, format: 'int64', description: 'Identifier for the Mobilize event', nullable: false },
          start_time: { type: :integer, format: 'int64', description: 'UTC timestamp in seconds since the Unix epoch', nullable: true },
          end_time: { type: :integer, format: 'int64', description: 'UTC timestamp in seconds since the Unix epoch', nullable: true },
          title: { type: :string, description: 'Title of the event session', nullable: true },
          location_name: { type: :string, description: 'Name of the location', nullable: true },
          location_data: {
            type: :object,
            properties: {
              components: {
                type: :string,
                nullable: true
              },
              coordinates: {
                type: :string,
                nullable: true
              },
              address_city: {
                type: :string,
                nullable: true
              },
              full_address: {
                type: :string,
                nullable: true
              },
              address_state: {
                type: :string,
                nullable: true
              },
              address_line_1: {
                type: :string,
                nullable: true
              },
              address_country: {
                type: :string,
                nullable: true
              },
              address_postal_code: {
                type: :string,
                nullable: true
              }
            }
          },
          location_address: { type: :string, description: 'Physical address of the event location', nullable: true },
          show_rsvp_bar: { type: :boolean, description: 'Flag to show RSVP bar', nullable: true },
          show_title_in_form: { type: :boolean, description: 'Flag to show title in the form', nullable: true }
        },
        required: %w[event_id start_time end_time]
      }

      response '201', 'event session created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, {
            event_id: 3,
            start_time: Time.now.utc.to_i,
            end_time: Time.now.utc.to_i + 1.day,
            title: 'New Year Celebration',
            location_name: 'Central Park',
            location_address: 'Central Park, New York, NY, USA',
            show_rsvp_bar: true,
            show_title_in_form: false
          })
          expect(response.status).to eq(201)
        end
      end

      response '422', 'unprocessable entity' do
        it 'returns a 422 response' do |example|
          make_authorized_request(example, :post, { event_id: 1 })
          expect(response.status).to eq(422)
        end
      end
    end
  end

  path '/event_sessions/{id}' do
    put 'Updates an event session' do
      tags 'Event Sessions'
      consumes 'application/json'
      produces 'application/json'
      description 'Updates an event session with the specified details.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the event session to update'
      parameter name: :event_session, in: :body, required: true, description: 'Data containing updated event session information', schema: {
        type: :object,
        properties: {
          start_time: { type: :integer, format: 'int64', description: 'UTC timestamp in seconds since the Unix epoch', nullable: true },
          end_time: { type: :integer, format: 'int64', description: 'UTC timestamp in seconds since the Unix epoch', nullable: true },
          title: { type: :string, description: 'Title of the event session', nullable: true },
          location_name: { type: :string, description: 'Name of the location', nullable: true },
          location_address: { type: :string, description: 'Physical address of the event location', nullable: true },
          show_rsvp_bar: { type: :boolean, description: 'Flag to show RSVP bar', nullable: true },
          show_title_in_form: { type: :boolean, description: 'Flag to show title in the form', nullable: true }
        }
      }

      response '200', 'event session updated' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :put, {
            id: 3,
            start_time: Time.now.utc.to_i,
            end_time: Time.now.utc.to_i + 1.day,
            title: 'Updated New Year Celebration',
            location_name: 'Central Park',
            location_address: 'Central Park, New York, NY, USA',
            show_rsvp_bar: false,
            show_title_in_form: true
          })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'event session not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :put, { id: 0 })
          expect(response.status).to eq(404)
        end
      end

      response '422', 'unprocessable entity' do
        it 'returns a 422 response for invalid data' do |example|
          make_authorized_request(example, :put, {
            id: 3,
            start_time: 'invalid_date'
          })
          expect(response.status).to eq(422)
        end
      end

      response '422', 'unprocessable entity' do
        it 'returns a 422 response for start_time higher than end_time' do |example|
          make_authorized_request(example, :put, {
            id: 3,
            start_time: Time.now.utc.to_i + 1.hour, # Setting start_time 1 hour ahead of current time
            end_time: Time.now.utc.to_i, # Setting end_time to current time, which is before start_time
            title: 'Test Event with Invalid Time',
            location_name: 'Test Location',
            location_address: '123 Test Address',
            show_rsvp_bar: true,
            show_title_in_form: false
          })
          expect(response.status).to eq(422)
          expect(JSON.parse(response.body)['errors']).to include('End time must be after start time.')
        end
      end
    end
  end

  path '/event_sessions/{id}' do
    delete 'Deletes an event session' do
      tags 'Event Sessions'
      consumes 'application/json'
      produces 'application/json'
      description 'Deletes an event session with the specified ID.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the event session to delete'

      response '404', 'not found' do
        it 'returns a 404 response for a non-existent event session' do |example|
          make_authorized_request(example, :delete, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
