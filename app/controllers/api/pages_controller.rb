class Api::PagesController < ApplicationController
    before_action :set_page, except: [:index]

  def index
      render json: Page.all
  end

  def update
    if @page.update(page_params)
      render json: @page
    else
      render json: { errors: @page.errors.full_messages.join(',') }, status: :bad_request
    end
  end

  def destroy
    @page.destroy
    render json: @page
  end

  private
    def set_character
      @page = Page.find(params[:id])
    end

    def character_params
      params.require(:page).permit(:name)
    end
end
