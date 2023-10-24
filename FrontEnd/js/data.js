import { closeModale } from "./modale.js";
import { generationContentEdition } from "./galleryEdition.js";
import { generateGalleryFilter } from "./gallery.js";
import { getCurrentFilter } from "./filter.js";

let works;
let categories = [];

let category = {
  id: 0,
  name: "Tous",
};

export async function fetchWork() {
  const galleryData = await fetch("http://localhost:5678/api/works");
  const galleryDataJson = await galleryData.json();
  //.then((response) => response.json())
  //.then((response) => response)
  //.catch((error) => alert("Erreur : " + error));
  //console.log("Data Works : ", galleryDataJson);
  works = galleryDataJson;
}

//Rajouter Fetch pour category

export async function fetchCategory() {
  const categoryData = await fetch("http://localhost:5678/api/categories");
  const categoryDataJson = await categoryData.json();
  //.then((response) => response.json())
  //.then((response) => response)
  //.catch((error) => alert("Erreur : " + error));

  //categories = categoryDataJson;
  categoryDataJson.unshift(category);
  categories = categoryDataJson;
  //console.log("Data Category : ", categories);
}
/**
 *
 *
 *
 *
 * @param {string} type works or categories
 *
 * @returns {array} data
 *
 */
export function getData(type = "works") {
  switch (type) {
    case "works":
      return works;
    //break;
    case "categories":
      return categories;
    //break;
  }
}

export function setWorks(worksValue) {
  works = worksValue;
}

export async function fetchDeleteContent(idDelete) {
  const deleteData = await fetch(
    `http://localhost:5678/api/works/${idDelete}`,
    {
      method: "DELETE",
      headers: {
        //Bearer = methode d'authentification / Type/
        "Authorization": `Bearer ${window.localStorage.getItem("userId")}`,
        "Content-Type": "application/json",
      },
    }
  );

  console.log(window.localStorage.getItem("userId"));
  console.log(deleteData.status);
}

export async function fetchSendContent(formData) {

  const sendData = await fetch("http://localhost:5678/api/works", {
    method: "POST",
    headers: {
      //Bearer = methode d'authentification / Type/
      "Authorization": `Bearer ${window.localStorage.getItem("userId")}`,
      
    },
    body: formData,
  });

  if (sendData.ok) {
    console.log("send data ok");

    await fetchWork();
    // fermer modale 
    closeModale();
    document.querySelector('#send').reset()
    generationContentEdition();
    generateGalleryFilter(getCurrentFilter());
  }
  else{
    const error = document.querySelector(".error");
    error.className = "error--visible";
  }
}
