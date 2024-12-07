# frozen_string_literal: true

require 'swagger_helper'

describe 'Agent Assignments API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/agent_assignments' do
    get 'Lists agent assignments' do
      tags 'Agent Assignments'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :user_id, in: :query, description: 'User ID to filter agent assignments related to a specific user.', required: false, schema: { type: :integer }
      parameter name: :agent_user_id, in: :query, description: 'Agent User ID to filter agent user assignments related to a specific agent user.', required: false, schema: { type: :integer }

      response '200', 'agent assignments listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/agent_assignments/{id}' do
    get 'Shows a single agent assignment' do
      tags 'Agent Assignments'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the agent assignment to retrieve'

      response '200', 'agent assignment found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 3 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'agent assignment not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/agent_assignments' do
    post 'Creates an agent assignment' do
      tags 'Agent Assignments'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an agent assignment with the specified details.'
      parameter name: :event_session, in: :body, required: true, description: 'Data containing agent assignment information', schema: {
        type: :object,
        properties: {
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the user', nullable: false },
          agent_user_id: { type: :integer, format: 'int64', description: 'Identifier for the agent user', nullable: true },
          is_active: { type: :boolean, description: 'Indicates if the assignment is currently active', nullable: true }
        },
        required: %w[user_id agent_user_id]
      }

      response '201', 'agent assignment created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, {
            user_id: 3,
            agent_user_id: 9,
            is_active: true
          })
          expect(response.status).to eq(201)
        end
      end

      response '404', 'agent or user agent not in organization' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :post, { user_id: 4, agent_user_id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/agent_assignments/{id}' do
    put 'Updates an agent assignment' do
      tags 'Agent Assignments'
      consumes 'application/json'
      produces 'application/json'
      description 'Updates an agent assignment with the specified details.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the agent assignment to update'
      parameter name: :event_session, in: :body, required: true, description: 'Data containing updated agent assignment information', schema: {
        type: :object,
        properties: {
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the user', nullable: false },
          agent_user_id: { type: :integer, format: 'int64', description: 'Identifier for the agent user', nullable: true },
          is_active: { type: :boolean, description: 'Indicates if the assignment is currently active', nullable: true }
        }
      }

      response '200', 'agent assignment updated' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :put, {
            id: 3,
            is_active: false
          })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'agent assignment not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :put, { id: 0 })
          expect(response.status).to eq(404)
        end
      end

      response '422', 'unprocessable entity' do
        it 'returns a 422 response for invalid data' do |example|
          make_authorized_request(example, :put, {
            id: 3,
            user_id: '9999'
          })
          expect(response.status).to eq(422)
        end
      end
    end
  end

  path '/agent_assignments/{id}' do
    delete 'Deletes an agent assignment' do
      tags 'Agent Assignments'
      consumes 'application/json'
      produces 'application/json'
      description 'Deletes an agent assignment with the specified ID.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the agent assignment to delete'

      response '404', 'not found' do
        it 'returns a 404 response for a non-existent agent assignment' do |example|
          make_authorized_request(example, :delete, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
