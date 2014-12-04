/*jslint browser: true*/

(function (window, document, undefined) {
    'use strict';

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.setClearColorHex(0x333F47, 1);

    // Create a light, set its position, and add it to the scene.
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    var loader = new THREE.JSONLoader();
    loader.load( 'images/beci.json', function(geometry){
      var material = new THREE.MeshLambertMaterial({color: 0x55B663});
      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });

    camera.position.z = 5;

    function render() {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
    }
    render();
}(window, document));
