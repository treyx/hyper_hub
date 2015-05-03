class Api::V1::ReposController < ApplicationController
  respond_to :json

  def index
    # this is a work in progress
    # I am unsure if the error is on the Rails side or the Angular side
    # currently getting this error:
    # Error in resource configuration for action `query`.
    # Expected response to contain an array but got an object
    respond_with Repo.find_repository(params[:user], params[:repo])
  end
end
