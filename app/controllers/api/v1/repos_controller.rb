class Api::V1::ReposController < ApplicationController
  respond_to :json

  def index
    respond_with Repo.find_repository(params[:user], params[:repo])
  end
end
