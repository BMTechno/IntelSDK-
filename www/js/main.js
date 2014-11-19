

function sucessGeo(position, f, op){
    var p = document.getElementById("logs");
    p.textContent = "output : ";
    
    var log = 'Latitude: ' + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n';
    
    p.textContent += log;
    console.log(log);

}

function failGeo(e){
    // erreur de GeoLoc
    console.log(e);
}

/*________________________________________________________________________________________________*/
var watchID = null;

function startFunction(){
try {
        if (navigator.geolocation !== null && watchID == null) {
            console.log("stratGeoLoc");
            var options = { timeout: 100, maximumAge: 5000, enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(sucessGeo, failGeo, options);
        }
    } catch (e) {
        console(e.message); // Une erreur est survenu
    }
}
/*________________________________________________________________________________________________*/ 

function stopFunction(){
         alert("stopFunction");
         navigator.geolocation.clearWatch(watchID);
         watchID = null;
         console.log("L'enregistrement est terminee"); // L'enregistrement est terminee
}

/////////////////////////////////////////////////////////////
function onDeviceReady() {
    console.log("deviceready");
    
    try {
        //hide splash screen
        navigator.splashscreen.hide(); 
    } catch (e) {}
}

document.addEventListener("deviceready", onDeviceReady, false);