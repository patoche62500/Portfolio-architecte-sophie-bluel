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
  console.log("Data Works : ", galleryDataJson);
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
  console.log("Data Category : ", categories);
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
