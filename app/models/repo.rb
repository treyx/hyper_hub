class Repo

  def self.service
    @service ||= RepoService.new
  end

  def self.find_repository(owner, repo)
    service.find_repo(owner, repo)
  end
end
