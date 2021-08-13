
let currentPokemon;
let searchWithName = "bulbasaur";
let searchEntries = 0;
let pokemonList;

loadPokemonList();

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchWithName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    renderPokemonInfo();
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
showOverview();
}

function searchByName() {
    searchWithName = document.getElementById('inputField').value;
    loadPokemon();
}

function renderProgressBars() {
    document.getElementById('experience').style.width = `${currentPokemon['base_experience'] /2}%`;
    document.getElementById('weight').style.width = `${currentPokemon['weight'] /5}%`;
    document.getElementById('height').style.width = `${currentPokemon['height'] *5}%`;
    document.getElementById('order').style.width = `${currentPokemon['order']}%`;
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

 function renderOverview(i) { 
    document.getElementById(`pokeNameOverview${i}`).innerHTML = currentPokemon['name'];
        document.getElementById(`pokeNumberOverview${i}`).innerHTML = `#${currentPokemon['id']}`;
        document.getElementById(`pokeImgOverview${i}`).src = currentPokemon['sprites']['other']['dream_world']['front_default'];
        document.getElementById(`typeOverview${i}`).innerHTML = currentPokemon['types']['0']['type']['name'];
        document.getElementById(`pokeColorOverview${i}`).style = `background-color: ${getColorForPokemon()}`;
        }

        function showOverview() {
            document.getElementById('overviewContainer').innerHTML = '';
            searchEntries++;

            for (let i = 0; i < searchEntries; i++) {
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
      renderOverview(i); 
     
            }
        }
 

        async function loadPokemonList() {
           
            let url = `https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0`;
            let response = await fetch(url);
            pokemonList = await response.json();
            let pokemonListContainer = document.getElementById('pokeNames');
            
            for (let i = 0; i < 100 ; i++) {  // to get all 1118 PokemonNames on that list use "pokemonList['results'].length" as parameter!
                let pokeName = pokemonList['results'][i]['name'];
                pokemonListContainer.innerHTML += `
                <div id="${i}" class="poke-names" onclick="loadNameFromList(${i})" >${pokeName}</div>
               `;  
            }
        }

        function loadNameFromList(i) {
           let pokeName = document.getElementById(i).innerHTML;
           searchWithName = pokeName;
            loadPokemon();
            location.href="#main";
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });