const pokemonID = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const searchInput = document.getElementById("search-input");
const sprite = document.getElementById("sprite");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const types = document.getElementById("types");
const searchBtn = document.getElementById("search-button");


const fetchData = async () => {
    const pokemonNameOrId = searchInput.value.toLowerCase();

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        alert("Pokemon not found");
    }
}


searchBtn.addEventListener("click", fetchData);