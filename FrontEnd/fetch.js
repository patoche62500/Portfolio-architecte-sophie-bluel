export async function fetchWork() {
  const work = await fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => alert("Erreur : " + error));
    console.log(work);
}
