import { getData } from "./data.js";

export function generationContentEdition() {
  getData().forEach((element) => {
    const container = document.querySelector("#container__galerie");
    generationContent(container, element);
  });
}

function generationContent(container, element) {
  const containerimage = document.createElement("figure");
  containerimage.innerHTML = ` <img class="photo" src="${element.imageUrl}" alt="${element.title}" /> 
                                <button class="icon--sup">
                                <img src="./assets/icons/trash-can-solid.png" alt="" />
                                </button>
                            `;

   const bouton = containerimage.querySelector('button');

   bouton.addEventListener('click', deleteContent)

  container.appendChild(containerimage);
}

function deleteContent(){
    console.log('delete');
}