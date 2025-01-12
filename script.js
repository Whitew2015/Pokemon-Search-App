//declare constant variables
const pokemonID = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const searchInput = document.getElementById("search-input");
const pokemonSprite = document.getElementById("sprite-container");
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

// function to retrieve and set data from Pokemon API
const fetchData = async () => {
    const pokemonNameOrId = searchInput.value.toLowerCase();

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        const data = await res.json();
        console.log(data);

        // set pokemon name, id and stats
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        pokemonID.textContent = `#${data.id}`;
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;

        // display Pokemon types and sprite
        pokemonSprite.innerHTML = `<img id="sprite" 
        src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;

        types.innerHTML = data.types.map(type => `<span class="type 
        ${type.type.name}">${type.type.name}</span>`).join('');
    } catch (err) {
        alert("Pokemon not found");
        resetData();
    }
}

//function to reset Pokemon data
const resetData = () => {
    const sprite = document.getElementById("sprite");
    if (sprite) sprite.remove();

    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
    pokemonID.textContent = "";
    pokemonName.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    types.innerHTML = "";

}

//button and input functionalities
searchBtn.addEventListener("click", fetchData);
searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        fetchData();
    }
})