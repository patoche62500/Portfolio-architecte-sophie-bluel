import { fetchWork } from "./data.js";
import { generateGallery } from "./gallery.js";
import { generateBouton } from "./bouton.js";





async function init() {
  await fetchWork();
  
}

await init();

//console.log(getData());

generateGallery();
generateBouton();
