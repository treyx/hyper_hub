class ReposController < ApplicationController
  respond_to :json

  def index
    respond_with Repo.public_repos
  end
end
