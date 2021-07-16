import {
    dtUpdate,
    getLocation,
    inputCheck,
    windDirection
} from './location.js';

// global variables
let latitude, longitude, zip;

// URLs for api calls
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const weatherAPI = `,us&units=imperial&APPID=cec6688f1b2e49611b637187174f926d`;

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=';
const forecastAPI = ',us&units=imperial&cnt=5&appid=cec6688f1b2e49611b637187174f926d';
// other api's called in fetch because they required the gps coordinates returned by the zip entry

// DOM - buttons
const apiWeather = document.getElementById('weather');
const apiAirQuality = document.getElementById('air');
const apiForecast = document.getElementById('forecast');
const UVindex = document.getElementById('uv');

// DOM - output
const outputDiv = document.getElementById('output');
const alertOutput = document.getElementById('weatherAlert');

// DOM - input
let zipInput = document.getElementById('zipCode');
document.getElementById('icon').style.display = 'none';

// (onchange event)information loaded with weather icon and current temp when zip changes
window.addEventListener('change', () => {inputChange()}, false);

// (onclick event) for sun and uv info from the onecall url, but latitude and longitude needed first
UVindex.addEventListener('click', () => {sunSky()}, false);

// (onclick event) listener for weather call
apiWeather.addEventListener('click', () => {weather()}, false);

// (onclick event) listener for air quality call
apiAirQuality.addEventListener('click', () => {airQuality()}, false);

// (onclick event) listener for forecast call
apiForecast.addEventListener('click', () => {forecast()}, false);

// (oninput event) checks zip code for numeric and undefined values then gives feedback
zipInput.addEventListener('input', () => {inputCheck()}, false);


// functions for listeners that handle fetch and display for each button press
function inputChange()  {
    getLocation('output');
    dtUpdate();
    zip = parseInt(document.getElementById('zipCode').value);
    zipInput.focus();
    document.getElementById
    fetch(weatherURL + zip + weatherAPI)
        .then(response => {
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText)
        })
        .then(response => response.json())
        .then((data) => {
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            // console.log(data);
            document.getElementById('tempIcon').setAttribute('alt', data.weather[0].description);
            let dayNight = data.weather[0].icon;
            dayNight.slice(-1);
            if (dayNight.slice(-1) == 'n') {
                document.getElementById('icon').style.backgroundColor = "darkgray";
            }
            outputDiv.innerHTML = `<div id='initialLoad'>${data.main.temp}°F</div>`
            return fetch(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('icon').style.display = 'block';
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.blob())
        .then((img) => {
            document.getElementById('tempIcon').src = URL.createObjectURL(img);
        })
        .catch(error => console.log('There was an error:', error))
}


function weather() {
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
                `<h3>Weather conditions for <b>${data.name}</b>: </h3>
            <ul>
            <li>Weather Description <b>${ data.weather[0].description} </b></li>
            <li>Currently <b>${data.main.temp }°F</b> and feels like <b> ${data.main.feels_like}°F </b></li>
            <li>Barometric pressure of <b>${ data.main.pressure}</b></li>
            <li>Humidity at <b> ${ data.main.humidity }% </b></li>
            <li>Current visibility <b>${ data.visibility}</b></li>
            <li>Wind speed <b> ${ data.wind.speed} MPH</b></li>
            <li>Wind Direction<b> ${windDirection(data.wind.deg)}</b></li></ul>
            `
        })
        .catch(error => console.log('There was an error:', error))
}


function airQuality() {
    zip = parseInt(document.getElementById('zipCode').value);
    fetch(weatherURL + zip + weatherAPI)
        .then(response => {
            outputDiv.innerHTML = '';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            const pollutionAPI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=cec6688f1b2e49611b637187174f926d`;
            return fetch(pollutionAPI)
                .then(console.log(pollutionAPI))
                .then(response => {
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
            <li style="color:blue; text-align:left; padding-left:170px;" >
            <i>
            1 = Good <br> 2 = Fair <br> 3 = Moderate <br> 4 = Poor <br> 5 = Very Poor <br>
            </i></li>
            <li>Carbon Monoxide: ${ data.list[0].components.co }</li>
            <li>Nitrogen monoxide: ${ data.list[0].components.no }</li>
            <li>Nitrogen dioxide: ${ data.list[0].components.no2}</li>
            <li>Ozone: ${data.list[0].components.o3}</li>
            <li>Sulphur dioxide: ${ data.list[0].components.so2 }</li>
            <li>Ammonia: ${data.list[0].components.nh3}</li>
            </ul>`
        })
        .catch(error => console.log('There was an error:', error))
}



function forecast() {
    zip = parseInt(document.getElementById('zipCode').value);
    fetch(forecastURL + zip + forecastAPI)
        .then(response => {
            document.innerHTML = '';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => { 
            // console.log(data);
            let output = '<h2 class="mb-4">Forecast</h2>';
            outputDiv.innerHTML = output += `
            <ul>
            <h3>City: ${data.city.name}</h3>
            <br>
            <li>Sunrise: ${new Date(data.city.sunrise*1000).toLocaleString()}</li>  
            <li>Sunset: ${new Date(data.city.sunset*1000).toLocaleString()}</li>
            <br>
            </ul>
        `;
            // loop through the array 
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
}


function sunSky() {
    zip = parseInt(document.getElementById('zipCode').value);
    fetch(weatherURL + zip + weatherAPI)
        .then(response => {
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText)
        })
        .then(response => response.json())
        .then((data) => {
            latitude = data.coord.lat;
            longitude = data.coord.lon;
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=cec6688f1b2e49611b637187174f926d`)
        }) 
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            if (data.alerts == undefined) {
                alertOutput.innerHTML = `<h2>There are no current alerts for this area.</h2>`
            } else {
                alertOutput.innerHTML = `<h2>${data.alerts[0].description}</h2>`;
            }
            let output = '<h2 class="mb-4">Sun Conditions: </h2>';
            outputDiv.innerHTML = output +=
                `<ul>
            <li>Currently <b>${data.current.temp}°F</b></li>
            <li>UV Index <b>${data.current.uvi} </b></li>
            <li style="color:red; text-align:left; padding-left:170px;">
            <i>1 - 2 = Low <br> 3-5 = Moderate <br> 6-7 = High <br> 8-10 = Very High <br> 11+ = Extreme <br>
            </i></li>
            <li>Cloud Covering <b>${data.current.clouds}% of sky</b></li>
            <li> <b>${data.current.weather[0].description} </b></li>
            `;
        })
        .catch(error => console.log('There was an error:', error));
}
