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

const pollutionAPI = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=34.6017&lon=-118.231&appid=cec6688f1b2e49611b637187174f926d';
// example of pollution api lat=34.6017&lon=-118.231
// ( Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.)
// {
//     "coord":{"lon":-118.231,"lat":34.6017},
//     "list":[{"main":{"aqi":3},"components":{"co":178.58,"no":0.02,"no2":1.39,"o3":123.02,"so2":1.36,"pm2_5":6.86,"pm10":9.36,"nh3":0.17},
//     "dt":1622948400}]
// }
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=';
const forecastAPI = ',us&units=imperial&cnt=3&appid=cec6688f1b2e49611b637187174f926d';

// zipcodeapi.com/API information
let zip = parseInt(document.getElementById('zipCode').value);
let zipCode = document.getElementById('zipCode');
// const zipToGpsApi = 'NsqYjsy8MHODlZlMYVwE5QxH1kztrt4oO74XnoshCAK1HzQOXZXe61O98x8OyDkY';
const zipToGpsApi = 'js-xH3XF4hARHyUnFDIq9KgevWHvzEeGnUs2EhJUapVQ7rxZ8M8y8yBs2azl9VDayr8'; //cors
const zipToGps = 'https://www.zipcodeapi.com/rest/' + zipToGpsApi + '/info.json/' + zip + 'degrees';
//     "zip_code": "93536",
//     "lat": 34.747368,
//     "lng": -118.369063,
//     "city": "Lancaster",
//     "state": "CA",
//     "timezone": {
//         "timezone_identifier": "America/Los_Angeles",
//         "timezone_abbr": "PDT",
//         "utc_offset_sec": -25200,
//         "is_dst": "T"
//     },
//     "acceptable_city_names": [{
//             "city": "Del Sur",
//             "state": "CA"
//         },
//         {
//             "city": "Fairmont",
//             "state": "CA"
//         },
//         {
//             "city": "Metler Valley",
//             "state": "CA"
//         },
//         {
//             "city": "Neenach",
//             "state": "CA"
//         },
//         {
//             "city": "Quartz Hill",
//             "state": "CA"
//         }
//     ],
//     "area_codes": [
//         661
//     ]
// }

// DOM
const apiWeather = document.getElementById('weather');
const apiAirQuality = document.getElementById('air');
const outputDiv = document.getElementById('output');
const apiForecast = document.getElementById('forecast');


// for zip code to gps coordinates
zipCode.addEventListener('input', () =>{
WindowOrWorkerGlobalScope.fetch(zipToGps)
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
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        console.log(lat,lon);
        // outputDiv.innerHTML =
        // `<h2> Given Coordinates in GPS ${lat} ${lon}</h2>`;
    })
    .catch(error => console.log('There was an error:', error));
})

// zipCode();
// listener for weather call
apiWeather.addEventListener('click', () => {
    let zip = parseInt(document.getElementById('zipCode').value);
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
            let output = '<h2 class="mb-4">Weather</h2>';
            outputDiv.innerHTML = output +=
                `<h3>Getting weather conditions for: </h3>
            <ul>
            <li> <b>${ data.name} </b></li>
            <li>Weather Description: <b>${ data.weather[0].description} </b></li>
            <li>Temp in Farenheit ${ data.main.temp } and feels like  ${ data.main.feels_like} </li>
            <li>Barometric pressure of ${ data.main.pressure} with humidity at  ${ data.main.humidity }% </li>
            <li>Current visibility ${ data.visibility}  and wind speed  ${ data.wind.speed} MPH</li>
            `
        })
        .catch(error => console.log('There was an error:', error))
}, false);

// listener for air quality call
apiAirQuality.addEventListener('click', () => {
    fetch(pollutionAPI)
        .then(console.log(pollutionAPI))
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Air Quality</h2>';
            outputDiv.innerHTML = output +=
                `<h3>Getting Air Quality conditions for global position: </h3>
            <ul>${ data.coord.lon } longitude and ${ data.coord.lat } latitude
            <li>Air Quality value:  ${data.list[0].main.aqi }</li>
            <li><i>( 1 = Good,  2 = Fair,  3 = Moderate,  4 = Poor,  5 = Very Poor )</i></li>
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
    let zip = parseInt(document.getElementById('zipCode').value);
    var d = new Date();
    fetch(forecastURL + zip + forecastAPI)
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
            let output = '<h2 class="mb-4">Forecast</h2>';
            document.getElementById('output').innerHTML = output += `
            <ul>
            <h3>City: ${data.city.name}</h3>
            <li></li>
            <li>${data.list[0].main.temp} degrees Fahrenheit</li>
            <li>Minimum Temperature: ${data.list[0].main.temp_min} degrees Fahrenheit</li>
            <li>Maximum Temperature: ${data.list[0].main.temp_max} degrees Fahrenheit</li>
            <li>Temperature Feels Like: ${data.list[0].main.feels_like} degrees Fahrenheit</li>
            <li>Description: ${data.list[0].weather[0].description} </li>
            <li>Wind: ${data.list[0].wind.speed} miles per hour </li>
            <li>Sunrise: ${new Date(data.city.sunrise*1000).toLocaleString()}</li>  
            <li>Sunset: ${new Date(data.city.sunset*1000).toLocaleString()}</li>
            </ul>
            `
        })
        // document.getElementById('output').innerHTML = output;})
        .catch(error => console.log('There was an error:', error))
}, false);

// when the data was pulled
let dateTime = new Date();
document.getElementById('dateTime').innerHTML = "At Last Sync: " + (dateTime.getMonth() + 1) + "/" +
    dateTime.getDate() + "/" +
    dateTime.getFullYear() + " @ " +
    dateTime.getHours() + ":" +
    dateTime.getMinutes() + ":" +
    dateTime.getSeconds();