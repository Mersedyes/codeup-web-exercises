geocode('San Antonio', mapboxtoken).then(function (result){
    console.log(result);
    mapboxgl.accessToken = mapboxtoken;

    var map = new mapboxgl.Map ({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 15,
        center: ([,])
    });

    var markerProperties = {
        color = 'blue',
        draggable: true
    };

    var marker = new mapboxgl.Marker(markerProperties)
        .setLngLat([,])
        .addTo(map);

    map.on('click', function (){
        var popup = new mapboxgl.Popup()
            .setHTML("<h1>CodeUp is Legit</h1>")
            .addTo(map);

        marker.setPopup(popup);
    });
});