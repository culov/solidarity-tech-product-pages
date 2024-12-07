require 'swagger_helper'

describe 'User Actions API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/user_actions' do
    post 'Creates a user action' do
      tags 'User Actions'
      consumes 'application/json'
      produces 'application/json'
      description 'Creates a user action for a user. Note: This endpoint cannot be used for creating actions related to donation pages or scheduled call pages.'
      parameter name: :user_action, in: :body, required: true, description: 'Data containing user action information', schema: {
        type: :object,
        properties: {
          page_id: { type: :integer, format: 'int64', description: 'Identifier for the Page, required for new user actions', nullable: false },
          user_id: { type: :integer, format: 'int64', description: 'Identifier for the User', nullable: true },
          created_at: { type: :integer, format: 'int64', description: 'UTC timestamp in seconds since the Unix epoch for the creation time of the user action', nullable: true },
          data: {
            type: :object,
            properties: {
              phone_number: { type: :string, description: 'User\'s phone number', nullable: true },
              email: { type: :string, format: 'email', description: 'User\'s email address', nullable: true },
              first_name: { type: :string, nullable: true },
              last_name: { type: :string, nullable: true },
              preferred_language: { type: :string, nullable: true },
              second_language: { type: :string, nullable: true },
              chapter_id: { type: :integer, nullable: true },
              address: {
                type: :object,
                nullable: true,
                properties: {
                  address1: { type: :string, nullable: true },
                  address2: { type: :string, nullable: true },
                  city: { type: :string, nullable: true },
                  state: { type: :string, nullable: true },
                  zip_code: { type: :string, nullable: true },
                  country: { type: :string, nullable: true }
                }
              },
              sms_permission: { type: :boolean, nullable: true },
              call_permission: { type: :boolean, nullable: true },
              email_permission: { type: :boolean, nullable: true },
              custom_user_properties: {
                type: :object,
                additionalProperties: { type: :string },
                nullable: true
              }
            },
          }
        },
        required: ['page_id'],
        oneOf: [
          {
            required: ['user_id']
          },
          {
            required: ['data'],
            properties: {
              data: {
                type: :object,
                oneOf: [
                  { required: ['phone_number'] },
                  { required: ['email'] }
                ]
              }
            }
          }
        ]
      }

      response '201', 'user action created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, { page_id: 1, data: { phone_number: '1234567890' } })
          expect(response.status).to eq(201)
        end
      end

    
      response '422', 'unprocessable entity' do
        it 'returns a 422 response' do |example|
          make_authorized_request(example, :post, { page_id: 1 })
          expect(response.status).to eq(422)
        end
      end


    end
  end
end
