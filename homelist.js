function HomeList(homes = []) {
  this.homes = homes;

  this.addHome = function (home) {
    this.homes.push(home);
  };

  this.removeHome = function (home) {
    // find home in array of homes,
    // remove home
    const index = this.homes.map((h) => h.name).indexOf(home.name);
    if (index !== -1) {
      this.homes.splice(index, 1);
      return home;
    } else {
      return null;
    }
  };

  this.render = function () {
    const list = document.createElement("ul");

    const print = (home) => {
      list.append(home.render());
    }
    const homeRender = this.homes.map(print);
    return list;
  };
}