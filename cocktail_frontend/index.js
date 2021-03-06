const baseURL = "http://localhost:3000/cocktails"

fetch(baseURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });
  
  // fetch(baseURL).then(response => response.json()).then(function(json){console.log(json)});
  
  // let formData = {
  //     title: "Cocktail",
  //     image: "none"
  //   };
     
  //   let configObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(formData)
  //   };
     