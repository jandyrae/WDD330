import {
    getLocation,
    lat,
    lon
} from './location.js';

let latitude, longitude, zip, icon;


getLocation('output'); // run the function that gives us values for lat and lon to be used here
console.log(lat, lon); // TODO shows undefined, fix

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const weatherAPI = ',us&units=imperial&APPID=cec6688f1b2e49611b637187174f926d';
// My API key is cec6688f1b2e49611b637187174f926d
// - API documentation https://openweathermap.org/api
// {
// "coord":{"lon":-0.1257,"lat":51.5085},
// "weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],
// "base":"stations",
// "main":{"temp":290.27,"feels_like":290.28,"temp_min":288.07,"temp_max":291.13,"pressure":1016,"humidity":86},
// "visibility":10000,
// "wind":{"speed":2.02,"deg":237,"gust":5.62},
// "clouds":{"all":22},
// "dt":1622688920,
// "sys":{"type":2,"id":2019646,"country":"GB","sunrise":1622692055,"sunset":1622751006},
// "timezone":3600,"id":2643743,"name":"London","cod":200
// }

const pollutionAPI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=cec6688f1b2e49611b637187174f926d`;
// example of pollution api lat=34.601&lon=-118.231
// ( Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.)
// {
//     "coord":{"lon":-118.231,"lat":34.6017},
//     "list":[{"main":{"aqi":3},"components":{"co":178.58,"no":0.02,"no2":1.39,"o3":123.02,"so2":1.36,"pm2_5":6.86,"pm10":9.36,"nh3":0.17},
//     "dt":1622948400}]
// }
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=';
const forecastAPI = ',us&units=imperial&cnt=5&appid=cec6688f1b2e49611b637187174f926d';
// 

const oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=cec6688f1b2e49611b637187174f926d`;

// const oneCallAPI = `&exclude=minutely&appid=cec6688f1b2e49611b637187174f926d`;
const oneCallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=34.601&lon=-118.231&units=imperial&exclude=minutely&appid=cec6688f1b2e49611b637187174f926d';

// DOM
const apiWeather = document.getElementById('weather');
const apiAirQuality = document.getElementById('air');
const outputDiv = document.getElementById('output');
const apiForecast = document.getElementById('forecast');
const UVindex = document.getElementById('uv');
const forecastOutput = document.getElementById('forecastOutput');

let zipInput = document.getElementById('zipCode');




// for uv info from the onecall url
UVindex.addEventListener('click', () => {
    zip = parseInt(document.getElementById('zipCode').value);
    // const onecall = oneCallURL + oneCallAPI;
    fetch(oneCallURL) // onecall if i can get gps to load
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            let output = '<h2 class="mb-4">Sun Conditions: </h2>';
            outputDiv.innerHTML = output +=
                `<ul>
            <li>Currently <b>${data.current.temp}°F</b></li>
            <li>UV Index <b>${data.current.uvi} </b></li>
            <li>Cloud Covering <b>${data.current.clouds}% of sky</b></li>
            <li> <b>${data.current.weather[0].description} </b></li>
            <div id='icon'>${data.current.weather[0].icon}</div>
            `;
            icon = data.current.weather[0].icon;
        
        return fetch(`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`)}) 
        .then(response => {
            // outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
    
        .then(response => response.blob())
        .then((img) => document.getElementById('icon').src = URL.createObjectURL(img))
        .catch(error => console.log('There was an error:', error));
})


