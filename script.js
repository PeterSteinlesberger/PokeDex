
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



function getColorForClass(typclass) {
    switch (typclass) {
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
    }


    /* function checkClass(i) {
    let typclass = document.getElementById(`sort${i}`).innerHTML;
    let backgroundColor = document.getElementById(`pokemonGeneral${i}`);
    backgroundColor.style.backgroundColor = getColorForClass(typclass);
    if (typclass == 'Grass') {
        backgroundColor.style.backgroundColor = "#7fdd6d";
    } else if (typclass == 'Fire') {
        backgroundColor.style.backgroundColor = "#ff5f6e";
    } else if (typclass == 'Water') {
        backgroundColor.style.backgroundColor = "#2d97eb";
    } else if (typclass == 'Normal') {
        backgroundColor.style.backgroundColor = "#9e9ca0";
    } else if (typclass == 'Electric') {
        backgroundColor.style.backgroundColor = "#e2c700";
    } else if (typclass == 'Bug') {
        backgroundColor.style.backgroundColor = "#a25757";
    } else if (typclass == 'Poison') {
        backgroundColor.style.backgroundColor = "#ffae03";
    } else if (typclass == 'Ground') {
        backgroundColor.style.backgroundColor = "#743b3b";
    } else if (typclass == 'Fairy') {
        backgroundColor.style.backgroundColor = "#9147bb";
    } else if (typclass == 'Fighting') {
        backgroundColor.style.backgroundColor = "#eb3434";
    } else if (typclass == 'Psychic') {
        backgroundColor.style.backgroundColor = "#7c1457";
    } else if (typclass == 'Rock') {
        backgroundColor.style.backgroundColor = "#7c1457";
    } else if (typclass == 'Ghost') {
        backgroundColor.style.backgroundColor = "#194600";
    } else if (typclass == 'Ice') {
        backgroundColor.style.backgroundColor = "#2accc6";
    } else if (typclass == 'Dragon') {
        backgroundColor.style.backgroundColor = "#836312";
    }
} */