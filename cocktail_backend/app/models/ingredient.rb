class Ingredient < ApplicationRecord
    has_many :cocktail_ingredients, dependent: :delete_all
    has_many :cocktails, through: :cocktail_ingredients
end
