require 'swagger_helper'

describe 'Users API', type: :request, swagger_doc: 'v1/swagger.yaml' do
  path '/users' do
    post 'Creates or updates a user' do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, required: true, description: 'User data', schema: {
        type: :object,
        oneOf: [
          {
            type: :object,
            properties: {
              phone_number: { type: :string, format: 'phone', nullable: true },
              email: { type: :string, format: 'email', nullable: true }
            },
            required: ['phone_number']
          },
          {
            type: :object,
            properties: {
              phone_number: { type: :string, format: 'phone', nullable: true },
              email: { type: :string, format: 'email', nullable: true }
            },
            required: ['email']
          }
        ],
        properties: {
          first_name: { type: :string, nullable: true },
          last_name: { type: :string, nullable: true },
          preferred_language: { type: :string},
          second_language: { type: :string, nullable: true },
          chapter_id: { type: :integer, nullable: true },
          custom_user_properties: {
            type: :object,
            additionalProperties: {
              type: :string
            },
            nullable: true
          },
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
          email_permission: { type: :boolean, nullable: true }
        },
        example: {
          phone_number: '1234567890',
          email: 'john.doe@example.com',
          first_name: 'John',
          last_name: 'Doe',
          preferred_language: 'en',
          chapter_id: 1,
          custom_user_properties: {
            membership_status: 'Active'
          },
          address: {
            address1: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip_code: '90210',
            country: 'USA'
          },
          sms_permission: true,
          call_permission: true,
          email_permission: true
        }
      }


      response '201', 'user created' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post,  { email: 'john.doe@gmail.com', phone_number: '1234567890', preferred_language: 'en', chapter_id: 1 } )
          expect(response.status).to eq(201)
          expect(json['id']).to be_a(Integer)
        end
      end

      response '422', 'unprocessable entity' do
        it 'returns a 422 response' do |example|
          make_authorized_request(example, :post, { chapter_id: 1, data: { first_name: 'John' } }) # Missing required fields
          expect(response.status).to eq(422)
          expect(response.body).to match(/Failed to save/)
        end
      end




    end
    get 'Retrieves a list of users' do
      tags 'Users'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Maximum number of users to return', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of users to skip before starting to return',  required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch (e.g., 1622559600) to filter users updated after this time', required: false, schema: { type: :integer, default: 0 }

      response '200', 'successful' do
        schema type: :object,
               properties: {
                 data: {
                   type: :array,
                   items: {
                     '$ref' => '#/components/schemas/User'
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


  path '/users/{id}' do 
    put 'Updates a user' do
      tags 'Users'
      produces 'application/json'
      consumes 'application/json'
      parameter name: :id, in: :path, type: :integer, required: true, description: 'ID of the user to update'
      parameter name: :user, in: :body, required: true, schema: {
        type: :object,
        properties: {
          phone_number: { type: :string, format: 'phone', nullable: true },
          email: { type: :string, format: 'email', nullable: true },
          first_name: { type: :string, nullable: true },
          last_name: { type: :string, nullable: true },
          preferred_language: { type: :string, nullable: true },
          second_language: { type: :string, nullable: true },
          chapter_id: { type: :integer, nullable: true },
          custom_user_properties: {
            type: :object,
            additionalProperties: { type: :string },
            nullable: true
          },
          address: {
            type: :object,
            properties: {
              address1: { type: :string, nullable: true },
              address2: { type: :string, nullable: true },
              city: { type: :string, nullable: true },
              state: { type: :string, nullable: true },
              zip_code: { type: :string, nullable: true },
              country: { type: :string, nullable: true }
            },
            nullable: true
          },
          sms_permission: { type: :boolean, nullable: true },
          call_permission: { type: :boolean, nullable: true },
          email_permission: { type: :boolean, nullable: true }
        },
      }

      response '200', 'user updated' do
        it 'returns a 200 response' do |example|
          make_authorized_request(example, :put, { id: 10, email: 'john.doe@gmail.com', phone_number: '1234567890'  })
          expect(response.status).to eq(200)
          expect(json['email']).to eq('john.doe@gmail.com')
        end
      end


    end
  end

end
