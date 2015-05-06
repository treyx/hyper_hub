class Repo

  def self.service
    @service ||= GitService.new
  end

  def self.find_repository(owner, repo)
    service.find_repo(owner, repo)
  end
end
