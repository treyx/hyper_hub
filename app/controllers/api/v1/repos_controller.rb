class Api::V1::ReposController < ApplicationController
  respond_to :json

  def index
    respond_with Repo.parse_repo(params[:owner], params[:repo])
  end
end
