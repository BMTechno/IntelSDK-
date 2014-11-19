function sendData(inputData){
    alert('Will write');
    //$.post( "http://tokengeoloc.azurewebsites.net/writeFile.php", inputData)
    //  .done(function( data ) {
    //    alert( "Data Loaded: " + data );
    //});
    
    var url = "http://tokengeoloc.azurewebsites.net/writeFile.php";
    var fileName = "data.txt";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST",url,true);
    xmlhttp.send("D="+inputData+'&F='+fileName);
    alert("done");
}
