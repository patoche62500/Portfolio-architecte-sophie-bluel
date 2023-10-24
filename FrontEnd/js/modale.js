import { getData, fetchSendContent } from "./data.js";

export function iniModale() {
  const buttonModifier = document.querySelector(".edition__login");
  buttonModifier.addEventListener("click", openModale);

  const close = document.querySelectorAll("#close");
  close.forEach((element) => {
    element.addEventListener("click", closeModale);
  });

  const modale2 = document.querySelector("#addphoto");
  modale2.addEventListener("click", nextModale);

  const back = document.querySelector("#back");
  back.addEventListener("click", nextModale);
  /*
  const addphoto = document.querySelector("#sendphoto");
  addphoto.addEventListener("click", sendContent);
*/
  document.querySelector(".formulaire").addEventListener("submit", sendContent);

  listenInput();
  checkValue();
}

function openModale() {
  console.log("click modale");

  const body = document.querySelector("body");

  console.log(body);

  body.classList.add("overflow");
  //body.className.add()

  const modaleContainer = document.querySelector(".modale__container");

  modaleContainer.className = "modale__container visibility--on";
}

export function closeModale() {
  console.log("click modale");

  const body = document.querySelector("body");
  body.classList.remove("overflow");

  const modaleContainer = document.querySelector(".modale__container");

  modaleContainer.className = "modale__container visibility--off";
}

function nextModale() {
  const modale1 = document.querySelector(".block01");

  const modale2 = document.querySelector(".block02");

  const save = modale1.className;

  modale1.className = modale2.className;

  modale2.className = save;
}

export function createSelectorContent() {
  const selector = document.querySelector("#categories");

  getData("categories").forEach((element, index) => {
    //console.log(element.name);
    //console.log(selector);
    //selector.options.push(element.name)
    if (index !== 0) {
      const option = document.createElement("option");
      option.value = element.id;
      option.innerHTML = element.name;

      selector.appendChild(option);
    }
  });
}

function checkValue() {
  const filePhoto = document.querySelector("#filephoto");
  const fileTitle = document.querySelector("#title");
  const fileSelected = document.querySelector("#categories");

  const btnSendPhoto = document.querySelector("#sendphoto");
  btnSendPhoto.disabled = true;
  console.log(btnSendPhoto);
  const preview = document.querySelector("#preview");

  if (filePhoto.value && fileTitle.value && fileSelected.value) {
    btnSendPhoto.disabled = false;
    btnSendPhoto.classList.remove("btn--disabled");
    btnSendPhoto.classList.add("btn--actived");

    preview.src = URL.createObjectURL(filePhoto.files[0]);

    console.log(filePhoto);
    console.log(preview);
  } else {
    btnSendPhoto.disabled = true;
    btnSendPhoto.classList.add("btn--disabled");
    btnSendPhoto.classList.remove("btn--actived");

    console.log(filePhoto.value);

    if (filePhoto.value) {
      preview.src = URL.createObjectURL(filePhoto.files[0]);
      console.log(filePhoto.files[0]);
      console.log(preview);
    } else {
      preview.src = "";
    }
  }
}

function listenInput() {
  const filePhoto = document.querySelector("#filephoto");

  filePhoto.addEventListener("change", checkValue);
  const fileTitle = document.querySelector("#title");
  fileTitle.addEventListener("change", checkValue);
  const fileSelected = document.querySelector("#categories");
  fileSelected.addEventListener("change", checkValue);
}

function sendContent(e) {
  e.preventDefault();
  const form = document.querySelector(".formulaire");
  //recupere les inputs du formulaire
  const formData = new FormData(form);
  // Convert the FormData object to an object with key-value pairs using Object.fromEntries()

  //console.log(data);

  //console.log("click");

  // Création de l’objet du nouvel avis.

  //console.log(getData("categories"))

  fetchSendContent(formData);
}
