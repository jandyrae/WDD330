
const apiPlanets = document.getElementById('planets');
const apiPeople = document.getElementById('people');
const apiFilms = document.getElementById('films');
const outputDiv = document.getElementById('output');



// the urls for each 
// "films": "https://swapi.dev/api/films/",
// "people": "https://swapi.dev/api/people/",
// "planets": "https://swapi.dev/api/planets/",
// "species": "https://swapi.dev/api/species/",
// "starships": "https://swapi.dev/api/starships/",
// "vehicles": "https://swapi.dev/api/vehicles/"
const planetAPI = 'https://swapi.dev/api/planets/5/';
const filmsAPI = 'https://swapi.dev/api/films/';
const peopleAPI = 'https://swapi.dev/api/people/1/';




//starwars api
apiPlanets.addEventListener('click', () => {
    fetch(planetAPI)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = 'Planet Name: ' + data.name + ' Climate type: ' + data.climate + ' Planet diameter: ' +  data.diameter + ' Gravity Type:  ' + data.gravity )
    .catch( error => console.log('There was an error:', error))
},false);


apiPeople.addEventListener('click', () => {
    fetch(peopleAPI)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = 'Person\'s Name: ' + data.name + ' Hair color: ' + data.hair_color + ' Eye Color: ' +  data.eye_color + ' Gender:  ' + data.gender )
    .catch( error => console.log('There was an error:', error))
},false);

