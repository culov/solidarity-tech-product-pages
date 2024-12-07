# frozen_string_literal: true

require 'swagger_helper'

describe 'Task Assignments API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/task_assignments' do
    get 'Lists task assignments' do
      tags 'Task Assignments'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :task_id, in: :query, description: 'Filters task assignments by task within the accessible scope.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :agent_user_id, in: :query, description: 'Filters task assignments by agent user within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'task assignments listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/task_assignments/{id}' do
    get 'Shows a single task assignment' do
      tags 'Task Assignments'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the task assignment to retrieve'

      response '200', 'task assignment found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 1 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'task assignment not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/task_assignments' do
    post 'Creates an task assignment' do
      tags 'Task Assignments'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an task assignment with the specified details.'
      parameter name: :task_assignment, in: :body, required: true, description: 'Data containing task assignment information', schema: {
        type: :object,
        properties: {
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the task assignment', nullable: false },
          task_id: { type: :integer, format: 'int64', description: 'Identifier for the task', nullable: false }
        },
        required: %w[user_id task_id]
      }

      response '201', 'task assignment created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, {
            user_id: 9,
            task_id: 1
          })
          expect(response.status).to eq(201)
        end
      end
    end
  end

  path '/task_assignments/{id}' do
    put 'Updates an task assignment' do
      tags 'Task Assignments'
      consumes 'application/json'
      produces 'application/json'
      description 'Updates an task assignment with the specified details.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the task assignment to update'
      parameter name: :task_assignment, in: :body, required: true, description: 'Data containing task assignment information', schema: {
        type: :object,
        properties: {
          is_attending: { type: :string, description: 'Indicates if the user is attending the event', nullable: false, enum: ['yes', 'no', 'maybe'] },
          is_confirmed: { type: :boolean, description: 'Indicates if the RSVP is confirmed', nullable: false },
          agent_user_id: { type: :integer, format: 'int64', description: 'Identifier for the agent user, if applicable', nullable: true },
          source: { type: :string, description: 'Source of the RSVP', nullable: true },
          source_system: { type: :string, description: 'System from which the RSVP originated', nullable: true }
        }
      }

      response '200', 'task assignment updated' do
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

  path '/task_assignments/{id}' do
    delete 'Deletes an task assignment' do
      tags 'Task Assignments'
      consumes 'application/json'
      produces 'application/json'
      description 'Deletes an task assignment with the specified ID.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the task assignment to delete'

      response '404', 'not found' do
        it 'returns a 404 response for a non-existent task assignment' do |example|
          make_authorized_request(example, :delete, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
