using Camille::Syntax

class Camille::Schemas::Spaces < Camille::Schema
  include Camille::Types

  get :show do
    params(
      id: Number
    )
    response(
      space: Space
    )
  end

end