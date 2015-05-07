class Api::V1::CommitsController < ApplicationController
  respond_to :json

  def index
    token = current_user.token
    respond_with Commit.find_commit_hist(params[:user], params[:repo], token)
  end
end
