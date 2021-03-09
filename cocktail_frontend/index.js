const baseURL = "http://localhost:3000/cocktails"

fetch(baseURL).then(response => response.json()).then(function(json){
  all = json.data
  const mainContainer = document.getElementById("myData");
  for (let i = 0; i < all.length; i++) {
    cocktail_obj = all[i].attributes;
    cocktail_id = cocktail_obj.id;
    cocktail_title = cocktail_obj.title;
    cocktail_img = cocktail_obj.image;
    cocktail_ingredients = cocktail_obj.ingredients;
    
    let div = document.createElement("div");
    div.innerHTML = 'Title: ' + cocktail_title + ' ' + cocktail_img;      
    div.classList.add('card');
    div.setAttribute("data-id", cocktail_id)
    
    let ul = document.createElement('ul')
    for(const ingredient of cocktail_ingredients){
        let li = document.createElement('li')
        li.textContent = `${ingredient.name}`;
        ul.appendChild(li)
      }
        div.appendChild(ul)
        
        mainContainer.appendChild(div);
      }
      
    })
  .catch(error => console.log("Error: " + error.full_messages))
  
  // let formData = {
  //     title: "Cocktail",
  //     image: "none"
  //   };
     
  //   let configObj = {
  //     method: "",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(formData)
  //   };
     