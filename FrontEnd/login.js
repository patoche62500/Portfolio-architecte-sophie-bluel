login();
loginButton();

function login() {
  const bouton = document.querySelector("#formulaire");
  if (!bouton) {
    return;
  }
  bouton.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("click");

    // Création de l’objet du nouvel avis.
    const user = {
      email: event.target.querySelector("[name=email]").value,
      password: event.target.querySelector("[name=password]").value,
    };

    loginUser(JSON.stringify(user));
  });
}

console.log("teste");

async function loginUser(user) {
  const userData = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: user,
  });

  console.log(userData);
  const userDataJson = await userData.json();
  //.then((response) => response.json())
  //.then((response) => response)
  //.catch((error) => alert("Erreur : " + error));
  console.log(userDataJson);
  //works = galleryDataJson;

  //

  switch (userData.status) {
    case 200:
      window.localStorage.setItem(userDataJson.userId, userDataJson.token);
      console.log(userDataJson.userId, userDataJson.token);
      document.location.href = "./index.html";
      break;
    case 401:
      console.log("error login");
      break;
  }
}

export function loginButton() {
  const login = document.querySelector("#login");
  login.addEventListener("click", printlog);
}

function printlog() {
  console.log("click");

  if (window.localStorage.getItem(1)) {
    window.localStorage.clear();
    GetIsLogin();
  } else {
    document.location.href = "./login.html";
  }
}

export function GetIsLogin() {
  const login = document.querySelector("#login");

  if (window.localStorage.getItem(1)) {
    login.innerHTML = "logout";
    //login.id = "login";
    console.log("log out");
  } else {
    login.innerHTML = "login";
  }

  //console.log();
}
