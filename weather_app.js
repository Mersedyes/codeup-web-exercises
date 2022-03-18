const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');

//needed to create an array for the date
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

//open weather app
const API_Key = '6f8469087eee47719da53a754e47ecdb';

//need to update date and time
//create function
setInterval(function () {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn24HrFormat = hour >= 13 ? hour %12: hour
    const mins = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    //not working need to understand why
    timeE1.innerHTML = hoursIn24HrFormat + ':' + mins + ' ' + `<span id="am-pm">${ampm}</span>`;//typeerror: cannot set properties of null (setting 'innerHTML')
    //not working need to understand why
    dateE1.innerHTML = days[day] + ', ' +date+ ' ' + months[month];
}, 1000); //call the function every second

//call the API
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => (
        console.log(success) //got error: malformed arrow function parameter list

    let {lat, lon} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_Key}`).then(res => res.json()).then(data => {
            console.log(data)
            showWeatherData(data);
        })
))
}

function showWeatherData(data)//this is not working