class CocktailSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image, :ingredients
end
