class Cocktail < ApplicationRecord
    has_many :cocktail_ingredients, dependent: :delete_all
    has_many :ingredients, through: :cocktail_ingredients
end
