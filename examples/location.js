export var lat, lon;

let note;

export function getLocation() {
    note = document.getElementById('output');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        note.innerHTML = "Geolocation is not supported.";
    }
}

function showPosition(position) {
    lat = Number(position.coords.latitude).toFixed(3);
    lon = Number(position.coords.longitude).toFixed(3);
    console.log(lat, lon);
    note.innerHTML = `<p>The coordinates of ${lat} and ${lon} are received from the browser</p>`;
   
}



// catchImage()
// .then(response => {
//         console.log('show image');
// })
// .catch(error => {
//     console.log('error!');
//     console.error(error);
// });

// async function catchImage() {
//     const response = await fetch('https://openweathermap.org/img/wn/10d@2x.png');
//     const blob = await response.blob();
//     document.getElementById('image').src = URL.createObjectURL(blob);
// }


// https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png
// for (let i = 0; count < 5; i++) {
//       let obj = jsObject.list[i];
//       if (obj.dt_txt.includes("18:00:00")) {
//         count++;
