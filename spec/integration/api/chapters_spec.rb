require 'swagger_helper'

describe 'Chapters API', type: :request, swagger_doc: 'v1/swagger.yaml' do

  path '/chapters' do

    get 'Retrieves all chapters' do
      tags 'Chapters'
      produces 'application/json'
      parameter name: :_limit, in: :query, description: 'Limits the number of items returned. Default is 20, maximum is 100.', required: false, schema: { type: :integer, default: 20 }
      parameter name: :_offset, in: :query, description: 'Number of items to skip before starting to return the results.', required: false, schema: { type: :integer, default: 0 }
      parameter name: :_since, in: :query, description: 'UTC timestamp in seconds since the Unix epoch to filter chapters created after this time.', required: false, schema: { type: :integer, default: 0 }

      response '200', 'successful' do
        let(:_limit) { 20 }
        let(:_offset) { 0 }
        let(:_since) { 1.day.ago.to_i }
        schema type: :object,
               properties: {
                 data: {
                   type: :array,
                   items: {
                     '$ref' => '#/components/schemas/Chapter'
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
