
const apiPlanets = document.getElementById('planets');
const apiPeople = document.getElementById('people');
const apiFilms = document.getElementById('films');
const outputDiv = document.getElementById('output');
const apiShips = document.getElementById('ships');


// the urls for each 
// "films": "https://swapi.dev/api/films/",
// "people": "https://swapi.dev/api/people/",
// "planets": "https://swapi.dev/api/planets/",
// "species": "https://swapi.dev/api/species/",
const shipAPI = "https://swapi.dev/api/starships/";
// "vehicles": "https://swapi.dev/api/vehicles/"
const planetAPI = 'https://swapi.dev/api/planets/';
const filmsAPI = 'https://swapi.dev/api/films/';
const peopleAPI = 'https://swapi.dev/api/people/';



//starwars api
apiPlanets.addEventListener('click', () => {
    fetch(planetAPI)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        outputDiv.innerHTML = '';
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => {
        console.log(data);
        for(let i = 0; i < 10; i++) {
        outputDiv.innerHTML += 
            `<h2>Planet: ${data.results[i].name}</h2>
            <p>Rotation length: ${data.results[i].rotation_period}</p>
            <p>Rotation length: ${data.results[i].orbital_period}</p>
            <p>Climate: ${data.results[i].climate}</p>
            <p>Diameter of planet: ${data.results[i].diameter}</p>
            <p>Level of gravity: ${data.results[i].gravity}</p><br>
            `
        }
    })
    .catch( error => console.log('There was an error:', error))
},false);


apiPeople.addEventListener('click', () => {
    fetch(peopleAPI)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        outputDiv.innerHTML = '';
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then (data => {
        console.log(data);
        for(let i = 0; i < 10; i++) {
            outputDiv.innerHTML += 
            `<h2>Name: ${data.results[i].name}</h2>
            <p>Hair Color: ${data.results[i].hair_color}</p>
            <p>Eye Color: ${data.results[i].eye_color}</p>
            <p>Gender: ${data.results[i].gender}</p>
            <p>Skin Color: ${data.results[i].skin_color}</p>
            <p>Mass: ${data.results[i].mass}</p><br>
            `
        }
    })
        //shows the next page
        //outputDiv.innerHTML = `${document.querySelector('a').setAttribute('href', data.next )}`}) 
//      .then( data => {   
 
// })
    .catch( error => console.log('There was an error:', error))
},false);

apiShips.addEventListener('click', () => {
    fetch(shipAPI)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        outputDiv.innerHTML = '';
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then (data => {
        console.log(data);
        document.querySelector("button.next").setAttribute('href', data.next);
        for(let i = 0; i < 10; i++) {
        outputDiv.innerHTML += 
        `<h1>Ship Name: ${data.results[i].name}</h1>
        <p>Model: ${data.results[i].model}</p>
        <p>Manufacturer: ${data.results[i].manufacturer}</p>
        <p>Crew size: ${data.results[i].crew}</p>
        <p>Length of vessel: ${data.results[i].length}</p>
        <p>Passengers: ${data.results[i].passengers}</p>
        <p>Max atmosphering Speed: ${data.results[i].max_atmosphering_speed}</p>
        `
    }
    })
    .catch( error => console.log('There was an error:', error))
},false);
