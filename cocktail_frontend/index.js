// Fetching API 
// const baseURL = "http://localhost:3000/cocktails"

// const app = () => {
//   fetch(baseURL).then(response => response.json()).then(function (json) {
//       cocktails = json.data
//       for (let cocktail of cocktails) {
//         cocktail_obj = cocktail.attributes;
//         cocktail_id = cocktail.id;
//         cocktail_title = cocktail_obj.title;
//         cocktail_img = cocktail_obj.image;
//         cocktail_ingredients = cocktail_obj.ingredients;

//         createCocktailCard()
//       }
//     })
//     .catch(error => console.log("Error: " + error.full_messages));
// }

// function createCocktailCard() {
//   const card = document.createElement('div');
//   card.className = 'card'
//   card.id = cocktail_id;
//   const img = document.createElement('img');
//   img.src = cocktail_img
//   card.appendChild(img)
//   const cardInfo = document.createElement('div')
//   cardInfo.className = 'card-info'
//   const title = document.createElement('h1')
//   title.innerHTML = cocktail_title
//   cardInfo.appendChild(title)
//   const ingHeader = document.createElement('h3')
//   ingHeader.innerHTML = "Ingredients: ";
//   cardInfo.appendChild(ingHeader)
//   const ul = document.createElement('ul')
//   for (let ingredient of cocktail_ingredients) {
//     let li = document.createElement('li')
//     li.innerHTML = ingredient.name
//     ul.appendChild(li)
//   }
//   const del = document.createElement('h2')
//   del.innerHTML = "Remove"
//   del.id = cocktail_id
//   del.onclick = removeCocktail;

//   card.appendChild(del)
//   cardInfo.appendChild(ul)
//   card.appendChild(cardInfo)
//   document.getElementById('cocktail-card-container').appendChild(card)
// }

// function addCocktail() {
//   const form = document.getElementById('new-cocktail-form')
//   const ingredients = form[2].value.split(', ')
//   const cocktail = {
//     "title": form[0].value,
//     "image": form[1].value,
//     "ingredients": ingredients
//   };
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(cocktail)
//   };

//   // formCocktail(); ///////

//   fetch(baseURL, configurationObject)
//     .then(response => response.json())
//     .catch(error => console.log("Error: " + error));

//   // getLastCocktail(); ////////
// }


// function formCocktail() {
  
//   const card = document.createElement('div');
//   card.className = 'card'
//   const img = document.createElement('img');
//   img.src = form[1].value;
//   card.appendChild(img)
//   const cardInfo = document.createElement('div')
//   cardInfo.className = 'card-info'
//   const title = document.createElement('h1')
//   title.innerHTML = form[0].value;
//   cardInfo.appendChild(title)
//   const ingHeader = document.createElement('h3')
//   ingHeader.innerHTML = "Ingredients: ";
//   cardInfo.appendChild(ingHeader)
//   const ul = document.createElement('ul')
//   const li = document.createElement('li')
//   for (let ingredient of form[2].value.split(', ')) {
//     let li = document.createElement('li')
//     li.innerHTML = ingredient
//     ul.appendChild(li)
//   }
//   const del = document.createElement('h2')
//   del.innerHTML = "Remove"
//   del.id = this.id
//   del.onclick = removeCocktail;

//   card.appendChild(del)
//   cardInfo.appendChild(ul)
//   card.appendChild(cardInfo)
//   document.getElementById('cocktail-card-container').appendChild(card)
// }

// const formSubmit = document.getElementById('form-submit')

// formSubmit.addEventListener("click", function (e) {
//   e.preventDefault();
//   addCocktail();
// });



// function removeCocktail() {
//   const cocktail_id = this.id;

//   const configurationObject = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(cocktail_id)
//   };
//   fetch(`http://localhost:3000/cocktails/${cocktail_id}`, configurationObject)
//     .then(response => response.json())
//     .then(response => location.reload())
//     .catch(error => console.log("Error: " + error));
// }

// app()



// function getLastCocktail(){
//   fetch("http://localhost:3000/cocktails/show")
//   .then(response => response.json())
//   .catch(error => console.log("Error: " + error));

// }
//1.get info into form input field.
//2.populate a new form/card for the cocktail.
//3.attach the new card to card container.
//4.new coocktail to go into the data base.
//5.recieve its id.
//6.frontend to recieve the id whithout having to reload the page.
//7.Be able to remove cocktail via id.

//expected behaviour 
//To beable to create a new cocktail via form and have it populate on the page. Also be able to immediatly remove that new cocktail. 


//actual behavior
// Able to create a new cocktail via form and it populates the page. But missing an id to be able to remove cocktail without page refreshing.

////////////////////////////////////////////////////////////////




// class CocktailAdapter {
//     constructor() {
//       this.baseURL = "http://localhost:3000/cocktails"
//     }
  
//     getCocktails() {
//       return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
//     }
// }


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

  removeCocktailFromApi(configurationObject) {
    return fetch(this.baseURL, configurationObject)
      .then(response => response.json())
      .catch(error => console.log("Error: " + error))
  }
}


class Cocktail{
  constructor(title, image, ingredients){
    this.title = title;
    this.image = image;
    this.ingredients = ingredients;
  }

  createCocktailCard() {
    const card = document.createElement('div')
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

    const del = document.createElement('h2')
      del.innerHTML = "Remove"
      del.id = this.id
      // del.onclick = clearCocktail
      // del.onclick = this.removeCocktail();

    
    cardInfo.appendChild(ul)
    card.appendChild(del)
    card.appendChild(cardInfo)
    // card.appendChild(footer)
    document.getElementById('cocktail-card-container').appendChild(card)
}
}

class Cocktails {
  constructor() {
    this.cocktails = [];
    this.adapter = new CocktailAdapter();
    this.formSubmit = document.getElementById('form-submit');
    this.cardContainer = document.getElementById('cocktail-card-container');
    this.bindEventListeners();
    this.fetchAndLoadCocktails();
  }

  fetchAndLoadCocktails(){
    this.adapter.getCocktails()
    .then(cocktails => this.createCocktails(cocktails))
    .then(() => this.addCocktailsToDom())
  }

  bindEventListeners() {
    this.formSubmit.addEventListener("click", function(e) {
      e.preventDefault();
      this.addCocktail();
  }.bind(this))
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
      this.cocktails.push(new Cocktail(cocktail.attributes.title, cocktail.attributes.image, ingredients))
    }
  }

  addCocktailsToDom() {
    for (let cocktail of this.cocktails){
      cocktail.createCocktailCard();
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
  }

  removeCocktail() {
      const cocktail_id = this.id;
    
      const configurationObject = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(cocktail_id)
      };

      this.adapter.removeCocktailFromApi(configurationObject)
        .then(function(json){
          cocktail_id.clearCocktail();
        })
        .catch(error => console.log("Error: " + error));
    };

//   clearCocktail() {
//     this.cardContainer.innerHTML = "";
// }
}

class App {
  constructor(){
    this.cocktails = new Cocktails()
  }
}

const app = new App()
