import { getData } from "./data.js";
import { generateGalleryFilter } from "./gallery.js";

let currentfilter = 0;

let filter;

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

  getData("categories").forEach((element, id) => {
    const button = document.createElement("button");
    button.className = "filtre";
    button.innerHTML = element.name;

    button.addEventListener("click", () => {
      fonctionParameter(element.id);
    });
    containerButton.appendChild(button);
  });

  //console.log(filtre);

  buttonSelection(0);
  console.log(filter);
}

function fonctionParameter(teste) {
  console.log("teste");
  buttonSelection(teste);
}

export function getCurrentFilter() {
  return currentfilter;
}
