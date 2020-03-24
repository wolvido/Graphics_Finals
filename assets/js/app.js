//essentials
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer({
   alpha: true,
   antialias: true
});
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
let materialWood = new THREE.MeshLambertMaterial( { map: textureWood,
})
let bridge = new THREE.Mesh( bridgeGeom, materialWood );
bridge.position.set(1.431, 46.860, 9.849);
bridge.rotation.z = Math.PI / 2;
bridge.castShadow = true; 
bridge.receiveShadow = true; 
scene.add(bridge);

//near bridge land
const geometryNear =  new THREE.BoxBufferGeometry(30, 3, 10);
let material = new THREE.MeshLambertMaterial( {color: 0x808080, side: THREE.DoubleSide} );
let LandNear = new THREE.Mesh( geometryNear, material);
LandNear.position.set(0.270,-0.470,-5.645);
LandNear.castShadow = true; 
LandNear.receiveShadow = true; 
scene.add(LandNear);

//far bridge land
const geometryFar =  new THREE.BoxBufferGeometry(120, 10, 3);
let LandFar = new THREE.Mesh( geometryFar, material );
LandFar.position.set(-4.854,2.044,10.496);
LandFar.castShadow = true; 
LandFar.receiveShadow = true; 
scene.add(LandFar); 

// red
let redTexture = new THREE.TextureLoader().load('assets/textures/redWall.jpg')
let redmaterial = new THREE.MeshLambertMaterial( {
   map: redTexture,
   opacity: 1,
   transparent: true,
   depthWrite: false,
   depthTest: false 

} );

//standing lamp 
let foundationGeom = new THREE.BoxBufferGeometry(1.40,0.09,1.40,1,1,1);
let foundation = new THREE.Mesh(foundationGeom,material);
foundation.position.set(0.737,-3.101,8.470);
foundation.castShadow = true; 
foundation.receiveShadow = true; 

let lowerShaftGeom = new THREE.CylinderBufferGeometry(0.47,0.87,0.51,4,1);
let lowerShaft = new THREE.Mesh(lowerShaftGeom,redmaterial);
lowerShaft.position.set(0.737,-3.316,8.471);
lowerShaft.rotation.set(0, Math.PI/4, Math.PI);
lowerShaft.castShadow = true; 
lowerShaft.receiveShadow = true; 

let middleShaftGeom = new THREE.CylinderBufferGeometry(0.32,0.47,0.32,4,1);
let middleShaft = new THREE.Mesh(middleShaftGeom, redmaterial );
middleShaft.position.set(0.737,-3.713,8.466);
middleShaft.rotation.set( 0, Math.PI/4, Math.PI);
middleShaft.castShadow = true; 
middleShaft.receiveShadow = true; 

let upperShaftGeom = new THREE.CylinderBufferGeometry(0.32,0.32,0.50,4,1);
let upperShaft = new THREE.Mesh(upperShaftGeom, redmaterial);
upperShaft.position.set(0.737,-4.090,8.458);
upperShaft.rotation.set( 0, Math.PI/4, Math.PI);
upperShaft.castShadow = true; 
upperShaft.receiveShadow = true; 

let lowerLampGeom = new THREE.BoxBufferGeometry(0.61,0.04,0.64,1,1,1);
let lowerLamp = new THREE.Mesh(lowerLampGeom,olive);
lowerLamp.position.set(0.737,-4.351,8.458);
lowerLamp.rotation.set( 0, 0, Math.PI);
lowerLamp.castShadow = true; 
lowerLamp.receiveShadow = true; 

let lampGeom = new THREE.BoxBufferGeometry(0.49,0.47,0.44,1,1,1);
let lamp = new THREE.Mesh(lampGeom,lightBlue);
lamp.position.set(0.737,-4.611,8.452);
lamp.rotation.set(0, 0, Math.PI);
lamp.castShadow = true; 
lamp.receiveShadow = true; 

