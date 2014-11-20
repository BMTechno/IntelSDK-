var container, stats;
var camera, scene, raycaster, renderer;
//var plane;

var mouse = new THREE.Vector2();
var radius = 500, theta = 0;



function buildObject(data){
    var geometry = new THREE.BoxGeometry( 20, 20, 20 );
    var posCube = {x:0, y:0};
    
    for ( var i = 0; i < 200; i ++ ) {

        var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

        posCube.x += 20;
        if(posCube.x > 200){
            posCube.x = 0;
            posCube.y += 20;
        }
        
        object.position.x = posCube.x;
        object.position.y = posCube.y;
        //object.position.z = Math.random() * 800 - 400;

        /*
        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;
        */

        //object.scale.x = Math.random() + 0.5;
        //object.scale.y = Math.random() + 0.5;
        var scaleZ = Math.random() + 0.5;
        object.scale.z = scaleZ;
        object.position.z += scaleZ/2;

        scene.add( object );

    }
}



function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );

    scene = new THREE.Scene();

    var light = new THREE.DirectionalLight( 0xffffff, 2 );
    light.position.set( 1, 1, 1 ).normalize();
    scene.add( light );
    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( "rgb(71,71,71)" );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.sortObjects = false;
    container.appendChild(renderer.domElement);

    /*
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    container.appendChild( stats.domElement );
    */

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

//

function animate() {
    requestAnimationFrame( animate );
    render();
    //stats.update();
}

function render() {
    theta += 0.1;

    camera.position.x = radius * mouse.x;
    camera.position.y = radius * mouse.y;
    camera.position.z = radius * Math.cos( mouse.x /2 );
    camera.lookAt( scene.position );

    renderer.render( scene, camera );
    

}