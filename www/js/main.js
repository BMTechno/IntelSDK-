

function sucessGeo(position, f, op){
    console.log('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');

}

function failGeo(e){
    // erreur de GeoLoc
    console.log(e);
}

function startFunction(){
    alert("startFunction")
}


/////////////////////////////////////////////////////////////
function onDeviceReady() {
    console.log("deviceready");
    try {
        if (navigator.geolocation !== null) {
            console.log("navigator.geolocation !== null");
            var options = { timeout: 100, maximumAge: 11000, enableHighAccuracy: true };
            navigator.geolocation.watchPosition(sucessGeo, failGeo, options);
        }
    } catch (e) {
        console(e.message); // une erreur est survenu
    }
    sendData("test de push Data");
    try {
        //hide splash screen
        navigator.splashscreen.hide(); 
    } catch (e) {}
}

document.addEventListener("deviceready", onDeviceReady, false);