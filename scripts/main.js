!function(e,n){"use strict";function i(){requestAnimationFrame(i),o.render(r,t)}var r=new THREE.Scene,t=new THREE.PerspectiveCamera(75,e.innerWidth/e.innerHeight,.1,1e3),o=new THREE.WebGLRenderer;o.setSize(e.innerWidth,e.innerHeight),n.body.appendChild(o.domElement),o.setClearColorHex(3358535,1);var a=new THREE.PointLight(16777215);a.position.set(-100,200,100),r.add(a);var d=new THREE.JSONLoader;d.load("images/beci.json",function(e){var n=new THREE.MeshLambertMaterial({color:5617251}),i=new THREE.Mesh(e,n);r.add(i)}),t.position.z=5,i()}(window,document);