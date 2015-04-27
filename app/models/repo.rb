class Repo < ActiveRecord::Base
  def self.request_user
    Faraday.get "https://api.github.com/repositories"
  end

  def self.public_repos
    @public_repos ||= JSON.parse(request_user.body, symbolize_names: true)
  end
end
