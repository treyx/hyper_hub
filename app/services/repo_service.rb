class RepoService
  attr_reader :connection

  def initialize
    @connection = Faraday.new(url: "https://api.github.com/repos")
  end

  def find_repo(owner, repo)
    parse(connection.get("#{owner}/#{repo}"))
  end

  def parse(response)
    JSON.parse(response.body, symbolize_names: true)
  end
end