// listener for weather call
apiWeather.addEventListener('click', () => {
    zip = parseInt(document.getElementById('zipCode').value);
    fetch(weatherURL + zip + weatherAPI)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            let output = '<h2 class="mb-4">Weather</h2>';
            outputDiv.innerHTML = output +=
                `<h3>Getting weather conditions for: </h3>
            <ul>
            <li> <b>${ data.name} </b></li>
            <li>Weather Description: <b>${ data.weather[0].description} </b></li>
            <li><b>${ data.main.temp }°F and feels like  ${ data.main.feels_like}°F </b></li>
            <li>Barometric pressure of <b>${ data.main.pressure} with humidity at  ${ data.main.humidity }% </b></li>
            <li>Current visibility <b>${ data.visibility}  and wind speed  ${ data.wind.speed} MPH</b></li>
            `
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=cec6688f1b2e49611b637187174f926d`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                })
        })
        .catch(error => console.log('There was an error:', error))
}, false);

// listener for air quality call
apiAirQuality.addEventListener('click', () => {
    zip = parseInt(document.getElementById('zipCode').value);
    fetch(weatherURL + zip + weatherAPI)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            return fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=cec6688f1b2e49611b637187174f926d`)
                .then(console.log(pollutionAPI))
                .then(response => {
                    outputDiv.innerHTML = 'Waiting for response...';
                    if (response.ok) {
                        return response;
                    }
                    throw Error(response.statusText);
                })
        })
        .then(response => response.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Air Quality</h2>';
            outputDiv.innerHTML = output +=
                `<h3>Air Quality conditions</h3>
            <ul>
            <li>Air Quality Index: <b> ${data.list[0].main.aqi }</b></li>
            <li style="color:blue";>
            <ul><i>
            <li>1 = Good</li>   
            <li>2 = Fair</li>   
            <li>3 = Moderate</li>   
            <li>4 = Poor</li>  
            <li>5 = Very Poor</li>
            </i></ul>
            <li>Carbon Monoxide: ${ data.list[0].components.co }</li>
            <li>Nitrogen monoxide: ${ data.list[0].components.no }</li>
            <li>Nitrogen dioxide: ${ data.list[0].components.no2}</li>
            <li>Ozone: ${data.list[0].components.o3}</li>
            <li>Sulphur dioxide: ${ data.list[0].components.so2 }</li>
            <li>Ammonia: ${data.list[0].components.nh3}</li>
            </ul>`
        })
        .catch(error => console.log('There was an error:', error))
}, false);

// listener for forecast call
apiForecast.addEventListener('click', () => {
    zip = parseInt(document.getElementById('zipCode').value);
    fetch(forecastURL + zip + forecastAPI)
        .then(response => {
            // outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())

        .then((data) => { //need to do a for each or something here or  for i in...
            console.log(data);
            let output = '<h2 class="mb-4">Forecast</h2>';
            forecastOutput.innerHTML = output += `
            <ul>
            <h3>City: ${data.city.name}</h3>
            <li></li>
            <li>Sunrise: ${new Date(data.city.sunrise*1000).toLocaleString()}</li>  
            <li>Sunset: ${new Date(data.city.sunset*1000).toLocaleString()}</li>
            </ul>
        `;
        // let forecastList = document.getElementById('forecastOutput').innerHTML;
            for (let i = 0; i < 5; i++) {
                outputDiv.innerHTML += `
            <div class='forecast'>
            <ul>
            <li><b>${new Date(data.list[i].dt*1000).toLocaleString()}</b></li>
            <li>${data.list[i].main.temp}°F</li>
            <li>Min Temp: ${data.list[i].main.temp_min}°F</li>
            <li>Max Temp: ${data.list[i].main.temp_max}°F</li>
            <li>Feels Like: ${data.list[i].main.feels_like}°F</li>
            <li>Description: ${data.list[i].weather[0].description} </li>
            <li>Wind: ${data.list[i].wind.speed}mph </li>
            </ul>
            <hr>
            </div>
            `;
            }
        })
        .catch(error => console.log('There was an error:', error))
}, false);


// when the data was pulled
let dateTime = new Date();
document.getElementById('dateTime').innerHTML =
    "At Last Update: " + (dateTime.getMonth() + 1) + "/" +
    dateTime.getDate() + "/" +
    dateTime.getFullYear() + " at " +
    dateTime.toLocaleTimeString();


// checks zip code for numeric and undefined values then gives feedback
zipInput.addEventListener('input', () => {
    const regex = (/\d{5}/g);
    let zip = document.getElementById('zipCode').value;
    if (zip != 'undefined' && regex.test(zip)) {
        console.log('passed');
        document.getElementById('zipCheck').innerHTML =
            `<p style="color:green";><i>Zip Code Received</i></p>`;
    } else {
        console.log('failed');
        document.getElementById('zipCheck').innerHTML =
            `<p style="color:red";><i>Zip Code Invalid - must be 5 numbers</i></p>`;
    }
})


// catchImage()
// .then(response => {
//     console.log('show image');
// })
// .catch(error => {
//     console.log('image error!');
//     console.error(error);
// });

// async function catchImage() {
//     const response = await fetch('https://openweathermap.org/img/wn/10d@2x.png');
//     const blob = await response.blob();
//     document.getElementById('image').src = URL.createObjectURL(blob);
// }