const app = document.querySelector(".DOM");
const container = document.querySelector(".inputContainer");
const listings = document.querySelector(".listings");
const homeList = new HomeList();




///////////// Add Listing Button /////////////////
// On click, add input fields and submit button to DOM

addListing.addEventListener('click', function () {
  
  //Remove existing input boxes first
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  
  // Create user input boxes for each property of new home
  const nameBox = document.createElement("input");
  nameBox.setAttribute('id', 'nameBox');
  nameBox.setAttribute('placeholder', 'Give your listing a nickname!');
  container.append(nameBox);

  const propTypeBox = document.createElement("input");
  propTypeBox.setAttribute('id', 'propTypeBox');
  propTypeBox.setAttribute('placeholder', 'Property Type');
  container.append(propTypeBox);

  const streetBox = document.createElement("input");
  streetBox.setAttribute('id', 'streetBox');
  streetBox.setAttribute('placeholder', 'Street');
  container.append(streetBox);

  const cityBox = document.createElement("input");
  cityBox.setAttribute('id', 'cityBox');
  cityBox.setAttribute('placeholder', 'City');
  container.append(cityBox);

  const stateBox = document.createElement("input");
  stateBox.setAttribute('id', 'stateBox');
  stateBox.setAttribute('placeholder', 'State');
  container.append(stateBox);

  const submitAdd = document.createElement("button");
  submitAdd.setAttribute('id', 'submitAdd');
  submitAdd.innerText = "Submit";
  container.append(submitAdd);

  app.prepend(container);

//////The submit button adds the user listing to DOM

  submitAdd.addEventListener('click', function () {
    const newHome = new Home(nameBox.value, propTypeBox.value, streetBox.value, cityBox.value, stateBox.value);
    homeList.addHome(newHome);

    // This clears the DOM so that it doesn't print duplicate entries
    while (listings.hasChildNodes()) {
      listings.removeChild(listings.firstChild);
    }
    listings.append(homeList.render());

    //This clears the input boxes until you click add or remove again
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    };
    console.log(homeList.homes);
   
  })
})

///////////// Remove Listing Button /////////////////
// On click, add input field and submit button to DOM

removeListing.addEventListener('click', function () {

  //Remove existing input boxes first
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  container.textContent = "Enter the name of the listing to be removed."
  

  const removeBox = document.createElement("input");
  removeBox.setAttribute('id', 'removeBox');
  removeBox.setAttribute('placeholder', 'Name');
  container.append(removeBox);

  const submitRemove = document.createElement("button");
  submitRemove.setAttribute('id', 'submitRemove');
  submitRemove.innerText = "Submit";
  container.append(submitRemove);

  submitRemove.addEventListener('click', function(){

  // Filter function to find matching listings
  function filterItems(arr, query) {
    return arr.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));
  }

  const toRemove = filterItems(homeList.homes, removeBox.value);
  
  homeList.removeHome(toRemove[0])

  // This clears the DOM so that it doesn't print duplicate entries
  while (listings.hasChildNodes()) {
    listings.removeChild(listings.firstChild);
  }
  listings.append(homeList.render());

  //This clears the input boxes until you click add or remove again
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  };

})
})