function Home(name, propertyType, streetAddress, city, state) {
  this.name = name;
  this.propertyType = propertyType;
  this.streetAddress = streetAddress;
  this.city = city;
  this.state = state;

  this.render = function () {
    const li = document.createElement("li");
    li.innerHTML = `Name: ${this.name}<br />Property Type: ${this.propertyType}<br />Street Address: ${this.streetAddress}<br />City: ${this.city}<br />State: ${this.state}`;
    return li;
  };
}
