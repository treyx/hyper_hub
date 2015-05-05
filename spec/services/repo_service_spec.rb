require "rails_helper"

RSpec.describe RepoService, type: :service do
  it "returns a repository" do
    VCR.use_cassette("repo_service") do
      repo = RepoService.new.find_repo("treyx", "hyperhub")
      expect(repo[:name]).to eq("hyperhub")
      expect(repo[:html_url]).to eq("https://github.com/treyx/hyperhub")
      expect(repo[:full_name]).to eq("treyx/hyperhub")
    end
  end
end
