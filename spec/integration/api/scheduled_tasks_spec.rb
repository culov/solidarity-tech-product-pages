# frozen_string_literal: true

require 'swagger_helper'

describe 'Scheduled Tasks API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/scheduled_tasks' do
    get 'Lists scheduled tasks' do
      tags 'Scheduled Tasks'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :user_id, in: :query, description: 'User ID to filter scheduled tasks related to a specific user.', required: false, schema: { type: :integer }
      parameter name: :agent_user_id, in: :query, description: 'Agent User ID to filter agent user assignments related to a specific agent user.', required: false, schema: { type: :integer }

      response '200', 'scheduled tasks listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/scheduled_tasks/{id}' do
    get 'Shows a single scheduled task' do
      tags 'Scheduled Tasks'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the scheduled task to retrieve'

      response '200', 'scheduled task found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 2 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'scheduled task not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/scheduled_tasks' do
    post 'Creates an scheduled task' do
      tags 'Scheduled Tasks'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an scheduled task with the specified details.'
      parameter name: :scheduled_task, in: :body, required: true, description: 'Data containing scheduled task information', schema: {
        type: :object,
        properties: {
          due_at: { type: :string, format: 'date-time', description: 'The date and time when the task is due', nullable: false },
          remind_at: { type: :string, format: 'date-time', description: 'The date and time when a reminder for the task should be sent', nullable: true },
          agent_user_id: { type: :integer, format: 'int64', description: 'Identifier for the agent user assigned to the task', nullable: true },
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the user who created the task', nullable: false },
          notes: { type: :string, description: 'Additional notes or details about the task', nullable: true },
          #task_type: { type: :string, description: 'The type or category of the task', nullable: false },
          marked_as_completed: { type: :boolean, description: 'Indicates if the task has been marked as completed', nullable: true }
        },
        required: %w[due_at user_id]
      }

      response '201', 'scheduled task created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, {
            user_id: 2,
            agent_user_id: 8,
            due_at: Time.now.utc.to_i + 1.day
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

  path '/scheduled_tasks/{id}' do
    put 'Updates an scheduled task' do
      tags 'Scheduled Tasks'
      consumes 'application/json'
      produces 'application/json'
      description 'Updates an scheduled task with the specified details.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the scheduled task to update'
      parameter name: :scheduled_task, in: :body, required: true, description: 'Data containing updated scheduled task information', schema: {
        type: :object,
        properties: {
          due_at: { type: :string, format: 'date-time', description: 'The date and time when the task is due', nullable: false },
          remind_at: { type: :string, format: 'date-time', description: 'The date and time when a reminder for the task should be sent', nullable: true },
          agent_user_id: { type: :integer, format: 'int64', description: 'Identifier for the agent user assigned to the task', nullable: true },
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the user who created the task', nullable: false },
          notes: { type: :string, description: 'Additional notes or details about the task', nullable: true },
          #task_type: { type: :string, description: 'The type or category of the task', nullable: false },
          marked_as_completed: { type: :boolean, description: 'Indicates if the task has been marked as completed', nullable: true }
        }
      }

      response '200', 'scheduled task updated' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :put, {
            id: 2,
            notes: 'Change the note'
          })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'scheduled task not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :put, { id: 0 })
          expect(response.status).to eq(404)
        end
      end

      response '422', 'unprocessable entity' do
        it 'returns a 422 response for invalid data' do |example|
          make_authorized_request(example, :put, {
            id: 2,
            remind_at: 'this is not a date'
          })
          expect(response.status).to eq(422)
        end
      end
    end
  end

  path '/scheduled_tasks/{id}' do
    delete 'Deletes an scheduled task' do
      tags 'Scheduled Tasks'
      consumes 'application/json'
      produces 'application/json'
      description 'Deletes an scheduled task with the specified ID.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the scheduled task to delete'

      response '404', 'not found' do
        it 'returns a 404 response for a non-existent scheduled task' do |example|
          make_authorized_request(example, :delete, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end