let lampRoofGeom = new THREE.CylinderBufferGeometry(0.33,0.65,0.32,4,1);
let lampRoof = new THREE.Mesh(lampRoofGeom,navy);
lampRoof.position.set(0.737,-4.988,8.455);
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
let bush2Texture = new THREE.TextureLoader().load('assets/textures/bush.png');
let longBushTexture = new THREE.TextureLoader().load('assets/textures/longBush.png');
let rosesTexture = new THREE.TextureLoader().load('assets/textures/roses.png');

let bush1material = new THREE.MeshLambertMaterial( { 
   map: bush1Texture,
   opacity: 0.9,
   transparent: true,
   depthWrite: false,
    depthTest: false 
  });
let bush2material = new THREE.MeshLambertMaterial( {
   map: bush1Texture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false 
});
let longBushMaterial = new THREE.MeshLambertMaterial( {
   map: longBushTexture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false 
   
});
let rosesMaterial = new THREE.MeshToonMaterial( {
   map: rosesTexture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false 
   
});

let bushGeom = new THREE.PlaneBufferGeometry(3,3,1,1);
let bush = new THREE.Mesh(bushGeom,longBushMaterial);
bush.position.set(6.164, -4.569, 9);
bush.rotation.set(Math.PI,0,0);

let bushGeomAll =  (Math.random()*1.5)+1.5;


let bushGeom2 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush2 = new THREE.Mesh(bushGeom2,bush1material);
bush2.position.set(3.785,-3.425,10.5);
bush2.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom3 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush3 = new THREE.Mesh(bushGeom3,bush1material);
bush3.position.set(4.798,-3.449,10.5);
bush3.rotation.set(0,Math.PI,Math.PI);

bushGeomAll= (Math.random()*1.5)+1.5;
let bushGeom4 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush4 = new THREE.Mesh(bushGeom4,bush1material);
bush4.position.set(5.753,-3.438,10.5);
bush4.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bush4a = new THREE.Mesh(bushGeom4,bush1material);
bush4a.position.set(6.739,-3.484,10.5);
bush4a.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom5 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush5 = new THREE.Mesh(bushGeom5,bush1material);
bush5.position.set(7.697,-3.521,10.5);
bush5.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom6 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush6 = new THREE.Mesh(bushGeom6,bush1material);
bush6.position.set(8.664,-3.466,10.5);
bush6.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom7 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush7 = new THREE.Mesh(bushGeom7,bush1material);
bush7.position.set(9.676,-3.466 ,10.5 );
bush7.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom8 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush8 = new THREE.Mesh(bushGeom8,bush1material);
bush8.position.set(10.970,-3.466 ,10.5);
bush8.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom9 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush9 = new THREE.Mesh(bushGeom9,bush1material);
bush9.position.set(11.968 ,-3.466 ,10.5 );
bush9.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom10 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush10 = new THREE.Mesh(bushGeom10,bush1material);
bush10.position.set(12.964 ,-3.466 ,10.5 );
bush10.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom11 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush11 = new THREE.Mesh(bushGeom11,bush1material);
bush11.position.set(13.878,-3.425 ,10.5 );
bush11.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom12 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush12 = new THREE.Mesh(bushGeom12,bush1material);
bush12.position.set(14.885 ,-3.425 , 10.5);
bush12.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom13 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush13 = new THREE.Mesh(bushGeom13,bush1material);
bush13.position.set(3.790 ,-4.404 , 10.5);
bush13.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom14 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush14 = new THREE.Mesh(bushGeom14,bush1material);
bush14.position.set(4.797 ,-4.404 ,10.5);
bush14.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom15 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush15 = new THREE.Mesh(bushGeom15,bush1material);
bush15.position.set(5.798,-4.404 ,10.5);
bush15.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom16 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush16 = new THREE.Mesh(bushGeom16,bush1material);
bush16.position.set(6.803,-4.404 ,10.5);
bush16.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom17 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush17 = new THREE.Mesh(bushGeom17,bush1material);
bush17.position.set(7.742 ,-4.404 ,10.5 );
bush17.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom18 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush18 = new THREE.Mesh(bushGeom18,bush1material);
bush18.position.set(8.750 ,-4.404 ,10.5);
bush18.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom19 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush19 = new THREE.Mesh(bushGeom19,bush1material);
bush19.position.set(9.766 ,-4.404 ,10.5 );
bush19.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom20 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush20 = new THREE.Mesh(bushGeom20,bush1material);
bush20.position.set(4.840 ,-5.310 ,10.5);
bush20.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom21 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush21 = new THREE.Mesh(bushGeom21,bush1material);
bush21.position.set(5.851 ,-5.386 ,10.5);
bush21.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom22 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush22 = new THREE.Mesh(bushGeom22,bush1material);
bush22.position.set(6.837 ,-5.386 , 10.5);
bush22.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom23 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush23 = new THREE.Mesh(bushGeom23,bush1material);
bush23.position.set(7.738 ,-5.441 , 10.5);
bush23.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom24 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush24 = new THREE.Mesh(bushGeom24,bush1material);
bush24.position.set(8.726,-5.386 , 10.5);
bush24.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom25= new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush25 = new THREE.Mesh(bushGeom25,bush1material);
bush25.position.set(5.400,-6.102 , 10.5);
bush25.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1.5;
let bushGeom26 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush26 = new THREE.Mesh(bushGeom26,bush1material);
bush26.position.set(8.697,-6.139 , 10.5);
bush26.rotation.set(0,Math.PI,Math.PI);

