const apiPersonajes = "https://thesimpsonsapi.com/api/characters"
const apiDetalle = "https://cdn.thesimpsonsapi.com/500"
const contenedorCard = document.getElementById("Contenedor")

let personajes = []

fetch(apiPersonajes)
.then(response => response.json())
.then(data => {
    personajes = data;
    console.log(personajes);
    personajes.forEach(personaje => {
    console.log(personaje.name)
    
});
})
