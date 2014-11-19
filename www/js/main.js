

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    try {
        if (navigator.geolocation !== null) {
            var options = { timeout: 100, maximumAge: 11000, enableHighAccuracy: true};
            navigator.geolocation.watchPosition(sucessGeo, failGeo, options);
        }
    } catch (e) {
        //alert(e.message); // une erreur est survenu
    }

    try {
        //hide splash screen
        navigator.splashscreen.hide(); 
    } catch (e) {}
}

function sucessGeo(position){
    //console.log('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
}

function failGeo(){
    // erreur de GeoLoc
}