let bushRosesGeom = new THREE.PlaneBufferGeometry(3,4,1,1);
let bushRoses = new THREE.Mesh(bushRosesGeom,rosesMaterial);
bushRoses.position.set(6.659,-3.525,10.5);
bushRoses.rotation.set(0,Math.PI,Math.PI);

let bushRoses2 = new THREE.Mesh(bushRosesGeom,rosesMaterial);
bushRoses2.position.set(10.307,-4.157,10.5);
bushRoses2.rotation.set(0,Math.PI,Math.PI);

let bushRoses3 = new THREE.Mesh(bushRosesGeom,rosesMaterial);
bushRoses3.position.set(8.233,-5.800,10.5);
bushRoses3.rotation.set(0,Math.PI,Math.PI);

let longBushGeom = new THREE.PlaneBufferGeometry(4,2,1,1);
let longBush = new THREE.Mesh(longBushGeom,longBushMaterial);
longBush.position.set(16.5,-3.451,10.9);
longBush.rotation.set(0,Math.PI,Math.PI);

scene.add(bushRoses3, bushRoses2, longBush, bushRoses, bush2,bush3,bush4,bush4a,bush5,bush6,bush7,bush8,bush9,bush10,bush11,bush12,bush13,bush14,bush15,bush16,bush17,bush18,bush19,bush20,bush21,bush22,bush23,bush24,bush25,bush26);

//built a tree using plane billboards

let treeTrunkTexture = new THREE.TextureLoader().load('assets/textures/treeTrunk.jpg');
let treeTrunkMaterial = new THREE.MeshLambertMaterial({map: treeTrunkTexture});

let treeTrunkGeom = new THREE.CylinderBufferGeometry(0.4,0.40,1.5,8,1);
let treeTrunk = new THREE.Mesh(treeTrunkGeom, treeTrunkMaterial);
treeTrunk.position.set( 0 ,-3.716 ,10.128);
treeTrunk.rotation.set( 0, 0,-((Math.PI/6)-4) );

let upperTrunkGeom = new THREE.CylinderBufferGeometry(0.18,0.40,3,8,1);
let upperTrunk = new THREE.Mesh(upperTrunkGeom, treeTrunkMaterial);
upperTrunk.position.set(0.202,-5.817,10.125);
upperTrunk.rotation.set(0,0,Math.PI);

//
let lowerBillboard1Geom = new THREE.PlaneBufferGeometry(1*3,.50*2,1,1);
let lowerBillboard1 = new THREE.Mesh(lowerBillboard1Geom, bush1material);
lowerBillboard1.position.set(1.299,-5.325, 9.7);
lowerBillboard1.rotation.set(0,Math.PI,0);

