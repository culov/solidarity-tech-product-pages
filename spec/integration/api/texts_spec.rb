require 'swagger_helper'

describe 'Texts API', type: :request, swagger_doc: 'v1/swagger.yaml' do

  path '/texts' do
    post 'Sends a text message' do
      tags 'Texts'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :user_id, in: :query, schema: { type: :integer }, required: true
      parameter name: :body, in: :query, schema: { type: :string }, required: true
      parameter name: :media_urls, in: :query, schema: { type: :array, items: { type: :string } }, required: false
      parameter name: :attach_contact_card, in: :query, schema: { type: :boolean }, required: false
      parameter name: :shorten_urls, in: :query, schema: { type: :boolean }, required: false

      # response '201', 'text sent successfully' do
      #   let(:user_id) { User.where(root_organization_id: 1).first.id }
      #   let(:body) { 'Hello there!' }
      #   let(:media_urls) { ['http://example.com/image.png'] }
      #   let(:attach_contact_card) { false }
      #   let(:shorten_urls) { false }
      #   run_test! do
      #     expect(json['message']).to eq('Text sent successfully')
      #   end
      # end


      response '201', 'text sent successfully' do
        it 'returns a 201 response' do |example|
          text = {
            user_id: User.where(root_organization_id: 1, phone_number: "15005550006").first.id,
            body: 'Hello there!',
            attach_contact_card: false,
            shorten_urls: false
          }

          make_authorized_request(example, :post, text)
          expect(response.status).to eq(201)
          expect(json['message']).to eq('Text sent successfully')
        end
      end

      response '404', 'user not found' do
        it 'returns a 404 response' do |example|
          text = {
            user_id: 0,
            body: 'Hello there!',
            attach_contact_card: false,
            shorten_urls: false
          }

          make_authorized_request(example, :post, text)
          expect(response.status).to eq(404)
       end
      end

    end

    get 'Retrieves a list of texts' do
      tags 'Texts'
      produces 'application/json'
      parameter name: :user_id, in: :query, schema: { type: :integer }, required: false
      parameter name: :_limit, in: :query, schema: { type: :integer, default: 20 }, required: false
      parameter name: :_offset, in: :query, schema: { type: :integer, default: 0 }, required: false
      parameter name: :_since, in: :query, schema: { type: :string }, required: false

      response '200', 'successful' do
        schema type: :object,
               properties: {
                 data: {
                   type: :array,
                   items: {
                     '$ref' => '#/components/schemas/Text'
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
