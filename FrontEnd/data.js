let data;

export async function fetchWork() {
  const galleryData = await fetch("http://localhost:5678/api/works");
  const galleryDataJson = await galleryData.json();
    //.then((response) => response.json())
    //.then((response) => response)
    //.catch((error) => alert("Erreur : " + error));
  //console.log(galleryDataJson);
  data = galleryDataJson;
}

export function getData() {
  return data;
}
