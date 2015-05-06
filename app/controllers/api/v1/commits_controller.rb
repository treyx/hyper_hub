class Api::V1::CommitsController < ApplicationController
  respond_to :json

  def index
    respond_with Commit.find_commit_hist(params[:user], params[:repo])
  end
end
