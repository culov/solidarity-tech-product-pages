require 'swagger_helper'

describe 'Custom User Properties API', type: :request, swagger_doc: 'v1/swagger.yaml' do

  path '/custom_user_properties' do

    get 'Retrieves all custom user properties' do
      tags 'Custom User Properties'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter custom user properties created after this time.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'successful' do
        schema type: :object,
               properties: {
                 data: {
                   type: :array,
                   items: {
                     type: :object,
                     properties: {
                       id: { type: :integer },
                       name: { type: :string },
                       key: { type: :string },
                       field_type: { type: :string },
                       options: {
                           type: :array,
                           items: {
                               type: :object,
                               properties: {
                                   label: {
                                       type: :object,
                                       additionalProperties: { 
                                           type: :string,
                                           nullable: true 
                                       }
                                   },
                                   value: { type: :string }
                               }
                           },
                           nullable: true
                       },
                       scope_id: { type: :integer },
                       scope_type: { type: :string }
                     }
                   }
                 },
                 meta: {
                   type: :object,
                   properties: {
                     total_count: { type: :integer },
                     limit: { type: :integer },
                     offset: { type: :integer }
                   }
                 }
               }

        it 'returns a 200 response' do |example|
          make_authorized_request(example)
        end
        
      end
    end

  end
end
