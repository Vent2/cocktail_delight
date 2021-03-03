class Ingredient < ApplicationRecord
    has_many :cocktial_ingredients, dependent: :delete_all
    has_many :cocktails, through: :cocktial_ingredient
end
