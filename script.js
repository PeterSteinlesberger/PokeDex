
let currentPokemon;
let searchWithName;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchWithName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    

}

function searchByName() {
    searchWithName = document.getElementById('inputField').value;
    loadPokemon();
    
}
