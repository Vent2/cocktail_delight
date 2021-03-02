class Ingredient < ApplicationRecord
    has_many :cocktial_ingredients
    has_many :cocktails through: :cocktial_ingredients
end
