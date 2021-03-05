class CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all
        
        render json: CocktailSerializer.new(cocktails)
    end


    private

    def cocktail_params
        params.require(:cocktail).permit(ingredient_ids: [])
    end
end
