# frozen_string_literal: true

require 'swagger_helper'

describe 'Text templates API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/text_templates' do
    get 'Lists text templates' do
      tags 'Text Templates'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter calls created after this time.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :event_id, in: :query, description: 'Filters rsvps by event_id within the accessible scope.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'text templates listed' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { _limit: 10, _offset: 0, _since: 1609459200 })
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/text_templates/{id}' do
    get 'Shows a single text template' do
      tags 'Text Templates'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the text template to retrieve'

      response '200', 'text template found' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :get, { id: 1 })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'text template not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :get, { id: 99999 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/text_templates' do
    post 'Creates an text template' do
      tags 'Text Templates'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates an text template with the specified details.'
      parameter name: :text_template, in: :body, required: true, description: 'Data containing text template information', schema: {
        type: :object,
        properties: {
          name: { type: 'string', description: 'Name of the entity', nullable: false },
          scope_id: { type: 'integer', format: 'int64', description: 'Identifier for the scope', nullable: false },
          scope_type: { type: 'string', description: 'Type of the scope', nullable: false },
          template: {
            type: 'object',
            additionalProperties: false,
            description: 'Template content in various languages, where keys are 2-character language codes.',
            patternProperties: {
              '^[a-z]{2}$': {
                type: 'string',
                description: 'The message in the specified language.'
              }
            },
            example: {
              en: 'Hi, {{ user.first-name }}, this is an event text template'
            }
          },
          event_id: { type: 'integer', format: 'int64', description: 'Identifier for the associated event, if applicable', nullable: true }
        },
        required: %w[iname scope_id scope_type]
      }

      response '201', 'text template created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, {
            name: 'new template',
            scope_id: 1,
            scope_type: 'Organization'
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

  path '/text_templates/{id}' do
    put 'Updates an text template' do
      tags 'Text Templates'
      consumes 'application/json'
      produces 'application/json'
      description 'Updates an text template with the specified details.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the text template to update'
      parameter name: :text_template, in: :body, required: true, description: 'Data containing text template information', schema: {
        type: :object,
        properties: {
          name: { type: 'string', description: 'Name of the entity', nullable: false },
          scope_id: { type: 'integer', format: 'int64', description: 'Identifier for the scope', nullable: false },
          scope_type: { type: 'string', description: 'Type of the scope', nullable: false },
          template: {
            type: 'object',
            additionalProperties: false,
            description: 'Template content in various languages, where keys are 2-character language codes.',
            patternProperties: {
              '^[a-z]{2}$': {
                type: 'string',
                description: 'The message in the specified language.'
              }
            },
            example: {
              en: 'Hi, {{ user.first-name }}, this is an event text template'
            }
          },
          event_id: { type: 'integer', format: 'int64', description: 'Identifier for the associated event, if applicable', nullable: true }
        }
      }

      response '200', 'text template updated' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :put, {
            id: 1,
            name: 'maybe'
          })
          expect(response.status).to eq(200)
        end
      end

      response '404', 'text template not found' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :put, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end

  path '/text_templates/{id}' do
    delete 'Deletes an text template' do
      tags 'Text Templates'
      consumes 'application/json'
      produces 'application/json'
      description 'Deletes an text template with the specified ID.'
      parameter name: :id, in: :path, required: true, type: :integer, description: 'Identifier of the text template to delete'

      response '404', 'not found' do
        it 'returns a 404 response for a non-existent text template' do |example|
          make_authorized_request(example, :delete, { id: 0 })
          expect(response.status).to eq(404)
        end
      end
    end
  end
end
