//essentials
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
controls = new THREE.OrbitControls( camera,renderer.domElement);
scene.add(new THREE.GridHelper(100, 100, 100));
renderer.shadowMap.enabled = true;

//colors
let fireBrick = new THREE.MeshBasicMaterial( {color: 0xB22222} );
let coral = new THREE.MeshBasicMaterial( {color: 0xFF7F50} );
let yellow = new THREE.MeshBasicMaterial( {color: 0xFFFF00} );
let green = new THREE.MeshBasicMaterial( {color: 0x008000} );
let olive = new THREE.MeshBasicMaterial( {color: 0x808000} );
let lightBlue = new THREE.MeshBasicMaterial( {color: 0xADD8E6} );
let navy = new THREE.MeshBasicMaterial( {color: 0x000080} );

//hidden box
let boxGeom = new THREE.BoxBufferGeometry(5,5,5);
let box = new THREE.Mesh(boxGeom, navy);
box.position.set(-10.705,-5.518,-6.145);
box.castShadow = true; 
scene.add(box);

//bridge
let textureWood = new THREE.TextureLoader().load('assets/textures/wood.png', function(texture){
   // repeating the texture
   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
   texture.offset.set( 2, 2 );
   texture.repeat.set( 200, 1 );
   texture.needsUpdate = true;
})
let bridgeGeom = new THREE.CylinderBufferGeometry(50,50,5,90,1,true);
let materialWood = new THREE.MeshLambertMaterial( { map: textureWood })
let bridge = new THREE.Mesh( bridgeGeom, materialWood );
bridge.position.set(-1.431, 46.860, 9.849);
bridge.rotation.z = Math.PI / 2;
bridge.castShadow = true; 
bridge.receiveShadow = true; 
scene.add(bridge);

//near bridge land
const geometryNear =  new THREE.BoxBufferGeometry(30, 3, 10);
let material = new THREE.MeshLambertMaterial( {color: 0x808080, side: THREE.DoubleSide} );
let LandNear = new THREE.Mesh( geometryNear, material);
LandNear.position.set(0.270,0.470,-5.645);
LandNear.castShadow = true; 
LandNear.receiveShadow = true; 
scene.add(LandNear);

//far bridge land
const geometryFar =  new THREE.BoxBufferGeometry(120, 10, 3);
let LandFar = new THREE.Mesh( geometryFar, material );
LandFar.position.set(-2.666,2,10.496);
LandFar.castShadow = true; 
LandFar.receiveShadow = true; 
scene.add(LandFar); 

// red
let redTexture = new THREE.TextureLoader().load('assets/textures/redWall.jpg')
let redmaterial = new THREE.MeshLambertMaterial( {map: redTexture} );

//standing lamp 
let foundationGeom = new THREE.BoxBufferGeometry(1.40,0.09,1.40,1,1,1);
let foundation = new THREE.Mesh(foundationGeom,material);
foundation.position.set(-0.737,-3.033,5.475);
foundation.castShadow = true; 
foundation.receiveShadow = true; 

let lowerShaftGeom = new THREE.CylinderBufferGeometry(0.47,0.87,0.51,4,1);
let lowerShaft = new THREE.Mesh(lowerShaftGeom,redmaterial);
lowerShaft.position.set(-0.737,-3.316,5.460);
lowerShaft.rotation.set(0, Math.PI/4, Math.PI);
lowerShaft.castShadow = true; 
lowerShaft.receiveShadow = true; 


let middleShaftGeom = new THREE.CylinderBufferGeometry(0.32,0.47,0.32,4,1);
let middleShaft = new THREE.Mesh(middleShaftGeom, redmaterial );
middleShaft.position.set(-0.737,-3.713,5.466);
middleShaft.rotation.set( 0, Math.PI/4, Math.PI);
middleShaft.castShadow = true; 
middleShaft.receiveShadow = true; 

let upperShaftGeom = new THREE.CylinderBufferGeometry(0.32,0.32,0.50,4,1);
let upperShaft = new THREE.Mesh(upperShaftGeom, redmaterial);
upperShaft.position.set(-0.737,-4.090,5.458);
upperShaft.rotation.set( 0, Math.PI/4, Math.PI);
upperShaft.castShadow = true; 
upperShaft.receiveShadow = true; 

let lowerLampGeom = new THREE.BoxBufferGeometry(0.61,0.04,0.64,1,1,1);
let lowerLamp = new THREE.Mesh(lowerLampGeom,olive);
lowerLamp.position.set(-0.737,-4.351,5.458);
lowerLamp.rotation.set( 0, 0, Math.PI);
lowerLamp.castShadow = true; 
lowerLamp.receiveShadow = true; 

let lampGeom = new THREE.BoxBufferGeometry(0.49,0.47,0.44,1,1,1);
let lamp = new THREE.Mesh(lampGeom,lightBlue);
lamp.position.set(-0.737,-4.611,5.460);
lamp.rotation.set(0, 0, Math.PI);
lamp.castShadow = true; 
lamp.receiveShadow = true; 

