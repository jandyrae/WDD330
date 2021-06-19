const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
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
const pollutionAPI = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=34.6017&lon=-118.231&appid=cec6688f1b2e49611b637187174f926d';
// example of pollution api lat=34.6017&lon=-118.231
// ( Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.)
// {
//     "coord":{"lon":-118.231,"lat":34.6017},
//     "list":[{"main":{"aqi":3},"components":{"co":178.58,"no":0.02,"no2":1.39,"o3":123.02,"so2":1.36,"pm2_5":6.86,"pm10":9.36,"nh3":0.17},
//     "dt":1622948400}]
// }
// zipcodeapi.com/API information
const zipToGpsApi = 'NsqYjsy8MHODlZlMYVwE5QxH1kztrt4oO74XnoshCAK1HzQOXZXe61O98x8OyDkY';
const zipToGps = 'https://www.zipcodeapi.com/rest/' + zipToGpsApi + '/info.json/' + '93536' + 'degrees'; 
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
        .then(data => outputDiv.innerText =
            "Getting weather conditions for global position " +
            data.coord.lon + " longitude and " + data.coord.lat + " latitude  \n" +
            " Temp in Farenheit " + data.main.temp + " \nand feels like " + data.main.feels_like +
            " \n Barometric pressure of " + data.main.pressure + " with humidity at " + data.main.humidity +
            " \n Current visibility " + data.visibility + " and wind speed in MPH " + data.wind.speed
        )
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
        .then(data => outputDiv.innerText =
            "Getting Air Quality conditions for global position \n" + data.coord.lon + 
            " longitude and " + data.coord.lat + " latitude  \n" + 
            " Air Quality value: " + data.list[0].main.aqi + 
            '\n Carbon Monoxide: ' + data.list[0].components.co +
            '\n Nitrogen monoxide: ' + data.list[0].components.no +
            '\n Nitrogen dioxide: ' + data.list[0].components.no2 +
            '\n Ozone: ' + data.list[0].components.o3 +
            '\n Sulphur dioxide: ' + data.list[0].components.so2 +
            '\n Ammonia: ' + data.list[0].components.nh3 
        )
        .catch(error => console.log('There was an error:', error))
}, false);

// to give a day name to the date
const weekDay = function () {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    return {
        name(number) {
            return names[number];
        },
        //   number(name) { return names.indexOf(name); }
    };
}();


// when the data was pulled
let dateTime = new Date();
document.getElementById('dateTime').innerHTML = "At Last Sync: " + dateTime.getDate() + "/" +
    (dateTime.getMonth() + 1) + "/" +
    dateTime.getFullYear() + " @ " +
    dateTime.getHours() + ":" +
    dateTime.getMinutes() + ":" +
    dateTime.getSeconds();


