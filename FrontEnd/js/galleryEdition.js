import { getData, setWorks, fetchDeleteContent } from "./data.js";
import { generateGalleryFilter } from "./gallery.js";
import { generateBouton, getCurrentFilter } from "./filter.js";

export function generationContentEdition() {
  getData().forEach((element, index) => {
    const container = document.querySelector("#container__galerie");
    generationContent(container, element, index);
  });
}

function generationContent(container, element, index) {
  const containerimage = document.createElement("figure");
  containerimage.innerHTML = ` <img class="photo" src="${element.imageUrl}" alt="${element.title}" /> 
                                <button class="icon--sup">
                                <img src="./assets/icons/trash-can-solid.png" alt="" />
                                </button>
                            `;

  const bouton = containerimage.querySelector("button");

  bouton.addEventListener("click", deleteContent);
  containerimage.element = element.id;

  container.appendChild(containerimage);
}

function deleteContent(e) {
  e.preventDefault();
  //console.log(this.parentElement.element);
  const container = document.querySelector("#container__galerie");
  console.log(getData());

  console.log(this.parentElement.element);

  fetchDeleteContent(this.parentElement.element);

  //enleve un element dans le tableau

  getData().forEach((element, index) => {
    if (element.id === this.parentElement.element) {
      getData().splice(index, 1);
    }
  });

  //getData().splice(this.parentElement.element, 1);

  container.innerHTML = "";
  //generationContentEdition();

  generationContentEdition();
  generateGalleryFilter(getCurrentFilter());
}
