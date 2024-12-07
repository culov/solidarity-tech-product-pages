require 'swagger_helper'

describe 'User Notes API', type: :request, swagger_doc: 'v1/swagger.yaml' do

  path '/user_notes' do
    post 'Creates a user note' do
      tags 'User Notes'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :user_id, in: :query, schema: { type: :integer }, required: true
      parameter name: :content, in: :query, schema: { type: :string }, required: true
      parameter name: :created_at, in: :query, schema: { type: :integer }, required: false





      response '201', 'user note created successfully' do
        it 'returns a 201 response' do |example|
          make_authorized_request(example, :post, { user_id: User.where(root_organization_id: 1, phone_number: "15005550006").first.id, content: "test note!!!"  } )
          expect(response.status).to eq(201)
        end
      end


      response '422', 'unprocessable entity' do
        it 'returns a 422 response' do |example|
          make_authorized_request(example, :post, { user_id: '', content: nil,  })
          expect(response.status).to eq(422)
        end
      end


      response '404', 'unprocessable entity' do
        it 'returns a 404 response' do |example|
          make_authorized_request(example, :post, { user_id: 0, content: "A valid note content!" })
          expect(response.status).to eq(404)
        end
      end

    end
  end
end
