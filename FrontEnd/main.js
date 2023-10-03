import { fetchWork } from "./data.js";
import { generateGallery, generateGalleryFilter } from "./gallery.js";
import { generateBouton } from "./filter.js";
import { getCurrentFilter } from "./filter.js";

async function init() {
  await fetchWork();
}

await init();

//console.log(getData());

//generateGallery();

generateGalleryFilter(getCurrentFilter());

generateBouton();
