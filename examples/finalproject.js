const apiurl = 'http://api.openweathermap.org/data/2.5/weather?zip=93551,us&units=imperial&APPID=cec6688f1b2e49611b637187174f926d';
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

const apiButton = document.getElementById('weather');
const outputDiv = document.getElementById('output');

apiButton.addEventListener('click', () => {
    fetch(apiurl)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => outputDiv.innerText =
            "Getting weather conditions for global position "
            + data.coord.lon + " longitude and " + data.coord.lat + " latitude  \n" +
            " Temp in Farenheit " + data.main.temp + " and feels like " + data.main.feels_like +
            " \n Barometric pressure of " + data.main.pressure + " with humidity at " + data.main.humidity +
            " \n Current visibility " + data.visibility + " and wind speed in MPH " + data.wind.speed
        )
        .catch(error => console.log('There was an error:', error))
}, false);
// to give a day name to the date
const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];
    return {
      name(number) { return names[number]; },
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