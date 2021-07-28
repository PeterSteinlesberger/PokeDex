
let currentPokemon;
let searchWithName = "charmander";

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchWithName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log(currentPokemon);
    renderPokemonInfo();
}

function renderPokemonInfo() {
document.getElementById('pokeName').innerHTML = currentPokemon['name'];
document.getElementById('pokeNumber').innerHTML = `#${currentPokemon['id']}`;
document.getElementById('pokeImg').src = currentPokemon['sprites']['front_default'];
document.getElementById('weight').innerHTML = currentPokemon['weight'];
document.getElementById('height').innerHTML = currentPokemon['height'];
document.getElementById('order').innerHTML = currentPokemon['order'];
document.getElementById('experience').innerHTML = currentPokemon['base_experience'];
document.getElementById('type').innerHTML = currentPokemon['types']['0']['type']['name'];
renderProgressBars();
getColorForPokemon();
}

function searchByName() {
    searchWithName = document.getElementById('inputField').value;
    loadPokemon();
}

function renderProgressBars() {
    document.getElementById('experience').style.width = `${currentPokemon['base_experience'] /2}%`;
    document.getElementById('weight').style.width = `${currentPokemon['weight'] /2}%`;
    document.getElementById('height').style.width = `${currentPokemon['height'] *5}%`;
    document.getElementById('order').style.width = `${currentPokemon['order'] *5}%`;
}


function getColorForPokemon() {
    
let pokeBackground = document.getElementById('pokeImg');
let classTyp = currentPokemon['types']['0']['type']['name'];
    switch (classTyp) { 
        case 'Grass':
            return '#7fdd6d'; 
        case 'Fire':
            return '#ff5f6e';
            case 'Water':
                return '#2d97eb';
            case 'Normal':
                return '#9e9ca0';
            case 'Electric':
                return '#e2c700';
            case 'Bug':
                return '#a25757';
            case 'Poison':
                return '#ffae03';
            case 'Ground':
                return '#743b3b';
            case 'Fairy':
                return '#9147bb';
            case 'Fighting':
                return '#eb3434';
            case 'Psychic':
                return '#7c1457';
            case 'Rock':
                return '#7c1457';
            case 'Ghost':
                return '#194600';
            case 'Ice':
                return '#2accc6';
            case 'Dragon':
                return '#836312';
    }
    pokeBackground.classList.style = `background-color: ${classTyp}`;
    }
