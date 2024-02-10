function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 16.4975497, lng: 80.6336611};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vijayawada , INA' // Title Location
    });
}