let lowerBillboard2Geom = new THREE.PlaneBufferGeometry(1*3,.50*2,1,1);
let lowerBillboard2 = new THREE.Mesh(lowerBillboard2Geom ,bush2material);
lowerBillboard2.position.set(-0.566,-5.277,9.71);
lowerBillboard2.rotation.set(0,Math.PI,0);

let billboard1Geom = new THREE.BoxBufferGeometry(1.20*3,0.8*2,0.01);
let billboard1 = new THREE.Mesh(billboard1Geom,bush2material);
billboard1.position.set(1.961,-6.060,9.6);

let billboard2Geom = new THREE.BoxBufferGeometry(1.4*3,0.62*2,0.01);
let billboard2 = new THREE.Mesh(billboard2Geom,bush2material);
billboard2.position.set(-0.247,-6.256,9.6);

let billboard3Geom = new THREE.BoxBufferGeometry(0.88*3,0.62*2,0.01);
let billboard3 = new THREE.Mesh(billboard3Geom,bush2material);
billboard3.position.set(-1.997,-6.3092,9.6);

let billboard4Geom = new THREE.PlaneBufferGeometry(1.30*3,0.70*2,1,1);
let billboard4 = new THREE.Mesh(billboard4Geom,bush2material);
billboard4.position.set(0.733,-7.362,9.75);
billboard4.rotation.set(0,Math.PI,0);

let billboard5Geom = new THREE.PlaneBufferGeometry(1.2*3,0.74*2,1,1);
let billboard5 = new THREE.Mesh(billboard4Geom,bush2material);
billboard5.position.set(-1.464,-7.449,9.76);
billboard5.rotation.set(0,Math.PI,0);

let upperBillboard1Geom = new THREE.BoxBufferGeometry(1.40*3,0.62*2,0.01);
let upperBillboard1 = new THREE.Mesh(upperBillboard1Geom, bush2material);
upperBillboard1.position.set(0.181,-8.387,9.6);

let upperBillboard2Geom = new THREE.PlaneBufferGeometry(0.85*3,0.50*2,1,1);
let upperBillboard2 = new THREE.Mesh(upperBillboard2Geom,bush2material);
upperBillboard2.position.set(0.258,-9.284,9.78);
upperBillboard2.rotation.set(0,Math.PI,0)

let billboardFarLeftGeom = new THREE.PlaneBufferGeometry(1.40*3,0.62*2,0.01,1,1,1);
let billboardFarLeft = new THREE.Mesh(billboardFarLeftGeom, bush2material);
billboardFarLeft.position.set(-3.169,-6.852,9.192);
billboardFarLeft.rotation.set(0,Math.PI,0);

scene.add(treeTrunk,upperTrunk,billboardFarLeft, lowerBillboard1, lowerBillboard2,billboard1,billboard2,billboard3, billboard4,upperBillboard1,  upperBillboard2, billboard5);

//Bridge

let poleGeom = new THREE.CylinderBufferGeometry(0.09,0.09,1.18,8,1);

let poleLeft = new THREE.Mesh(poleGeom);
poleLeft.position.set(-1.043,-2.569,-0.778);

let poleRight = new THREE.Mesh(poleGeom);
poleRight.position.set(3.981,-2.569,-0.778);

let poleFarRight = new THREE.Mesh(poleGeom);
poleFarRight.position.set(4.874,-2.569,-0.778);

let poleBeyondRight = new THREE.Mesh(poleGeom);
poleBeyondRight.position.set(3.948,-3.559,8.287);

let poleBeyondLeft = new THREE.Mesh(poleGeom);
poleBeyondLeft.position.set(-0.995,-3.559,8.287);

scene.add(poleBeyondLeft,poleBeyondRight,poleFarRight,poleRight, poleLeft, );

let blockGeom = new THREE.BoxBufferGeometry(1,0.09,0.09);
let shortBlockGeom = new THREE.BoxBufferGeometry(0.38,0.09,0.09);
let longBlockGeom = new THREE.BoxBufferGeometry(1.46,0.09,0.09);
let veryLongBlockGeom = new THREE.BoxBufferGeometry(2.62,0.09,0.09);

