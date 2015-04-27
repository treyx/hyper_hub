class HomeController < ApplicationController
  before_action :authorize!, only: [:show]

  def index
  end

  def show
  end

  private

  def authorize!
    redirect_to root_path unless current_user
  end
end
