var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submitBtn');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = '1881b8eda2e35046f5f67e0754cd9482';

function convertion(val) {
    return (val - 273).toFixed(2); // Changed toFixed value to 2 for Celsius display
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} °C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => {
            city.innerHTML = ''; // Clear previous data if there was an error
            temp.innerHTML = '';
            description.innerHTML = '';
            wind.innerHTML = 'Error: Please enter a valid city name'; // Show error message
        });
});
var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submitBtn');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = '1881b8eda2e35046f5f67e0754cd9482';

function convertion(val) {
    return (val - 273).toFixed(2); // Changed toFixed value to 2 for Celsius display
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} °C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => {
            city.innerHTML = ''; // Clear previous data if there was an error
            temp.innerHTML = '';
            description.innerHTML = '';
            wind.innerHTML = 'Error: Please enter a valid city name'; // Show error message
        });
});
