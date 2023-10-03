import { getData } from "./data.js";
import { generateGalleryFilter } from "./gallery.js";

let currentfilter = 0;

let filter = {
  namefiltre: ["Tous", "Objets", "Appartement", "Hôtels & restaurants"],
  filtrefunction: [all, objets, appart, hotel],
};

function all() {
  console.log("all");
  buttonSelection(0);

}

function objets() {
  console.log("objets");
  buttonSelection(1);
  
}

function appart() {
  console.log("objets");
  buttonSelection(2);
  
}

function hotel() {
  console.log("objets");
  buttonSelection(3);
  
}

function buttonSelection(idFilter) {
  const oldbutton = document.querySelectorAll(".filtre")[currentfilter];
  oldbutton.className = "filtre";
  currentfilter = idFilter;
  const button = document.querySelectorAll(".filtre")[currentfilter];
  button.className = "filtre filtre--selected";
  generateGalleryFilter(idFilter);
}

export function generateBouton() {
  console.log(getData());
  const containerButton = document.querySelector(".button__container");

  filter.namefiltre.forEach((element, id) => {
    const button = document.createElement("button");
    button.className = "filtre";
    button.innerHTML = element;
    button.addEventListener("click", filter.filtrefunction[id]);
    containerButton.appendChild(button);
  });

  //console.log(filtre);

  generateFiltre();
  all();
  console.log(filter);
}

function generateFiltre() {
  // recuperation des noms des filtres //
  const data = getData();
  let exist = false;

  const filtre = data.map((category) => category.category.name);
  console.log(filtre);
  /*
  filtre.forEach((elementCategory) => {
    //console.log(`element category : ${elementCategory}`);

    filter.forEach((elementFilter) => {
      //console.log(`element filter : ${elementFilter}`)
      console.log(`Comparaison ${elementCategory} : ${elementFilter}`);
      if (elementCategory != elementFilter) {
        //filter.push(elementCategory);
      }
    });
  });*/
}

export function getCurrentFilter() {
  return currentfilter;
}