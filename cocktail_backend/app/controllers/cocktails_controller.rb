class CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all
        
        render json: CocktailSerializer.new(cocktails)
    end

    def show
        cocktail = Cocktail.find_by(id: params[:id])
        
        render json: CocktailSerializer.new(cocktail)
    end

    def create
        cocktail = Cocktail.new(cocktail_params)
        ingredients = params[:ingredients].map { |ingredient| Ingredient.find_or_create_by(name: ingredient) }
        cocktail.ingredients << ingredients
        cocktail.save
        render json: CocktailSerializer.new(cocktail)
    end

    def destroy
        all = Cocktail.all
        cocktail = Cocktail.find(params[:id])
        if cocktail
            cocktail.destroy
            render json: CocktailSerializer.new(all)
        else
            render json: {error: 'Unable to delete Cocktail'}
        end
    end

    private

    def cocktail_params
        params.permit(:title, :image)
    end
end