let poleBlock1 = new THREE.Mesh(blockGeom);
poleBlock1.position.set(4.433,-2.033,-0.785)

let poleBlock2 = new THREE.Mesh(shortBlockGeom);
poleBlock2.position.set(4.433,-2.163,-0.785)
poleBlock2.rotation.set(0,0,THREE.Math.degToRad(90));

let poleBlock3 = new THREE.Mesh(blockGeom);
poleBlock3.position.set(4.433,-2.349,-0.785);

let poleBlock4 = new THREE.Mesh(blockGeom);
poleBlock4.position.set(4.433,-2.897,-0.785);

scene.add(poleBlock1,poleBlock2,poleBlock3,poleBlock4);

let poleTopGeom = new THREE.CylinderBufferGeometry(0.06,0.07,0.14,8,1);
let poleTopCylinderGeom =
let poleTopSphereGeom = 
let poleTopPointGeom = 

//bridge rails

let longBlockRight = new THREE.Mesh(longBlockGeom);
let longBlockLeft = new THREE.Mesh(longBlockGeom);
longBlockRight.position.set(3.964, -2.614,0.421 );
longBlockLeft.position.set( -1.054,-2.614,0.421 );
longBlockLeft.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let longBlockRight2 = new THREE.Mesh(longBlockGeom);
let longBlockLeft2 = new THREE.Mesh(longBlockGeom);
longBlockRight2.position.set(3.964,-2.889, 1.683 );
longBlockLeft2.position.set(-1.026 ,-2.889, 1.683 );
longBlockLeft2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let longBlockRight3 = new THREE.Mesh(longBlockGeom);
let longBlockLeft3 = new THREE.Mesh(longBlockGeom);
longBlockRight3.position.set(3.964,-3.032 ,2.988 );
longBlockLeft3.position.set(-1.004 ,-3.032 ,2.988 );
longBlockLeft3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let longBlockRight4 = new THREE.Mesh(longBlockGeom);
let longBlockLeft4 = new THREE.Mesh(longBlockGeom);
longBlockRight4.position.set( 3.944,-3.211 ,4.304 );
longBlockLeft4.position.set( -1.064,-3.211 ,4.304 );
longBlockLeft4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let longBlockRight5 = new THREE.Mesh(longBlockGeom);
let longBlockLeft5 = new THREE.Mesh(longBlockGeom);
longBlockRight5.position.set( 3.944,-3.254 ,5.662 );
longBlockLeft5.position.set( -1.046,-3.254 ,5.662 );
longBlockLeft5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let longBlockRight6 = new THREE.Mesh(longBlockGeom);
let longBlockLeft6 = new THREE.Mesh(longBlockGeom);
longBlockRight6.position.set(3.944 ,-3.293 ,7.021 );
longBlockLeft6.position.set(-1.006 ,-3.293 ,7.021  );
longBlockLeft6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

scene.add(longBlockLeft,longBlockRight,longBlockLeft2,longBlockRight2,longBlockLeft3,longBlockRight3,longBlockLeft4,longBlockRight4,longBlockLeft5,longBlockRight5,longBlockLeft6,longBlockRight6);

