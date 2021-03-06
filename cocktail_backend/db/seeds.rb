# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


c1 = Cocktail.create(title: "Champagne Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/untitled-recipe-3984.jpg")
c1.ingredients << [Ingredient.find_or_create_by(name: "1 Imperial Sugar(r) / Dixie Crystals(r) Granulated Sugar cube"), Ingredient.find_or_create_by(name: "6 dashes bitters"), Ingredient.find_or_create_by(name: "1/2 ounce brandy"), Ingredient.find_or_create_by(name: "1/2 cup Champagne chilled"), Ingredient.find_or_create_by(name: "GARNISH: ; MARASCHINO CHERRY AND LEMON SLICE")]

c2 = Cocktail.create(title: "Margarita Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/margarita-cocktail-2.jpg")
c2.ingredients << [Ingredient.find_or_create_by(name: "3 oz gold or silver tequila"), Ingredient.find_or_create_by(name: "1 oz triple sec (Cointreau) OR mango/peach liqueur"), Ingredient.find_or_create_by(name: "2 oz fresh squeezed lime juice OR lemon juice"), Ingredient.find_or_create_by(name: "salt ; for rims of glasses")]

c3 = Cocktail.create(title: "Cosmopolitan Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/cosmopolitan-cocktail-3.jpg")
c3.ingredients << [Ingredient.find_or_create_by(name: "1/2 Cup Vodka ; 1/2 cup (4 fluid oz. or 8 Tablespoons)"), Ingredient.find_or_create_by(name: "1 Oz. (2 Tablespoons) Triple Sec ; 2 Tablespoons (1 fluid oz.)"), Ingredient.find_or_create_by(name: "1-1/2 Oz. (3 Tablespoons) Cranberry Juice ; 3 Tablespoons (1.5 fluid oz.)"), Ingredient.find_or_create_by(name: "1/2-1 Oz. (3-6 teaspoons) Lime juice ; 3 teaspoons to 2 tablespoons (.5 to 1 fluid oz.)")]

c4 = Cocktail.create(title: "Beach Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/beach-cocktail-67a9ac.jpg")
c4.ingredients << [Ingredient.find_or_create_by(name: "4 scoops Country Time Pink Lemonade"), Ingredient.find_or_create_by(name: "1 cup Watermellon Vodka ; like Smirnoff"), Ingredient.find_or_create_by(name: "1/3 cup Triple Sec"), Ingredient.find_or_create_by(name: "1/3 cup Malibu Coconut Rum"), Ingredient.find_or_create_by(name: "4 Strawberries")]

c5 = Cocktail.create(title: "Bootleg Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/bootleg-f48423.jpg")
c5.ingredients << [Ingredient.find_or_create_by(name: "1 can lemonade concentrate"), Ingredient.find_or_create_by(name: "1 can limeade concentrate"), Ingredient.find_or_create_by(name: "1 cup packed mint plus additional for garnish"), Ingredient.find_or_create_by(name: "1 1/2 ounces Gin (vodka or rum can also be used)"), Ingredient.find_or_create_by(name: "3 ounces Bootleg mix"), Ingredient.find_or_create_by(name: "splash of club soda"), Ingredient.find_or_create_by(name: "Mint garnish")]

c6 = Cocktail.create(title: "Another Pimm's Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/another-pimms-cocktail-bf7917.jpg")
c6.ingredients << [Ingredient.find_or_create_by(name: "25 ml Pimm's No. 1®"), Ingredient.find_or_create_by(name: "100 ml lemonade"), Ingredient.find_or_create_by(name: "Ice"), Ingredient.find_or_create_by(name: "2 orange slice"), Ingredient.find_or_create_by(name: "4 cucumber slice"), Ingredient.find_or_create_by(name: "2 strawberry slices"), Ingredient.find_or_create_by(name: "1 mint sprig")]

c7 = Cocktail.create(title: "Shrimp Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/shrimp-cocktail-7.jpg")
c7.ingredients << [Ingredient.find_or_create_by(name: "1 lb shrimp"), Ingredient.find_or_create_by(name: "6 T chili sauce"), Ingredient.find_or_create_by(name: "2 T Lemon Juice"), Ingredient.find_or_create_by(name: "1/2 T Horseradish"), Ingredient.find_or_create_by(name: "1/4 t grated onion"), Ingredient.find_or_create_by(name: "1/3 c finely chopped celery"), Ingredient.find_or_create_by(name: "2 c crisp salad greens"), Ingredient.find_or_create_by(name: "Lemon wedges")]

