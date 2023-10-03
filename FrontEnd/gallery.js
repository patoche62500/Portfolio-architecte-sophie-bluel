import { getData } from "./data.js";

export function generateGalleryFilter(idFilter) {
  const container = document.querySelector(".gallery");
  clearArray(container);

  getData().forEach((element) => {
    console.log(element.category.id);
    if (idFilter == 0) {
      generationContent(container, element);
    } else if (idFilter == element.category.id) {
      generationContent(container, element);
    }
  });
}

function generationContent(container, element) {
  const containerimage = document.createElement("figure");
  containerimage.innerHTML = ` <img src="${element.imageUrl}" alt="${element.title}" /> 
                                <figcaption> ${element.title} </figcaption>
                              `;

  container.appendChild(containerimage);
}

function clearArray(content) {
  content.innerHTML = "";
}
