class Cocktail < ApplicationRecord
    has_many :cocktial_ingredients
    has_many :ingredients, through: :cocktial_ingredient
end
