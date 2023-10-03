import { getData } from "./data.js";

export function generateGallery() {
  getData().forEach((element) => {
    const container = document.querySelector(".gallery");
    const containerimage = document.createElement("figure");
    const image = document.createElement("img");
    image.src = element.imageUrl;
    image.alt = element.title;
    containerimage.appendChild(image);
    const texte = document.createElement("figcaption");
    texte.innerHTML = element.title;
    containerimage.appendChild(texte);
    container.appendChild(containerimage);
    //console.log(container);
  });
}

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

function generationContent(container, element){
  const containerimage = document.createElement("figure");
  const image = document.createElement("img");
  image.src = element.imageUrl;
  image.alt = element.title;
  containerimage.appendChild(image);
  const texte = document.createElement("figcaption");
  texte.innerHTML = element.title;
  containerimage.appendChild(texte);
  container.appendChild(containerimage);
}

function clearArray(content) {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
