class CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all
        
        render json: CocktailSerializer.new(cocktails)
    end
    
        def create
            cocktail = Cocktail.new(cocktail_params)
            ingredients = params[:ingredients].map { |ingredient| Ingredient.find_or_create_by(name: ingredient) }
            cocktail.ingredients << ingredients
            cocktail.save
            render json: CocktailSerializer.new(cocktail)
        end

   

    def show
        cocktail = Cocktail.find_by(params[:id])  

        render json: CocktailSerializer.new(cocktail)        
    end



    def destroy
        all = Cocktail.all
        # byebug
        cocktail = Cocktail.find(params[:id])
            cocktail.destroy
            render json: CocktailSerializer.new(all)

            # redirect_to action: "index"      
    end

    private

    def cocktail_params
        params.require(:cocktail).permit(:title, :image)
    end

end
