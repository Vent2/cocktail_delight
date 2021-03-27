// Fetching API 
const baseURL = "http://localhost:3000/cocktails"

fetch(baseURL).then(response => response.json()).then(function(json){
  cocktails = json.data
  for (let cocktail of cocktails ) {
    // console.log(cocktail);
    cocktail_obj = cocktail.attributes;
    cocktail_id = cocktail.id;
    cocktail_title = cocktail_obj.title;
    cocktail_img = cocktail_obj.image;
    cocktail_ingredients = cocktail_obj.ingredients;
    
    createCocktailCard()
    }})
  .catch(error => console.log("Error: " + error.full_messages));

//1. group ingredients into a custom data attribute using data -
//2. delete group
//3. if statement if cocktail has no ingredients delete cocktail.
//4. 
 function createCocktailCard(){
        const card = document.createElement('div');
        card.className = 'card'
        card.id = cocktail_id;
        const img = document.createElement('img');
        img.src = cocktail_img
        card.appendChild(img)
        const cardInfo = document.createElement('div')
        cardInfo.className = 'card-info'
        const title = document.createElement('h1')
        title.innerHTML = cocktail_title
        cardInfo.appendChild(title)
        const ingHeader = document.createElement('h3')
        ingHeader.innerHTML = "Ingredients: ";
        cardInfo.appendChild(ingHeader)
        const ul = document.createElement('ul')
        for(let ingredient of cocktail_ingredients){
          let li = document.createElement('li')
          li.innerHTML = ingredient.name
          ul.appendChild(li)
        }
        const del = document.createElement('h2')
        del.innerHTML = "Remove"
        del.id = cocktail_id
        del.onclick = handleRemove

        card.appendChild(del)
        cardInfo.appendChild(ul)
        card.appendChild(cardInfo)
        document.getElementById('cocktail-card-container').appendChild(card)
      }

function addCocktail() {
  const form = document.getElementById('new-cocktail-form')
  const ingredients = form[2].value.split(', ')
  const cocktail = {"title": form[0].value, "image": form[1].value, "ingredients": ingredients};

  const configurationObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(cocktail)
  };
  fetch(baseURL, configurationObject)
      .then(response => {response.json();})
      .catch(error => console.log("Error: " + error))
}

    


const formSubmit = document.getElementById('form-submit')



formSubmit.addEventListener("click", function(e){
  e.preventDefault();
  addCocktail();
})

function handleRemove(event) {
  console.log(this);
  this.parentNode.remove();  
}


function addCocktail() {
  const ingredients = form[2].value.split(', ')
  const cocktail = {"title": form[0].value, "image": form[1].value, "ingredients": ingredients};

  const configurationObject = {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(cocktail)
  };
  fetch(baseURL, configurationObject)
      .then(response => {response.json();})
      .catch(error => console.log("Error: " + error))
}