let blockRight = new THREE.Mesh(blockGeom);
let blockLeft = new THREE.Mesh(blockGeom);
blockRight.position.set(3.964,-2.049 ,-0.142 );
blockLeft.position.set( -1.011, -2.049 ,-0.142 );
blockLeft.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let blockRight2 = new THREE.Mesh(blockGeom);
let blockLeft2 = new THREE.Mesh(blockGeom);
blockRight2.position.set(3.964, -2.320,1.042 );
blockLeft2.position.set( -1.034,  -2.320,1.042 );
blockRight2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let blockRight3 = new THREE.Mesh(blockGeom);
let blockLeft3 = new THREE.Mesh(blockGeom);
blockRight3.position.set(3.964,-2.536 ,2.363 );
blockLeft3.position.set( -1.009, -2.536 ,2.363 );
blockRight3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let blockRight4 = new THREE.Mesh(blockGeom);
let blockLeft4 = new THREE.Mesh(blockGeom);
blockRight4.position.set(3.964,-2.726 , 3.680);
blockLeft4.position.set( -1.076, -2.726 , 3.680 );
blockRight4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let blockRight5 = new THREE.Mesh(blockGeom);
let blockLeft5 = new THREE.Mesh(blockGeom);
blockLeft5.position.set(3.964, -2.838,5.005 );
blockRight5.position.set( -1.102, -2.838 ,5.005 );
blockRight5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let blockRight6 = new THREE.Mesh(blockGeom);
let blockLeft6 = new THREE.Mesh(blockGeom);
blockRight6.position.set(3.964,-2.919 ,6.338 );
blockLeft6.position.set( -1.032, -2.919 ,6.338 );
blockRight6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

let blockRight7 = new THREE.Mesh(blockGeom);
let blockLeft7 = new THREE.Mesh(blockGeom);
blockLeft7.position.set(3.964,-2.992 , 7.621);
blockRight7.position.set( -1.029, -2.992 , 7.621 );
blockLeft7.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight7.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);

scene.add(blockRight, blockLeft2, blockRight2, blockLeft3,
   blockRight3, blockLeft4,blockRight4, blockLeft5,
   blockRight5, blockLeft6,blockRight6, blockLeft7,
   blockRight7, blockLeft,);

//bridge archs

let archUpperRight = new THREE.Mesh(veryLongBlockGeom);
let archUpperLeft = new THREE.Mesh(veryLongBlockGeom);
archUpperRight.position.set( 3.956, -3.311, 0.445);
archUpperLeft.position.set( -1.044,-3.311 ,0.445 );

archUpperRight.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)

let archUpperRight2 = new THREE.Mesh(veryLongBlockGeom);
let archUpperLeft2 = new THREE.Mesh(veryLongBlockGeom);
archUpperRight2.position.set(3.941, -3.741 ,2.958);
archUpperLeft2.position.set(-1.036,-3.741 ,2.958);

archUpperRight2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)

let archUpperRight3 = new THREE.Mesh(veryLongBlockGeom);
let archUpperLeft3 = new THREE.Mesh(veryLongBlockGeom);
archUpperRight3.position.set(-1.041,-3.945 ,5.644);
archUpperLeft3.position.set(3.962,-3.945 ,5.644);

archUpperRight3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)

let archUpperRight4 = new THREE.Mesh(veryLongBlockGeom);
let archUpperLeft4 = new THREE.Mesh(veryLongBlockGeom);
archUpperRight4.position.set(-0.995,-4.002 ,6.955);
archUpperLeft4.position.set(3.970, -4.002,6.995);

archUpperRight4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)

//

let archRight = new THREE.Mesh(veryLongBlockGeom);
let archLeft = new THREE.Mesh(veryLongBlockGeom);
archRight.position.set(3.956,-2.723  ,0.445 );
archLeft.position.set( -1.044, -2.723  ,0.445 );

archRight.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)
archLeft.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)

let archRight2 = new THREE.Mesh(veryLongBlockGeom);
let archLeft2 = new THREE.Mesh(veryLongBlockGeom);
archRight2.position.set(3.941, -3.142,2.958 );
archLeft2.position.set( -1.036, -3.142,2.958  );

archRight2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)
archLeft2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)

let archRight3 = new THREE.Mesh(veryLongBlockGeom);
let archLeft3 = new THREE.Mesh(veryLongBlockGeom);
archRight3.position.set(-1.041, -3.385,5.644 );
archLeft3.position.set(3.962, -3.385,5.644);

archRight3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)
archLeft3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)

let archRight4 = new THREE.Mesh(veryLongBlockGeom);
let archLeft4 = new THREE.Mesh(veryLongBlockGeom);
archRight4.position.set(3.970,-3.460 ,6.955 );
archLeft4.position.set(-1.049,-3.460 ,6.955 );

