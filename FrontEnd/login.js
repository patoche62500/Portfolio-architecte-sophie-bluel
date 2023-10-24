import { generateBouton } from "./js/filter.js";
login();
loginButton();

function login() {
  const bouton = document.querySelector("#formulaire");
  if (!bouton) {
    return;
  }

  bouton.addEventListener("submit", data);

  function data(event) {
    event.preventDefault();
    //console.log("paramaer");

    //recupere les inputs du formulaire
    const formData = new FormData(bouton);
    // Convert the FormData object to an object with key-value pairs using Object.fromEntries()
    const data = Object.fromEntries(formData.entries());

    //console.log(data);

    //console.log("click");

    // Création de l’objet du nouvel avis.
    const user = {
      email: data.email,
      password: data.password,
    };

    loginUser(user);
  }
}

function data(event) {
  event.preventDefault();
  //console.log("paramaer");

  //recupere les inputs du formulaire
  const formData = new FormData(bouton);
  // Convert the FormData object to an object with key-value pairs using Object.fromEntries()
  const data = Object.fromEntries(formData.entries());

  //console.log(data);

  //console.log("click");

  // Création de l’objet du nouvel avis.
  const user = {
    email: data.email,
    password: data.password,
  };

  loginUser(user);
}

console.log("teste");

async function loginUser(user) {
  const userData = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  //console.log(userData);
  const userDataJson = await userData.json();
  //.then((response) => response.json())
  //.then((response) => response)
  //.catch((error) => alert("Erreur : " + error));
  //console.log(userDataJson);
  //works = galleryDataJson;

  //
  userData.ok;

  // response correcte de la par du server
  if (userData.ok) {
    window.localStorage.setItem("userId", userDataJson.token);
    //console.log(userDataJson.userId, userDataJson.token);
    document.location.href = "./index.html";
  } else {
    const error = document.querySelector(".error");
    error.className = "error--visible";
    //console.log(userData.statusText);
    //console.log("error login");
  }
}

export function loginButton() {
  const login = document.querySelector("#login");
  login.addEventListener("click", printlog);
}

function printlog() {
  //console.log("click");

  if (window.localStorage.getItem("userId")) {
    window.localStorage.clear();
    GetIsLogin();
  } else {
    document.location.href = "./login.html";
  }
}

export function GetIsLogin() {
  const login = document.querySelector("#login");

  const edition = document.querySelector(".edition__login");

  if (window.localStorage.getItem("userId")) {
    login.innerHTML = "logout";

    //console.log("log out");
    edition.className = "edition__login";
    displayEditionMode(true);
    return true;
  } else {
    login.innerHTML = "login";
    edition.className = "edition__login hidden";
    updateBoutonFilter();
    displayEditionMode(false);
    return false;
  }

  //console.log();
}

function updateBoutonFilter() {
  generateBouton();
}

function displayEditionMode(bisvisible) {
  const edition = document.querySelector(".edition__container");
  if (bisvisible) {
    edition.className = "edition__container visible";
  } else {
    edition.className = "edition__container";
  }
}
