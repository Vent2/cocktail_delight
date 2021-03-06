const baseURL = "http://localhost:3000/cocktails"

fetch(baseURL).then(response => response.json()).then(function(json){
  all = json.data
  for (const cocktail in all) {
    let div = cocktail_card(cocktail)
    document.body.appendChild(div)
  }
})
// .catch(error => console.log("Error: " + error.full_messages))


function cocktail_card(cocktail) {
  cocktail_obj = all[cocktail].attributes;
  cocktail_id = all[cocktail].id;
  cocktail_title = all[cocktail].title;
  cocktail_img = all[cocktail].image;
  cocktail_ingredients = all[cocktail].ingredients;









}


  

// functions
// function appendData(data) {
//   const mainContainer = document.getElementById("myData");
//   for (let i = 0; i < data.length; i++) {
//     const div = document.createElement("div");
//     div.innerHTML = 'Title: ' + data[i].title + ' ' + data[i];
//     mainContainer.appendChild(div);
//   }
// }
  // fetch(baseURL).then(response => response.json()).then(function(json){console.log(json)});
  
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
     