c8 = Cocktail.create(title: "Fresh Pear Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/fresh-pear-cocktail-4.jpg")
c8.ingredients << [Ingredient.find_or_create_by(name: "1 medium Bosc pear"), Ingredient.find_or_create_by(name: "2 tablespoons citrus-infused vodka"), Ingredient.find_or_create_by(name: "1 tablespoon pomegranate juice"), Ingredient.find_or_create_by(name: "1 tablespoon fresh lime juice"), Ingredient.find_or_create_by(name: "1 tablespoon agave syrup (or sugar syrup)"), Ingredient.find_or_create_by(name: "3 tablespoons hard apple cider or cidre doux"), Ingredient.find_or_create_by(name: "PEAR SLICES (OPTIONAL)")]

c9 = Cocktail.create(title: "Cucumber Minty Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/cucumber-mint-b027b3.jpg")
c9.ingredients << [Ingredient.find_or_create_by(name: "1 ounce Simple syrup"), Ingredient.find_or_create_by(name: "3 slice Cucumber"), Ingredient.find_or_create_by(name: "4 leaves Mint"), Ingredient.find_or_create_by(name: "1.5 ounces Gin"), Ingredient.find_or_create_by(name: "1 ounce Lime Juice")]

c10 = Cocktail.create(title: "French 75 Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/french-75-cocktail.jpg")
c10.ingredients << [Ingredient.find_or_create_by(name: "3/4 oz gin"), Ingredient.find_or_create_by(name: "1 splash lemon juice ; from 1/2 fresh lemon, with pulp"), Ingredient.find_or_create_by(name: "1 sugar cube"), Ingredient.find_or_create_by(name: "Champagne ; top with Champagne")]

c11 = Cocktail.create(title: "Summer Solstice Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/summer-solstice-cocktail.jpg")
c11.ingredients << [Ingredient.find_or_create_by(name: "1 1/2 oz West Bourye Whiskey ; pour"), Ingredient.find_or_create_by(name: "1 tsp Peaches ; diced"), Ingredient.find_or_create_by(name: "3 whole Mint Leaves ; whole"), Ingredient.find_or_create_by(name: "1/2 oz White Tea Syrup ; steep 4 white tea bags add 10 ounces of powdered sugar")]

c12 = Cocktail.create(title: "Bacardi Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/bacardi-cocktail-1118cb.jpg")
c12.ingredients << [Ingredient.find_or_create_by(name: "1/2 oz fresh lime or lemon juice"), Ingredient.find_or_create_by(name: "1/2 tsp sugar"), Ingredient.find_or_create_by(name: "1 tsp grenadine"), Ingredient.find_or_create_by(name: "2 oz Bacardi light rum")]

c13 = Cocktail.create(title: "Gold Rush Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/gold-rush-cocktail-ad313a.jpg")
c13.ingredients << [Ingredient.find_or_create_by(name: "2 ounces bourbon"), Ingredient.find_or_create_by(name: "3/4 ounce freshly squeezed juice from 1 lemon"), Ingredient.find_or_create_by(name: "3/4 ounce honey syrup")]

c14 = Cocktail.create(title: "The Old Fashioned Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/the-old-fashioned-cocktail-a.jpg")
c14.ingredients << [Ingredient.find_or_create_by(name: "3 dashes Angostura bitters"), Ingredient.find_or_create_by(name: "Liquid sugar/simple syrup (to taste)"), Ingredient.find_or_create_by(name: "2.5 oz (75 ml) bourbon ; minimum 8 years old"), Ingredient.find_or_create_by(name: "1 2-inch strip orange rind")]

c15 = Cocktail.create(title: "Aventura Cocktail", image: "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/aventura-cocktail-4c2ef7.jpg")
c15.ingredients << [Ingredient.find_or_create_by(name: "1 1/2 oz Mezcal"), Ingredient.find_or_create_by(name: "3/4 oz Grand Marnier"), Ingredient.find_or_create_by(name: "1/4 oz St Germain"), Ingredient.find_or_create_by(name: "Juice of 1 Lime"), Ingredient.find_or_create_by(name: "Juice of 1/4 Lemon"), Ingredient.find_or_create_by(name: "Barspoonful Sugar"), Ingredient.find_or_create_by(name: "Handful Fresh Raspberries"), Ingredient.find_or_create_by(name: "Mint sprig (for garnish)")]
