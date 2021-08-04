
let currentPokemon;
let searchWithName = "charmander";
let searchResults = [];

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchWithName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    searchResults.push(currentPokemon);
    renderPokemonInfo();
    showOverview();
    renderOverview();  
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


function getColorForPokemon(i) {
     let searchResult = i;
let classTyp = searchResult['types']['0']['type']['name'];
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

 function renderOverview(i) { 
      
         let searchResult = i;
        document.getElementById('pokeNameOverview').innerHTML = searchResult['name'];
        document.getElementById('pokeNumberOverview').innerHTML = `#${searchResult['id']}`;
        document.getElementById('pokeImgOverview').src = searchResult['sprites']['other']['dream_world']['front_default'];
        document.getElementById('typeOverview').innerHTML = searchResult['types']['0']['type']['name'];
        document.getElementById('pokeColorOverview').style = `background-color: ${getColorForPokemon()}`;
        } 
     

        function showOverview() {
            document.getElementById('overviewContainer').innerHTML = '';

           for (let i = 0; i < searchResults.length; i++) {
               let searchResult = searchResults[i];
                document.getElementById('overviewContainer').innerHTML += `<div id="pokeColorOverview${i}" class="cards-view"> 
        <div id="pokeNumberOverview${i}" class="poke-number-left" ></div> 
        <div class="overview-cont">
          <img id="pokeImgOverview${i}" class="imgOverview" src="">
          <div class="text-Overview">
       <p id="pokeNameOverview${i}" class="nameOverview" ></p>
       <p id="typeOverview${i}" class="typeOverview" ></p>
      </div>
    </div>
      </div>`;
      renderOverview(searchResult);
    } 
        }
