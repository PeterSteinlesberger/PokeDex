
let currentPokemon;
let searchWithName = "charmander";

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchWithName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    renderPokemonInfo();
    renderOverview(); 
    
    if(currentPokemon > 0) {
       showOverview();
    }
 
}

function renderPokemonInfo() {
document.getElementById('pokeName').innerHTML = currentPokemon['name'];
document.getElementById('pokeNumber').innerHTML = `#${currentPokemon['id']}`;
document.getElementById('pokeImg').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
document.getElementById('weight').innerHTML = currentPokemon['weight'];
document.getElementById('height').innerHTML = currentPokemon['height'];
document.getElementById('order').innerHTML = currentPokemon['order'];
document.getElementById('experience').innerHTML = currentPokemon['base_experience'];
document.getElementById('type').innerHTML = currentPokemon['types']['0']['type']['name'];
renderProgressBars();
document.getElementById('pokeColor').style = `background-color: ${getColorForPokemon()}`;
document.getElementById('type').style = `color: ${getColorForPokemon()}`;
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
let classTyp = currentPokemon['types']['0']['type']['name'];
    switch (classTyp) { 
        case 'grass':
            return '#7fdd6d'; 
        case 'fire':
            return '#ff5f6e';
            case 'water':
                return '#2d97eb';
            case 'normal':
                return '#9e9ca0';
            case 'electric':
                return '#e2c700';
            case 'bug':
                return '#a25757';
            case 'poison':
                return '#ffae03';
            case 'ground':
                return '#743b3b';
            case 'fairy':
                return '#9147bb';
            case 'fighting':
                return '#eb3434';
            case 'psychic':
                return '#7c1457';
            case 'rock':
                return '#7c1457';
            case 'ghost':
                return '#194600';
            case 'ice':
                return '#2accc6';
            case 'dragon':
                return '#836312';
    }
    }

 function renderOverview() { 
    document.getElementById('pokeNameOverview').innerHTML = currentPokemon['name'];
        document.getElementById('pokeNumberOverview').innerHTML = `#${currentPokemon['id']}`;
        document.getElementById('pokeImgOverview').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
        document.getElementById('typeOverview').innerHTML = currentPokemon['types']['0']['type']['name'];
        document.getElementById('pokeColorOverview').style = `background-color: ${getColorForPokemon()}`;
        }

        function showOverview() {
        document.getElementById('overviewContainer').innerHTML += `<div id="pokeColorOverview" class="cards-view"> 
        <div id="pokeNumberOverview" class="poke-number-left" ></div> 
        <div class="overview-cont">
          <img id="pokeImgOverview" class="imgOverview" src="">
          <div class="text-Overview">
       <p id="pokeNameOverview" class="nameOverview" ></p>
       <p id="typeOverview" class="typeOverview" ></p>
      </div>
    </div>
      </div>`;
        }
