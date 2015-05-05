require "rails_helper"

RSpec.describe Api::V1::ReposController, type: :controller do

  it "responds to #index" do
    get :index, format: :json, user: "treyx", repo: "hyperhub"
    expect(response.status).to eq(200)
    repo = JSON.parse(response.body, symbolize_names: true)
    expect(repo[:name]).to eq("hyperhub")
    expect(repo[:owner][:login]).to eq("treyx")
  end

end
