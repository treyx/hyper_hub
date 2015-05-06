require "rails_helper"

RSpec.describe GitService, type: :service do
  it "returns a repository" do
    VCR.use_cassette("repo_service") do
      serv = GitService.new.find_repo("treyx", "hyperhub")
      expect(serv[:name]).to eq("hyperhub")
      expect(serv[:html_url]).to eq("https://github.com/treyx/hyperhub")
      expect(serv[:full_name]).to eq("treyx/hyperhub")
    end
  end
end
