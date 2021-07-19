
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
document.getElementById('pokeImg').src = currentPokemon['sprites']['front_default'];
document.getElementById('weight').innerHTML = currentPokemon['weight'];
document.getElementById('height').innerHTML = currentPokemon['height'];
document.getElementById('order').innerHTML = currentPokemon['order'];
document.getElementById('experience').innerHTML = currentPokemon['base_experience'];



}

function searchByName() {
    searchWithName = document.getElementById('inputField').value;
    loadPokemon();
    
}
