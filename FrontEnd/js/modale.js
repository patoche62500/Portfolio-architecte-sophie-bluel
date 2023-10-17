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
}

function openModale() {
  console.log("click modale");

  const modaleContainer = document.querySelector(".modale__container");

  modaleContainer.className = "modale__container visibility--on";
}

function closeModale() {
  console.log("click modale");

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


