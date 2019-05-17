class AboutController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :tecnologies]
  def index
  end

  def tecnologies

  end
end
