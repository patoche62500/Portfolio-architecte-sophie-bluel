import { fetchCategory, fetchWork } from "./js/data.js";
import { generateGalleryFilter } from "./js/gallery.js";
import { generateBouton, getCurrentFilter } from "./js/filter.js";
import { loginButton, GetIsLogin } from "./login.js";
import { iniModale } from "./js/modale.js";
import { generationContentEdition } from "./js/galleryEdition.js";

async function init() {
  await fetchWork();
  await fetchCategory();
  generateGalleryFilter(getCurrentFilter());
  generationContentEdition();

  loginButton();
  GetIsLogin();

  iniModale();

}

init();

//console.log(getData());
