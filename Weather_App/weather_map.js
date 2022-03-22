"use strict";

let weatherInfo = [];

// OpenWeatherMaps API KEY
//let Weather_Map_Key = OWM_Key;

// Mapbox API KEY
mapboxgl.accessToken = MAP_Key;
let map;
//setupMap()

// Mapbox API //

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function successLocation(position) {
    console.log("success call");
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    console.log("we got issues");
    setupMap([133.7751, 25.2744]);
}

function setupMap(center) {
    map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/satellite-v9",
        center: [-96.7970, 32.7767],
        zoom: 13,
    });
    console.log(map);

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");

    // Mapbox GL Geocoder //

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: false,
        }).on("result", (selected) => {
            const [longitude, latitude] = selected.result.geometry.coordinates;

            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${OWM_Key}`
            )
                .then((res) => res.json())
                .then((data) => weatherInfo.push(data));

            // Set marker options.

            setTimeout(() => {
                const marker = new mapboxgl.Marker({
                    //color: "#FFFFFF",
                    draggable: true,
                    color: "teal",
                    scale: 1.5,
                })
                    .setLngLat([longitude, latitude])
                    .setPopup(
                        new mapboxgl.Popup().setHTML(`
              <h3>${weatherInfo[0].name}</h3>
              <img src="http://openweathermap.org/img/w/${weatherInfo[0].weather[0].icon}.png"></img>
              <h3>${weatherInfo[0].main.temp}°F</h3>
              <h3>${weatherInfo[0].weather[0].description}</h3>
              `)
                    )
                    .addTo(map);
                        // console.log(latitude)
                    getWeatherData(latitude, longitude);
                if ((weatherInfo.length = 0)) {
                    window.location.reload(true);
                }
            }, 1250);
        })
    );
}