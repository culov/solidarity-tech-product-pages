# frozen_string_literal: true

require 'swagger_helper'

describe 'Task Agents API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/task_agents' do
    get 'Lists task agents' do
      tags 'Task Agents'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :task_id, in: :query, description: 'Filters task agents by task within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'task agents listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/task_agents/{id}' do
    get 'Shows a single task agent' do
      tags 'Task Agents'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the task agent to retrieve'

      response '200', 'task agent found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 1 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'task agent not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/task_agents' do
    post 'Creates an task agent' do
      tags 'Task Agents'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an task agent with the specified details.'
      parameter name: :task_agent, in: :body, required: true, description: 'Data containing task agent information', schema: {
        type: :object,
        properties: {
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the task agent', nullable: false },
          task_id: { type: :integer, format: 'int64', description: 'Identifier for the task', nullable: false }
        },
        required: %w[user_id task_id]
      }

      # THIS WILL NOT PASS, because of an after_create hook that invokes a render of a missing template.
      #
      response '201', 'task agent created' do
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

  path '/task_agents/{id}' do
    delete 'Deletes an task agent' do
      tags 'Task Agents'
      consumes 'application/json'
      produces 'application/json'
      description 'Deletes an task agent with the specified ID.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the task agent to delete'

      response '404', 'not found' do
        it 'returns a 404 response for a non-existent task agent' do |example|
          make_authorized_request(example, :delete, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
