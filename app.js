const petData = [
  {
    name: "puffsloud",
    species: "cat",
    favouriteFood: ["wet food", "dry food", "<strong> any </strong> food"],
    birthYear: 2020,
    photo: "images/img1.jpg",
  },
  {
    name: "ouffsloud",
    species: "dog",
    favouriteFood: ["tuna food", "catnip food", "celery food"],
    birthYear: 2020,
    photo: "images/img2.jpg",
  },
  {
    name: "bingo",
    species: "dog",
    favouriteFood: ["chin chin", "catnip", "ice cream"],
    birthYear: 2020,
    photo: "images/img5.jpg",
  },
  {
    name: "meowselot",
    species: "cat",
    favouriteFood: ["wet food", "dry food", "<strong> any </strong> food"],
    birthYear: 2020,
    photo: "images/img3.jpg",
  },
  {
    name: "bingo",
    species: "dog",
    favouriteFood: ["chin chin", "catnip", "ice cream"],
    birthYear: 2020,
    photo: "images/img5.jpg",
  },
];
let pet = petData.map((p) => {
  return `<div class="pet-content"><div class="pet-img"><img class="photo" src=${p.photo} /></div><div class="pet-info"><p>Name:${p.name}</p><p>species:${p.species}
  </p><p>favorite food:${p.favouriteFood}</p><p>age:${p.birthYear}</p></div></div>`;
});

let petDiv = document.querySelector("#pets");
petDiv.innerHTML = `<div class="pet-container"><p class="pet-title"> we have ${petData.length}pets</p> ${pet} </div>`;
