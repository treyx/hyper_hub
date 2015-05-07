class Api::V1::ReposController < ApplicationController
  respond_to :json

  def index
    token = current_user.token
    respond_with Repo.find_repository(params[:user], params[:repo], token)
  end
end
