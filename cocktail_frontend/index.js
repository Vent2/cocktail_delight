
class CocktailAdapter{
  constructor(){
    this.baseURL = "http://localhost:3000/cocktails"
  };

  getCocktails() {
    return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
  }

  postCocktailToApi(configurationObject) {
    return fetch(this.baseURL, configurationObject)
      .then(response => response.json())
      .catch(error => console.log("Error: " + error))
  }

  removeCocktailFromApi(cocktail_id, configurationObject) {
    return fetch(`http://localhost:3000/cocktails/${cocktail_id}`, configurationObject)
      .then(response => response.json())
      .catch(error => console.log("Error: " + error))
  }
}


class Cocktail{
  constructor(title, image, ingredients, id){
    this.title = title;
    this.image = image;
    this.ingredients = ingredients;
    this.id = id;
    Cocktail.all.push(this);
  }

  createCocktailCard() {
    const card = document.createElement('div')
    card.id = this.id || Math.floor(Math.random() * 100)
    card.className = "card"
    const img = document.createElement('img')
    img.src = this.image
    card.appendChild(img)
    const cardInfo = document.createElement('div')
    cardInfo.className = "card-info"
    const title = document.createElement('h1')
    title.innerHTML = this.title
    cardInfo.appendChild(title)
    const ingHeader = document.createElement('h3')
    ingHeader.innerHTML = "Ingredients:"
    cardInfo.appendChild(ingHeader)
    const ul = document.createElement('ul')
    for (let ingredient of this.ingredients) {
        let li = document.createElement('li')
        li.innerHTML = ingredient
        ul.appendChild(li)
    }

    const del = document.createElement('BUTTON')
      del.innerHTML = "Remove"
      del.id = card.id
      
    
    cardInfo.appendChild(ul)
    card.appendChild(del)
    card.appendChild(cardInfo)
    document.getElementById('cocktail-card-container').appendChild(card)
  }

  static findById = (id) => {
    return this.all.find((cocktail) => parseInt(cocktail.id) === id)
  }

}

Cocktail.all = [];

class Cocktails {
  constructor() {
    this.cocktails = [];
    this.removeCocktail = Cocktail.removeCocktail;
    this.adapter = new CocktailAdapter();
    this.formSubmit = document.getElementById('form-submit');
    // this.removeButtons = document.querySelectorAll('Button');
    this.cardContainer = document.getElementById('cocktail-card-container');
    this.addNewCocktail();
    this.fetchAndLoadCocktails();
    this.removeACocktail();
  }

  fetchAndLoadCocktails(){
    this.adapter.getCocktails()
    .then(cocktails => this.createCocktails(cocktails))
    .then(() => this.addCocktailsToDom())
    // const form = document.getElementById('new-cocktail-form')
    // form.reset();
  }

  

  addNewCocktail() {
    this.formSubmit.addEventListener("click", function(e) {
      e.preventDefault();
      this.addCocktail();
    }.bind(this))

    
}

  removeACocktail(){

    // let removeButtons = document.querySelectorAll("Button");
    // removeButtons.forEach((btn) => {
    //   btn.addEventListenter('click', e => {
    //     console.log(e.target.getAttribute('id'))
    //   })
    // })

    
    document.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute('id'));
      const cocktail = Cocktail.findById(id)
      
      const configurationObject = {
            method: "DELETE"
          };
          this.adapter.removeCocktailFromApi(cocktail, configurationObject).then(() => {
            function deleteCard() {
              let elem = document.getElementById(id);
              elem.parentNode.removeChild(elem);
            }
            deleteCard();
          })
        }
      )
    }

  createArrayOfCocktailIngredients(ingredients) {
    let ingredientArray = [];
    for (let ingredient of ingredients) {
        ingredientArray.push(ingredient.name);
    }
    return ingredientArray
}

  createCocktails(cocktails){
    for (let cocktail of cocktails){
      let ingredients = this.createArrayOfCocktailIngredients(cocktail.attributes.ingredients)
      this.cocktails.push(new Cocktail(cocktail.attributes.title, cocktail.attributes.image, ingredients, cocktail.id))
    }
  }

  addCocktailsToDom() {
    for (let cocktail of this.cocktails){
      cocktail.createCocktailCard();
      // cocktail.onclick = console.log(cocktail.id)
    };
    
  }

  addCocktail() {
  const form = document.getElementById('new-cocktail-form')
  const ingredients = form[2].value.split(', ')
  const cocktail = new Cocktail(form[0].value, form[1].value, ingredients)
  const configurationObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
          "title": form[0].value,
          "image": form[1].value,
          "ingredients": ingredients
      })
  };
  this.adapter.postCocktailToApi(configurationObject).then(function(json) {
    cocktail.createCocktailCard();
  }.bind(this))

};

}

class App {
  constructor(){
    this.cocktails = new Cocktails()
  }
}

const app = new App()
