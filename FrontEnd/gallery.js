import { getData } from "./data.js";

export function generateGallery(){
    getData().forEach((element) => {
    const container = document.querySelector(".gallery");
    const containerimage = document.createElement("figure");
    const image = document.createElement('img');
    image.src = element.imageUrl;
    image.alt = element.title;
    containerimage.appendChild(image);
    const texte = document.createElement('figcaption');
    texte.innerHTML = element.title;
    containerimage.appendChild(texte);
    container.appendChild(containerimage);
    //console.log(container);
    
  });
}