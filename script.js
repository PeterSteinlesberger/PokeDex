
let currentPokemon;
let searchWithName;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchWithName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log(currentPokemon);
    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokeName').innerHTML = currentPokemon['name'];
    document.getElementById('pokeNumber').innerHTML += currentPokemon['id'];


}

function searchByName() {
    searchWithName = document.getElementById('inputField').value;
    loadPokemon();
    
}
