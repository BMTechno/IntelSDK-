
var rawData = new Array();

function sucessGeo(position){
    var p = document.getElementById("logs");
    p.textContent = "output : ";
    
    var log = 'Latitude: ' + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          /* 'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' + 
          'Heading: '           + position.coords.heading           + '\n' + */
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n';
    
    p.textContent += log;
    

    rawData.push(position);
    console.log(JSON.stringify(rawData));
}

function failGeo(e){
    // erreur de GeoLoc
    console.log(e);
}
/*________________________________________________________________________________________________*/
function switchFunction(){
    console.log("click");
    var bt = $("#monboutton");
    if(bt.attr("data-state") == "start"){
        startFunction();
        bt.attr("data-state", "stop");
        bt.removeClass("btn-success");
        bt.addClass("btn-danger");
    }else{
        stopFunction();
        bt.attr("data-state", "start");
        bt.removeClass("btn-danger");
        bt.addClass("btn-success");
    }
}
/*________________________________________________________________________________________________*/
var watchID = null;

function startFunction(){
    try {
        if (navigator.geolocation !== null && watchID == null) {
            console.log("stratGeoLoc");
            var options = { timeout: 10000, maximumAge: 3000, enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(sucessGeo, failGeo, options);   
    }
    } catch (e) {
        console(e.message); // Une erreur est survenu
    }
}
/*________________________________________________________________________________________________*/ 

function stopFunction(){
         console.log("stopFunction");
         navigator.geolocation.clearWatch(watchID);
         watchID = null;
         console.log("L'enregistrement est terminee"); // L'enregistrement est terminee
}
///////////////////////////////////////////////////////////////////////////////////////////////////
function build3DPrint(){
     /// Build 3D cube with geometry object // need Three.js
    geometry = new THREE.BoxGeometry( 100, 100, 100 );
    //geometry.
    var link = document.createElement("a");
    link.textContent = "Download your Printable object File";
    saveSTL(geometry, link);
    document.body.appendChild(link);   
}


function onDeviceReady() {
    console.log("deviceready");    
    try {
        //hide splash screen
        navigator.splashscreen.hide();
    } catch (e) {}
    ///
    build3DPrint();
    //
    init();
    animate();
    //
    buildObject();
}

document.addEventListener("deviceready", onDeviceReady, false);