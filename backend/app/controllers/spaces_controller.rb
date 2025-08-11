class SpacesController < ApplicationController
  def show
    space = Space.find(params[:id])
    render json: {
      space: {
        name: space.name,
        note: space.note,
        path: space.path
      }
    }
  end
end