let lampRoofGeom = new THREE.CylinderBufferGeometry(0.33,0.65,0.32,4,1);
let lampRoof = new THREE.Mesh(lampRoofGeom,navy);
lampRoof.position.set(-0.737,-4.988,5.460);
lampRoof.rotation.set(0, Math.PI/4, Math.PI);
lampRoof.castShadow = true; 
lampRoof.receiveShadow = true; 

scene.add(foundation,lowerShaft,middleShaft,upperShaft,lowerLamp,lamp,lampRoof);

//house in the left

let bigBlockGeom = new THREE.BoxBufferGeometry(2.60,2.64,2.47);
let bigBlock = new THREE.Mesh(bigBlockGeom);
bigBlock.position.set(-4.646,-3.267,10.242);

let rightBlockGeom  = new THREE.BoxBufferGeometry(1,3,2.47);
let rightBlock = new THREE.Mesh(rightBlockGeom);
rightBlock.position.set(-2.867,-3.112,10.240);

let upperRightBlockGeom  = new THREE.BoxBufferGeometry(1.60,1,2.47);
let upperRightBlock = new THREE.Mesh(upperRightBlockGeom);
upperRightBlock.position.set(-3.909,-5.075,10.250);

let upperLeftBlockGeom  = new THREE.BoxBufferGeometry(1,1,2.47);
let upperLeftBlock = new THREE.Mesh(upperLeftBlockGeom);
upperLeftBlock.position.set(-5.186,-5.065,10.250);

let roofGeom  = new THREE.CylinderBufferGeometry(0,2.14,1,4,1);
let roof = new THREE.Mesh(roofGeom);
roof.position.set(-4.401,-6.064,10.299);
roof.rotation.set(Math.PI,-Math.PI/4,0);

let sideRoofGeom  = new THREE.PlaneBufferGeometry(1.10,3,1,1);
let sideRoof = new THREE.Mesh(sideRoofGeom,material);
sideRoof.position.set(-2.874, -4.826, 10.506);
sideRoof.rotation.set(-(Math.PI/2),-(Math.PI/8), 0);

let fillerGeom  = new THREE.CylinderBufferGeometry(0,1,0.41,2,1);
let filler = new THREE.Mesh(fillerGeom);
filler.position.set(-3.352,-4.813,9.054);
filler.rotation.set(Math.PI,-Math.PI/2,0);

scene.add(bigBlock,rightBlock,upperRightBlock,upperLeftBlock,roof,sideRoof,filler);

//bushes
let bush1Texture = new THREE.TextureLoader().load('assets/textures/bush.png');
let bush2Texture = new THREE.TextureLoader().load('assets/textures/bush2.png');

let bush1material = new THREE.MeshLambertMaterial( { 
   map: bush1Texture,
   opacity: 0.9,
   transparent: true,
   side: THREE.DoubleSide});
let bush2material = new THREE.MeshLambertMaterial( {
   map: bush1Texture,
   opacity: 1,
   transparent: true,
   side: THREE.DoubleSide});

let bushGeom = new THREE.PlaneBufferGeometry(3,3,1,1);
let bush = new THREE.Mesh(bushGeom,bush1material);
bush.position.set(6.164, -4.569, 9);

let bushGeom2 = new THREE.PlaneBufferGeometry(3,3,1,1);
let bush2 = new THREE.Mesh(bushGeom2,bush1material);
bush2.position.set( 8.222, -5.927, 9 );
 
let bushGeom3 = new THREE.PlaneBufferGeometry(3,3,1,1);
let bush3 = new THREE.Mesh(bushGeom3,bush1material);
bush3.position.set( 9.916, -4.411 , 9);

let bushGeom4 = new THREE.PlaneBufferGeometry(3,3,1,1);
let bush4 = new THREE.Mesh(bushGeom4,bush1material);
bush4.position.set( 10.110, -6.840, 9);

let bushGeom5 = new THREE.PlaneBufferGeometry(5,5,1,1);
let bush5 = new THREE.Mesh(bushGeom5,bush2material);
bush5.position.set(6.756 ,-6.756 ,9);

scene.add(bush,bush2,bush3,bush4,bush5);

//lighting
const color = 0xFFFFFF;
const intensity = 2;
const light = new THREE.DirectionalLight(color, intensity,0,0.314,0,1);
light.castShadow = true;
light.position.set(-28.002, -8.204, -7.978);
scene.add(light);
var helper = new THREE.DirectionalLightHelper( light, 5 );
scene.add( helper );
var ambient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( ambient );

var helperShadow = new THREE.CameraHelper( light.shadow.camera );
scene.add( helperShadow );


// backgroud
let textureSky = new THREE.TextureLoader().load('assets/textures/Sky.jpg')
scene.background = (textureSky);

// cam position
camera.position.set(-0.34692271,-1.6264739,-4.7234988414);

function animate() {
   requestAnimationFrame( animate );
   // console.log(camera.position);
   renderer.render( scene, camera );
}

animate();
