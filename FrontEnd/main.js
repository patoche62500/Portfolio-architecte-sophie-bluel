import { fetchCategory, fetchWork } from "./js/data.js";
import { generateGalleryFilter } from "./js/gallery.js";
import { generateBouton, getCurrentFilter } from "./js/filter.js";
import { loginButton, GetIsLogin } from "./login.js";

async function init() {
  await fetchWork();
  await fetchCategory();
  generateGalleryFilter(getCurrentFilter());

  loginButton();
  GetIsLogin();
}

init();

//console.log(getData());
