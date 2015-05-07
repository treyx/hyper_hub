class Repo

  def self.service
    @service ||= GitService.new
  end

  def self.find_repository(owner, repo, token)
    service.find_repo(owner, repo, token)
  end
end
