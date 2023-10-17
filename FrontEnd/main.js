import { fetchCategory, fetchWork } from "./js/data.js";
import { generateGalleryFilter } from "./js/gallery.js";
import { generateBouton, getCurrentFilter } from "./js/filter.js";
import { loginButton, GetIsLogin } from "./login.js";
import { iniModale } from "./js/modale.js";

async function init() {
  await fetchWork();
  await fetchCategory();
  generateGalleryFilter(getCurrentFilter());

  loginButton();
  GetIsLogin();

  iniModale();

}

init();

//console.log(getData());
