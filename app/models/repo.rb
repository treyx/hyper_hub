class Repo

  def self.service
    @service ||= RepoService.new
  end

end
