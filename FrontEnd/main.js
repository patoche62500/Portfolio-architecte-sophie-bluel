import { fetchWork } from "./fetch.js";
import { getData } from "./fetch.js";

async function init() {
  await fetchWork();
}

await init();

console.log(getData());

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
