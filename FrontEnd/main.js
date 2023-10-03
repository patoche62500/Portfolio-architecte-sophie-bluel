import { fetchCategory, fetchWork } from "./data.js";
import { generateGalleryFilter } from "./gallery.js";
import { generateBouton } from "./filter.js";
import { getCurrentFilter } from "./filter.js";

async function init() {
  await fetchWork();
  await fetchCategory();
  generateGalleryFilter(getCurrentFilter());
  generateBouton();
}

init();

//console.log(getData());
