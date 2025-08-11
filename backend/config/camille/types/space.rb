using Camille::Syntax

class Camille::Types::Space < Camille::Type
  include Camille::Types

  alias_of(
    name: String,
    note: String,
    path: String
  )
end