class Repo < ActiveRecord::Base

  def self.find_repo
    Faraday.get "https://api.github.com/repos/treyx/hyperhub"
  end

  def self.parse_repo
    repository = find_repo
    JSON.parse(repository.body, symbolize_names: true)
  end

  # def self.repo_contributors(owner, repo)
  #   Faraday.get "https://api.github.com/repos/#{owner}/#{repo}/stats/contributors"
  # end

end
