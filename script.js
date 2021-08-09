
let currentPokemon;
let searchWithName = "charmander";
let searchEntries = 1;
let pokemonList;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchWithName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    renderPokemonInfo();
   // showOverview();
    loadPokemonList();
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

 function renderOverview(searchEntries) { 
    document.getElementById(`pokeNameOverview${searchEntries}`).innerHTML = currentPokemon['name'];
        document.getElementById(`pokeNumberOverview${searchEntries}`).innerHTML = `#${currentPokemon['id']}`;
        document.getElementById(`pokeImgOverview${searchEntries}`).src = currentPokemon['sprites']['other']['dream_world']['front_default'];
        document.getElementById(`typeOverview${searchEntries}`).innerHTML = currentPokemon['types']['0']['type']['name'];
        document.getElementById(`pokeColorOverview${searchEntries}`).style = `background-color: ${getColorForPokemon()}`;
        }

        function showOverview() {
            document.getElementById('overviewContainer').innerHTML = '';

            for (let i = 0; i < searchEntries; i++) {
    
        document.getElementById('overviewContainer').innerHTML += `<div id="pokeColorOverview${searchEntries}" class="cards-view"> 
        <div id="pokeNumberOverview${searchEntries}" class="poke-number-left" ></div> 
        <div class="overview-cont">
          <img id="pokeImgOverview${searchEntries}" class="imgOverview" src="">
          <div class="text-Overview">
       <p id="pokeNameOverview${searchEntries}" class="nameOverview" ></p>
       <p id="typeOverview${searchEntries}" class="typeOverview" ></p>
      </div>
    </div>
      </div>`;
      renderOverview(searchEntries); 
      searchEntries++;
            }
        }
 

        async function loadPokemonList() {
           
            let url = `https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0`;
            let response = await fetch(url);
            pokemonList = await response.json();
            let pokemonListContainer = document.getElementById('pokeNames');
            
            for (let i = 0; i < pokemonList.length; i++) {
                console.log('test');
                let pokeName = pokemonList['results'][i]['name'];
                pokemonListContainer.innerHTML += `${pokeName}`;  
            }
        }

       

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });