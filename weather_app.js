document.addEventListener('DOMContentLoaded', function () {
    const timeE1 = document.getElementById('time');
    //console.log(timeE1);

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
    //const API_Key = 'OWM_Key'; //exposed my keys, need to fix

//need to update date and time
//create function
    setInterval(function () {
        const time = new Date();
        // console.log(time.toDateString());
        // console.log(time.toLocaleTimeString());
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
        const hour = time.getHours();
        const hoursIn24HrFormat = hour >= 13 ? hour % 12 : hour
        const mins = time.getMinutes();
        //console.log(mins);
        const ampm = hour >= 12 ? 'PM' : 'AM'
        // console.log(timeE1);

        //not working need to understand why
        timeE1.innerHTML = hoursIn24HrFormat + ':' + mins + ' ' + `<span id="am-pm">${ampm}</span>`;//typeerror: cannot set properties of null (setting 'innerHTML')
        //not working need to understand why
        dateE1.innerHTML = days[day] + ', ' + date + ' ' + months[month];
    }, 1000); //call the function every second
    getWeatherData();
})

//language=HTML
function buildWeatherCard() {
    let day = 'Monday'
    return `
        <div class="today" id="current-temp">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${day}</div>
                <div class="temp">Night - 25.6&#176; C</div>
                <div class="temp">Day - 35.6&#176; C</div>
            </div>
        </div>`
}



//call the API
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${OWM_Key}`).then(res => res.json()).then(data => {
            console.log(data);
            showWeatherData(data);
        })
    })
}

// function getForecastData (){
//
// }

function showWeatherData(data) {
    //console.log(data)
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;
    currentWeatherItemsE1.innerHTML =
}//this is not working