document.addEventListener('DOMContentLoaded', function () {
    const timeE1 = document.getElementById('time');
    //console.log(timeE1);

    const dateE1 = document.getElementById('date');


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
        console.log(time.toLocaleTimeString());
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
        const hour = time.getHours();
        const hoursIn24HrFormat = hour >= 13 ? hour % 12 : hour
        const mins = time.getMinutes();
        //console.log(mins);
        const ampm = hour >= 12 ? 'PM' : 'AM'
        // console.log(timeE1);

        //got ride of he issue when min was less than 10
        //timeEl.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`
       timeE1.innerText = time.toLocaleTimeString()
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
                <div class="temp">Night - 25.6&#176; F</div>
                <div class="temp">Day - 35.6&#176; F</div>
            </div>
        </div>`
}


//call the API
function getWeatherData(latitude, longitude) {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        //let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${OWM_Key}`).then(res => res.json()).then(data => {
            console.log(data);
            showWeatherData(data);
        })
    })
}

function showWeatherData(data) {
    //console.log(data)
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;
    const timeZone = document.getElementById('time-zone');
    const countryE1 = document.getElementById('country');

    timeZone.innerHTML = data.timezone;
    countryE1.innerHTML = data.lat + 'N ' + data.lon + 'E'

    const currentWeatherItemsE1 = document.getElementById('current-weather-items');
    const weatherForecastE1 = document.getElementById('weather-forecast');
    const currentTempE1 = document.getElementById('current-temp');

    currentWeatherItemsE1.innerHTML = `
    <div class="row justify-content-center">
                 <div class="weather-item col-2">
                    <div><strong>Humidity</strong></div>
                    <div>${humidity}%</div>
                </div>
                <div class="weather-item col-2">
                    <div><strong>Pressure</strong></div>
                    <div>${pressure} mb</div>
                </div>
                <div class="weather-item col-2">
                    <div><strong>Wind Speed</strong></div>
                    <div>${wind_speed} m/s</div>
                </div>
                
                <div class="weather-item col-2">
                      <div><strong>Sunrise</strong></div>
                    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
                </div>
                <div class="weather-item col-2">
                    <div><strong>Sunset</strong></div>
                    <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
                </div>
                </div>
                 `;
//rendering API data in site THIS IS NOT WORKING
    let otherDayForecast = '';
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempE1.innerHTML = `
             <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;F</div>
                <div class="temp">Day - ${day.temp.day}&#176;F</div>
            </div>
            
            `
        } else {
            otherDayForecast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;F</div>
                <div class="temp">Day - ${day.temp.day}&#176;F</div>
            </div>
            `
        }
        weatherForecastE1.innerHTML = otherDayForecast;
    })
}


