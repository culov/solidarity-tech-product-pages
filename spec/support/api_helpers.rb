
module ApiHelpers
  def self.included(base)
    base.before(:each, type: :request) do
      host! 'api.localhost:3000'
      @headers = { 'Authorization' => "Bearer #{ENV['TESTING_ST_API_KEY']}" }
    end
  end

  def make_authorized_request(example, method = :get, params = {})
    path = "/v1#{example.metadata[:path_item][:template]}"
    path = path.gsub("{id}", params[:id].to_s) if path.include?("{id}") && params[:id]

    if method == :get
      send(method, path, headers: @headers)
    else
      send(method, path, params: params, headers: @headers)
    end
    expect(response.status).to eq(example.metadata[:response][:code].to_i)
    assert_response_matches_metadata(example.metadata)
  end

  def json
    JSON.parse(response.body)
  end

end