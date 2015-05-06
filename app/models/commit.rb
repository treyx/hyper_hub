class Commit

  def self.service
    @service ||= GitService.new
  end

  def self.find_commit_hist(owner, repo)
    service.find_commit_history(owner, repo)
  end
end