archRight4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)
archLeft4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)

//

let archLowerRight = new THREE.Mesh(veryLongBlockGeom);
let archLowerLeft = new THREE.Mesh(veryLongBlockGeom);
archLowerRight.position.set(3.979 ,-2.245 ,0.445 );
archLowerLeft.position.set(-1.021 ,-2.245 , 0.445);

archLowerRight.rotation.set(THREE.Math.degToRad( 11.18) ,THREE.Math.degToRad( 90)  , 0)
archLowerLeft.rotation.set(THREE.Math.degToRad( 11.18) ,THREE.Math.degToRad( 90)  , 0)

let archLowerRight2 = new THREE.Mesh(veryLongBlockGeom);
let archLowerLeft2 = new THREE.Mesh(veryLongBlockGeom);
archLowerRight2.position.set(3.926,-2.658 ,2.981);
archLowerLeft2.position.set(-1.058,-2.658 ,2.981);

archLowerRight2.rotation.set(THREE.Math.degToRad( -155.73) ,THREE.Math.degToRad( 88.19)  , THREE.Math.degToRad( 163.30))
archLowerLeft2.rotation.set(THREE.Math.degToRad(- 155.73) ,THREE.Math.degToRad( 88.19)  , THREE.Math.degToRad( 163.30))

let archLowerRight3 = new THREE.Mesh(veryLongBlockGeom);
let archLowerLeft3 = new THREE.Mesh(veryLongBlockGeom);
archLowerRight3.position.set(3.883,-2.954 ,5.612);
archLowerLeft3.position.set(-1.147,-2.954 ,5.612);

archLowerRight3.rotation.set(THREE.Math.degToRad( -76.85 ) ,THREE.Math.degToRad( 89.75)  , THREE.Math.degToRad( 80.1));
archLowerLeft3.rotation.set(THREE.Math.degToRad( -76.85 ) ,THREE.Math.degToRad( 89.75)  , THREE.Math.degToRad( 80.1));

let archLowerRight4 = new THREE.Mesh(veryLongBlockGeom);
let archLowerLeft4 = new THREE.Mesh(veryLongBlockGeom);
archLowerRight4.position.set(3.859, -3.061,6.991);
archLowerLeft4.position.set(-1.117,-3.061 ,6.991);

archLowerRight4.rotation.set(THREE.Math.degToRad( -163.16) ,THREE.Math.degToRad( 88.19)  , THREE.Math.degToRad( 168.30))
archLowerLeft4.rotation.set(THREE.Math.degToRad( -163.16) ,THREE.Math.degToRad( 88.19)  , THREE.Math.degToRad( 168.30))

scene.add(archRight,archLeft,archRight2,archLeft2
   ,archRight3,archLeft3 ,archRight4,archLeft4
   ,archLowerRight,archLowerLeft
   ,archLowerRight2,archLowerLeft2
   ,archLowerRight3,archLowerLeft3
   ,archLowerRight4,archLowerLeft4
   ,archUpperRight,archUpperLeft
   ,archUpperRight2,archUpperLeft2
   ,archUpperRight3,archUpperLeft3
   ,archUpperRight4,archUpperLeft4);


//noFace
let loader = new THREE.GLTFLoader();
loader.load( 'assets/models/noFace/scene.gltf', function ( gltf ) {
   //manipulate models here
    model = gltf.scene;
    model.rotation.set(0,0,Math.PI);
    model.scale.set(0.003,0.003,0.003);
    model.position.set(1.9,-2.5,2)

    model.castShadow = false;

   scene.add(model);
   
 }, undefined, function ( error ) {
    console.error( error );
 } );

 //to convert degrees to radians
//  let rotTestGeom = new THREE.BoxBufferGeometry(1,2.60,1);
//  let rotTest = new THREE.Mesh(rotTestGeom);
//  rotTest.position.set(0,-7.338,4.150);
//  let radi = THREE.Math.degToRad( 136 );
//  rotTest.rotation.set(0,0,radi);
// scene.add(rotTest);
 
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
