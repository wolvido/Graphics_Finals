let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer({
   alpha: true,
   antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
controls = new THREE.OrbitControls( camera,renderer.domElement);
renderer.shadowMap.enabled = true;

//colors
let fireBrick = new THREE.MeshBasicMaterial( {color: 0xB22222} );
let coral = new THREE.MeshBasicMaterial( {color: 0xFF7F50} );
let yellow = new THREE.MeshBasicMaterial( {color: 0xFFFF00} );
let green = new THREE.MeshBasicMaterial( {color: 0x008000} );
let olive = new THREE.MeshBasicMaterial( {color: 0x808000} );
let lightBlue = new THREE.MeshBasicMaterial( {color: 0xADD8E6} );
let navy = new THREE.MeshBasicMaterial( {color: 0x000080} );
// red
let redTexture = new THREE.TextureLoader().load('assets/textures/redWall.jpg')
let redmaterial = new THREE.MeshLambertMaterial( {
   map: redTexture,
   opacity: 1,
   transparent: true,
   depthWrite: false,
   depthTest: false 
} );
let redPaintTexture = new THREE.TextureLoader().load('assets/textures/red.jpg');
let redpaintMaterial = new THREE.MeshLambertMaterial({
   map: redPaintTexture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false 
});


//hidden box
let boxGeom = new THREE.BoxBufferGeometry(5,5,5);
let box = new THREE.Mesh(boxGeom, navy);
box.position.set(-10.705,-5.518,-6.145);
box.castShadow = true; 
scene.add(box);

//bridge
let textureWood = new THREE.TextureLoader().load('assets/textures/wood.jpg', function(texture){
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

//near platform
let concreteTexture = new THREE.TextureLoader().load('assets/textures/concrete.jpg');
let concreteMaterial = new THREE.MeshLambertMaterial( { map: concreteTexture });
let foundationMaterial = new THREE.MeshLambertMaterial( { map: concreteTexture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false  });
const geometryNear =  new THREE.BoxBufferGeometry(30.56, 2.58, 10);
let LandNear = new THREE.Mesh( geometryNear, concreteMaterial);
LandNear.position.set(0.270,-0.721,-6.012);
LandNear.castShadow = true; 
LandNear.receiveShadow = true; 
scene.add(LandNear);

//far platform
let greyBrickTexture = new THREE.TextureLoader().load('assets/textures/greyBrick.jpg');
let greyBrickMaterial =  new THREE.MeshLambertMaterial( { map: greyBrickTexture });
let greyBricksGeom = new THREE.BoxBufferGeometry(6.86,0.90,0.28);
let greyBricks = new THREE.Mesh(greyBricksGeom,greyBrickMaterial);
greyBricks.position.set(1.682,-1.561,-0.874);
scene.add(greyBricks);

const geometryFar =  new THREE.BoxBufferGeometry(120, 10, 3);
let LandFar = new THREE.Mesh( geometryFar, concreteMaterial);
LandFar.position.set(-4.854,2.044,10.496);
LandFar.castShadow = true; 
LandFar.receiveShadow = true; 
scene.add(LandFar); 



//standing lamp 
let redpaintMaterial2 = new THREE.MeshLambertMaterial({
   map: redPaintTexture
});

let whiteTexture =  new THREE.TextureLoader().load('assets/textures/white.jpg');
let whiteMaterial =  new THREE.MeshBasicMaterial( { map: whiteTexture});

let foundationGeom = new THREE.BoxBufferGeometry(1.40,0.09,1.40,1,1,1);
let foundation = new THREE.Mesh(foundationGeom, foundationMaterial);
foundation.position.set(0.737,-3.101,8.470);
foundation.castShadow = true; 
foundation.receiveShadow = true; 

let lowerShaftGeom = new THREE.CylinderBufferGeometry(0.47,0.87,0.51,4,1);
let lowerShaft = new THREE.Mesh(lowerShaftGeom,redpaintMaterial2);
lowerShaft.position.set(0.737,-3.316,8.471);
lowerShaft.rotation.set(0, Math.PI/4, Math.PI);
lowerShaft.castShadow = true; 
lowerShaft.receiveShadow = true; 

let middleShaftGeom = new THREE.CylinderBufferGeometry(0.32,0.47,0.32,4,1);
let middleShaft = new THREE.Mesh(middleShaftGeom, redpaintMaterial2 );
middleShaft.position.set(0.737,-3.713,8.466);
middleShaft.rotation.set( 0, Math.PI/4, Math.PI);
middleShaft.castShadow = true; 
middleShaft.receiveShadow = true; 

let upperShaftGeom = new THREE.CylinderBufferGeometry(0.32,0.32,0.50,4,1);
let upperShaft = new THREE.Mesh(upperShaftGeom, redpaintMaterial2);
upperShaft.position.set(0.737,-4.090,8.458);
upperShaft.rotation.set( 0, Math.PI/4, Math.PI);
upperShaft.castShadow = true; 
upperShaft.receiveShadow = true; 

let lowerLampGeom = new THREE.BoxBufferGeometry(0.61,0.04,0.64,1,1,1);
let lowerLamp = new THREE.Mesh(lowerLampGeom,redpaintMaterial2);
lowerLamp.position.set(0.737,-4.351,8.458);
lowerLamp.rotation.set( 0, 0, Math.PI);
lowerLamp.castShadow = true; 
lowerLamp.receiveShadow = true; 

let lampGeom = new THREE.BoxBufferGeometry(0.49,0.47,0.44,1,1,1);
let lamp = new THREE.Mesh(lampGeom,redpaintMaterial2);
lamp.position.set(0.737,-4.611,8.452);
lamp.rotation.set(0, 0, Math.PI);
lamp.castShadow = true; 
lamp.receiveShadow = true; 

let lampRoofGeom = new THREE.CylinderBufferGeometry(0.33,0.65,0.32,4,1);
let lampRoof = new THREE.Mesh(lampRoofGeom,redpaintMaterial2);
lampRoof.position.set(0.737,-4.988,8.455);
lampRoof.rotation.set(0, Math.PI/4, Math.PI);
lampRoof.castShadow = true; 
lampRoof.receiveShadow = true; 

scene.add(foundation,lowerShaft,middleShaft,upperShaft,lowerLamp,lamp,lampRoof);

//house in the left

let roofTexture =  new THREE.TextureLoader().load('assets/textures/roof.jpg', function(texture){
   // repeating the texture
   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
   texture.offset.set( 3, 3 );
   texture.repeat.set( 3, 3 );
   texture.needsUpdate = true;
});
let roofMaterial = new THREE.MeshLambertMaterial({
   map: roofTexture
});

let wallTexture = new THREE.TextureLoader().load('assets/textures/wall.jpg');
let wallMaterial = new THREE.MeshLambertMaterial({
   map: wallTexture
});

let windowTexture = new THREE.TextureLoader().load('assets/textures/window2.png');
let windowMaterial = new THREE.MeshLambertMaterial({
   map: windowTexture,
   opacity: 2,
   transparent: true,

});

let bigBlockGeom = new THREE.BoxBufferGeometry(2.60,2.64,2.47);
let bigBlock = new THREE.Mesh(bigBlockGeom,wallMaterial);
bigBlock.position.set(-4.646,-3.267,10.242);

let rightBlockGeom  = new THREE.BoxBufferGeometry(1,1.72,2.47);
let rightBlock = new THREE.Mesh(rightBlockGeom,windowMaterial);
rightBlock.position.set(-2.867,-3.756,10.240);

let upperRightBlockGeom  = new THREE.BoxBufferGeometry(1.60,1,2.47);
let upperRightBlock = new THREE.Mesh(upperRightBlockGeom,windowMaterial);
upperRightBlock.position.set(-3.909,-5.075,10.250);

let upperLeftBlockGeom  = new THREE.BoxBufferGeometry(1,1,2.47);
let upperLeftBlock = new THREE.Mesh(upperLeftBlockGeom,wallMaterial);
upperLeftBlock.position.set(-5.186,-5.065,10.250);

let roofGeom  = new THREE.CylinderBufferGeometry(0,2.14,1,4,1);
let roof = new THREE.Mesh(roofGeom,roofMaterial);
roof.position.set(-4.401,-6.064,10.299);
roof.rotation.set(Math.PI,-Math.PI/4,0);

let sideRoofGeom  = new THREE.PlaneBufferGeometry(1.10,3,1,1);
let sideRoof = new THREE.Mesh(sideRoofGeom,roofMaterial);
sideRoof.position.set(-2.874, -4.826, 10.506);
sideRoof.rotation.set(THREE.Math.degToRad(-90),THREE.Math.degToRad(158),THREE.Math.degToRad(-180));

let fillerGeom  = new THREE.CylinderBufferGeometry(0,1,0.41,2,1);
let filler = new THREE.Mesh(fillerGeom,wallMaterial);
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
    depthTest: false,
    side: THREE.DoubleSide
  });
let bush2material = new THREE.MeshLambertMaterial( {
   map: bush1Texture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false,
   side: THREE.DoubleSide
});
let longBushMaterial = new THREE.MeshLambertMaterial( {
   map: longBushTexture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false ,
   side: THREE.DoubleSide
   
});
let rosesMaterial = new THREE.MeshToonMaterial( {
   map: rosesTexture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false ,
   side: THREE.DoubleSide
   
});

let bushGeom = new THREE.PlaneBufferGeometry(3,3,1,1);
let bush = new THREE.Mesh(bushGeom,longBushMaterial);
bush.position.set(6.164, -4.569, 9);
bush.rotation.set(Math.PI,0,0);

let bushGeomAll =  (Math.random()*1.5)+1;


let bushGeom2 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush2 = new THREE.Mesh(bushGeom2,bush1material);
bush2.position.set(3.785,-3.425,10.5);
bush2.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom3 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush3 = new THREE.Mesh(bushGeom3,bush1material);
bush3.position.set(4.798,-3.449,10.5);
bush3.rotation.set(0,Math.PI,Math.PI);

bushGeomAll= (Math.random()*1.5)+1;
let bushGeom4 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush4 = new THREE.Mesh(bushGeom4,bush1material);
bush4.position.set(5.753,-3.438,10.5);
bush4.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bush4a = new THREE.Mesh(bushGeom4,bush1material);
bush4a.position.set(6.739,-3.484,10.5);
bush4a.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom5 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush5 = new THREE.Mesh(bushGeom5,bush1material);
bush5.position.set(7.697,-3.521,10.5);
bush5.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom6 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush6 = new THREE.Mesh(bushGeom6,bush1material);
bush6.position.set(8.664,-3.466,10.5);
bush6.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom7 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush7 = new THREE.Mesh(bushGeom7,bush1material);
bush7.position.set(9.676,-3.466 ,10.5 );
bush7.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom8 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush8 = new THREE.Mesh(bushGeom8,bush1material);
bush8.position.set(10.970,-3.466 ,10.5);
bush8.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom9 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush9 = new THREE.Mesh(bushGeom9,bush1material);
bush9.position.set(11.968 ,-3.466 ,10.5 );
bush9.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom10 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush10 = new THREE.Mesh(bushGeom10,bush1material);
bush10.position.set(12.964 ,-3.466 ,10.5 );
bush10.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom11 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush11 = new THREE.Mesh(bushGeom11,bush1material);
bush11.position.set(13.878,-3.425 ,10.5 );
bush11.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom12 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush12 = new THREE.Mesh(bushGeom12,bush1material);
bush12.position.set(14.885 ,-3.425 , 10.5);
bush12.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom13 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush13 = new THREE.Mesh(bushGeom13,bush1material);
bush13.position.set(3.790 ,-4.404 , 10.5);
bush13.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom14 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush14 = new THREE.Mesh(bushGeom14,bush1material);
bush14.position.set(4.797 ,-4.404 ,10.5);
bush14.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom15 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush15 = new THREE.Mesh(bushGeom15,bush1material);
bush15.position.set(5.798,-4.404 ,10.5);
bush15.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom16 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush16 = new THREE.Mesh(bushGeom16,bush1material);
bush16.position.set(6.803,-4.404 ,10.5);
bush16.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom17 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush17 = new THREE.Mesh(bushGeom17,bush1material);
bush17.position.set(7.742 ,-4.404 ,10.5 );
bush17.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom18 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush18 = new THREE.Mesh(bushGeom18,bush1material);
bush18.position.set(8.750 ,-4.404 ,10.5);
bush18.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom19 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush19 = new THREE.Mesh(bushGeom19,bush1material);
bush19.position.set(9.766 ,-4.404 ,10.5 );
bush19.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom20 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush20 = new THREE.Mesh(bushGeom20,bush1material);
bush20.position.set(4.840 ,-5.310 ,10.5);
bush20.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom21 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush21 = new THREE.Mesh(bushGeom21,bush1material);
bush21.position.set(5.851 ,-5.386 ,10.5);
bush21.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom22 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush22 = new THREE.Mesh(bushGeom22,bush1material);
bush22.position.set(6.837 ,-5.386 , 10.5);
bush22.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom23 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush23 = new THREE.Mesh(bushGeom23,bush1material);
bush23.position.set(7.738 ,-5.441 , 10.5);
bush23.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom24 = new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush24 = new THREE.Mesh(bushGeom24,bush1material);
bush24.position.set(8.726,-5.386 , 10.5);
bush24.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
let bushGeom25= new THREE.PlaneBufferGeometry(bushGeomAll,bushGeomAll,1,1);
let bush25 = new THREE.Mesh(bushGeom25,bush1material);
bush25.position.set(5.400,-6.102 , 10.5);
bush25.rotation.set(0,Math.PI,Math.PI);

bushGeomAll = (Math.random()*1.5)+1;
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
lowerBillboard1.rotation.set(Math.PI,Math.PI,Math.PI);

let lowerBillboard2Geom = new THREE.PlaneBufferGeometry(1*3,.50*2,1,1);
let lowerBillboard2 = new THREE.Mesh(lowerBillboard2Geom ,bush2material);
lowerBillboard2.position.set(-0.566,-5.277,9.71);
lowerBillboard2.rotation.set(Math.PI,Math.PI,Math.PI);

let billboard1Geom = new THREE.BoxBufferGeometry(1.20*3,0.8*2,0.01);
let billboard1 = new THREE.Mesh(billboard1Geom,bush2material);
billboard1.position.set(1.961,-6.060,9.6);
billboard1.rotation.set(0,0,Math.PI);

let billboard2Geom = new THREE.BoxBufferGeometry(1.4*3,0.62*2,0.01);
let billboard2 = new THREE.Mesh(billboard2Geom,bush2material);
billboard2.position.set(-0.247,-6.256,9.6);
billboard2.rotation.set(0,0,Math.PI);

let billboard3Geom = new THREE.BoxBufferGeometry(0.88*3,0.62*2,0.01);
let billboard3 = new THREE.Mesh(billboard3Geom,bush2material);
billboard3.position.set(-1.997,-6.3092,9.6);
billboard3.rotation.set(0,0,Math.PI);

let billboard4Geom = new THREE.PlaneBufferGeometry(1.30*3,0.70*2,1,1);
let billboard4 = new THREE.Mesh(billboard4Geom,bush2material);
billboard4.position.set(0.733,-7.362,9.75);
billboard4.rotation.set(0,0,Math.PI);


let billboard5Geom = new THREE.PlaneBufferGeometry(1.2*3,0.74*2,1,1);
let billboard5 = new THREE.Mesh(billboard4Geom,bush2material);
billboard5.position.set(-1.464,-7.449,9.76);
billboard5.rotation.set(0,0,Math.PI);

let upperBillboard1Geom = new THREE.BoxBufferGeometry(1.40*3,0.62*2,0.01);
let upperBillboard1 = new THREE.Mesh(upperBillboard1Geom, bush2material);
upperBillboard1.position.set(0.181,-8.387,9.6);
upperBillboard1.rotation.set(0,0,Math.PI);

let upperBillboard2Geom = new THREE.PlaneBufferGeometry(0.85*3,0.50*2,1,1);
let upperBillboard2 = new THREE.Mesh(upperBillboard2Geom,bush2material);
upperBillboard2.position.set(0.258,-9.284,9.78);
upperBillboard2.rotation.set(0,0,Math.PI)

let billboardFarLeftGeom = new THREE.PlaneBufferGeometry(1.40*3,0.62*2,0.01,1,1,1);
let billboardFarLeft = new THREE.Mesh(billboardFarLeftGeom, bush2material);
billboardFarLeft.position.set(-3.169,-6.852,9.192);
billboardFarLeft.rotation.set(0,0,Math.PI);


scene.add(treeTrunk,upperTrunk,billboardFarLeft, lowerBillboard1, lowerBillboard2,billboard1,billboard2,billboard3, billboard4,upperBillboard1,  upperBillboard2, billboard5);

//Bridge



let poleGeom = new THREE.CylinderBufferGeometry(0.09,0.09,1.18,8,1);

let poleLeft = new THREE.Mesh(poleGeom,redpaintMaterial);
poleLeft.position.set(-1.043,-2.569,-0.778);

let poleRight = new THREE.Mesh(poleGeom,redpaintMaterial);
poleRight.position.set(3.981,-2.569,-0.778);

let poleFarRight = new THREE.Mesh(poleGeom,redpaintMaterial);
poleFarRight.position.set(4.874,-2.569,-0.778);

let poleBeyondRight = new THREE.Mesh(poleGeom,redpaintMaterial);
poleBeyondRight.position.set(3.948,-3.559,8.287);

let poleBeyondLeft = new THREE.Mesh(poleGeom,redpaintMaterial);
poleBeyondLeft.position.set(-0.995,-3.559,8.287);

scene.add(poleBeyondLeft,poleBeyondRight,poleFarRight,poleRight, poleLeft, );

let blockGeom = new THREE.BoxBufferGeometry(0.50,0.09,0.09);
let blockGeom2 = new THREE.BoxBufferGeometry(1,0.09,0.09);
let shortBlockGeom = new THREE.BoxBufferGeometry(0.38,0.09,0.09);
let longBlockGeom = new THREE.BoxBufferGeometry(1.10,0.09,0.09);
let veryLongBlockGeom = new THREE.BoxBufferGeometry(2.62,0.09,0.09);

let poleBlock1 = new THREE.Mesh(blockGeom2,redpaintMaterial);
poleBlock1.position.set(4.433,-2.033,-0.785)

let poleBlock2 = new THREE.Mesh(shortBlockGeom,redpaintMaterial);
poleBlock2.position.set(4.433,-2.163,-0.785)
poleBlock2.rotation.set(0,0,THREE.Math.degToRad(90));

let poleBlock3 = new THREE.Mesh(blockGeom2,redpaintMaterial);
poleBlock3.position.set(4.433,-2.349,-0.785);

let poleBlock4 = new THREE.Mesh(blockGeom2,redpaintMaterial);
poleBlock4.position.set(4.433,-2.897,-0.785);

scene.add(poleBlock1,poleBlock2,poleBlock3,poleBlock4);

//pole top
let topTexture = new THREE.TextureLoader().load('assets/textures/point.jpg');

let topSteelMaterial = new THREE.MeshLambertMaterial({
   map: topTexture,
   opacity: 2,
   transparent: true,
   depthWrite: false,
   depthTest: false });

let poleTopGeom = new THREE.CylinderBufferGeometry(0.08,0.05,0.14,8,1);
let poleTopSphereGeom = new THREE.SphereBufferGeometry(0.04,8,6);
let poleTopPointGeom = new THREE.CylinderBufferGeometry(0, 0.02,0.03,8,1);

let poleTop = new THREE.Mesh(poleTopGeom,topSteelMaterial);
poleTop.position.set(3.980,-3.230,-0.773);

let poleTop2 = new THREE.Mesh(poleTopGeom,topSteelMaterial);
poleTop2.position.set(4.875,-3.230,-0.773);

let poleTopSphere = new THREE.Mesh(poleTopSphereGeom,topSteelMaterial);
poleTopSphere.position.set(3.981,-3.336,-0.778);

let poleTopSphere2 = new THREE.Mesh(poleTopSphereGeom,topSteelMaterial);
poleTopSphere2.position.set(4.870,-3.336,-0.778);

let poleTopPoint = new THREE.Mesh(poleTopPointGeom,topSteelMaterial);
poleTopPoint.position.set(3.982,-3.381,-0.778);
poleTopPoint.rotation.set();
poleTopPoint.rotation.set(0,0,THREE.Math.degToRad(180));

let poleTopPoint2 = new THREE.Mesh(poleTopPointGeom,topSteelMaterial);
poleTopPoint2.position.set(4.870,-3.381,-0.778);
poleTopPoint2.rotation.set(0,0,THREE.Math.degToRad(180));

scene.add(poleTop,poleTop2,poleTopSphere,poleTopSphere2, poleTopPoint,poleTopPoint2 );

//bridge rails


let longBlockRight = new THREE.Mesh(longBlockGeom,redpaintMaterial);
let longBlockLeft = new THREE.Mesh(longBlockGeom,redpaintMaterial);
longBlockRight.position.set(3.960, -2.784,0.421 );
longBlockLeft.position.set( -1.054,-2.784,0.421 );
longBlockLeft.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockLeft.castShadow = true; 
longBlockLeft.receiveShadow = true;
longBlockRight.castShadow = true; 
longBlockRight.receiveShadow = true;

let longBlockRight2 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
let longBlockLeft2 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
longBlockRight2.position.set(3.964,-3.014, 1.683 );
longBlockLeft2.position.set(-1.026 ,-3.014, 1.683 );
longBlockLeft2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockLeft2.castShadow = true; 
longBlockLeft2.receiveShadow = true;
longBlockRight2.castShadow = true; 
longBlockRight2.receiveShadow = true;

let longBlockRight3 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
let longBlockLeft3 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
longBlockRight3.position.set(3.964,-3.185 ,2.988 );
longBlockLeft3.position.set(-1.004 ,-3.185 ,2.988 );
longBlockLeft3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockLeft3.castShadow = true; 
longBlockLeft3.receiveShadow = true;
longBlockRight3.castShadow = true; 
longBlockRight3.receiveShadow = true;

let longBlockRight4 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
let longBlockLeft4 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
longBlockRight4.position.set( 3.944,-3.394 ,4.304 );
longBlockLeft4.position.set( -1.064,-3.394 ,4.304 );
longBlockLeft4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockLeft4.castShadow = true; 
longBlockLeft4.receiveShadow = true;
longBlockRight4.castShadow = true; 
longBlockRight4.receiveShadow = true;

let longBlockRight5 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
let longBlockLeft5 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
longBlockRight5.position.set( 3.944,-3.431 ,5.662 );
longBlockLeft5.position.set( -1.046,-3.431 ,5.662 );
longBlockLeft5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockLeft5.castShadow = true; 
longBlockLeft5.receiveShadow = true;
longBlockRight5.castShadow = true; 
longBlockRight5.receiveShadow = true;

let longBlockRight6 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
let longBlockLeft6 = new THREE.Mesh(longBlockGeom,redpaintMaterial);
longBlockRight6.position.set(3.944 ,-3.506 ,7.021 );
longBlockLeft6.position.set(-1.006 ,-3.506 ,7.021  );
longBlockLeft6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockRight6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
longBlockLeft6.castShadow = true; 
longBlockLeft6.receiveShadow = true;
longBlockRight6.castShadow = true; 
longBlockRight6.receiveShadow = true;

scene.add(longBlockLeft,longBlockRight,longBlockLeft2,longBlockRight2,longBlockLeft3,longBlockRight3,longBlockLeft4,longBlockRight4,longBlockLeft5,longBlockRight5,longBlockLeft6,longBlockRight6);

let blockRight = new THREE.Mesh(blockGeom,redpaintMaterial);
let blockLeft = new THREE.Mesh(blockGeom,redpaintMaterial);
blockRight.position.set(3.964,-2.357 ,-0.142 );
blockLeft.position.set( -1.011, -2.357 ,-0.142 );
blockLeft.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight.receiveShadow = true;
blockLeft.receiveShadow = true;
blockRight.castShadow = true; 
blockLeft.castShadow = true; 

let blockRight2 = new THREE.Mesh(blockGeom,redpaintMaterial);
let blockLeft2 = new THREE.Mesh(blockGeom,redpaintMaterial);
blockRight2.position.set(3.964, -2.609,1.042 );
blockLeft2.position.set( -1.034,  -2.609,1.042 );
blockRight2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft2.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight2.receiveShadow = true;
blockLeft2.receiveShadow = true;
blockRight2.castShadow = true; 
blockLeft2.castShadow = true; 

let blockRight3 = new THREE.Mesh(blockGeom,redpaintMaterial);
let blockLeft3 = new THREE.Mesh(blockGeom,redpaintMaterial);
blockRight3.position.set(3.964,-2.806 ,2.363 );
blockLeft3.position.set( -1.009, -2.806,2.363 );
blockRight3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft3.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight3.receiveShadow = true;
blockLeft3.receiveShadow = true;
blockRight3.castShadow = true; 
blockLeft3.castShadow = true; 

let blockRight4 = new THREE.Mesh(blockGeom,redpaintMaterial);
let blockLeft4 = new THREE.Mesh(blockGeom,redpaintMaterial);
blockRight4.position.set(3.964,-2.994 , 3.680);
blockLeft4.position.set( -1.076, -2.994 , 3.680 );
blockRight4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft4.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight4.receiveShadow = true;
blockLeft4.receiveShadow = true;
blockRight4.castShadow = true; 
blockLeft4.castShadow = true; 

let blockRight5 = new THREE.Mesh(blockGeom,redpaintMaterial);
let blockLeft5 = new THREE.Mesh(blockGeom,redpaintMaterial);
blockLeft5.position.set(3.964, -3.159,5.005 );
blockRight5.position.set( -1.102, -3.159,5.005 );
blockRight5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft5.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight5.receiveShadow = true;
blockLeft5.receiveShadow = true;
blockRight5.castShadow = true; 
blockLeft5.castShadow = true; 

let blockRight6 = new THREE.Mesh(blockGeom,redpaintMaterial);
let blockLeft6 = new THREE.Mesh(blockGeom,redpaintMaterial);
blockRight6.position.set(3.964,-3.136 ,6.338 );
blockLeft6.position.set( -1.032, -3.136,6.338 );
blockRight6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockLeft6.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight6.receiveShadow = true;
blockLeft6.receiveShadow = true;
blockRight6.castShadow = true; 
blockLeft6.castShadow = true; 

let blockRight7 = new THREE.Mesh(blockGeom,redpaintMaterial);
let blockLeft7 = new THREE.Mesh(blockGeom,redpaintMaterial);
blockLeft7.position.set(3.964,-3.252 , 7.621);
blockRight7.position.set( -1.029, -3.252, 7.621 );
blockLeft7.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight7.rotation.set(THREE.Math.degToRad(90),THREE.Math.degToRad(90),0);
blockRight7.receiveShadow = true;
blockLeft7.receiveShadow = true;
blockRight7.castShadow = true; 
blockLeft7.castShadow = true; 

scene.add(blockRight, blockLeft2, blockRight2, blockLeft3,
   blockRight3, blockLeft4,blockRight4, blockLeft5,
   blockRight5, blockLeft6,blockRight6, blockLeft7,
   blockRight7, blockLeft,);

//bridge archs

let archUpperRight = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archUpperLeft = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archUpperRight.position.set( 3.956, -3.311, 0.445);
archUpperLeft.position.set( -1.044,-3.311 ,0.445 );
archUpperRight.castShadow = true; 
archUpperRight.receiveShadow = true;
archUpperLeft.receiveShadow = true;
archUpperLeft.castShadow = true;
archUpperRight.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)

let archUpperRight2 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archUpperLeft2 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archUpperRight2.position.set(3.941, -3.741 ,2.958);
archUpperLeft2.position.set(-1.036,-3.741 ,2.958);
archUpperRight2.castShadow = true; 
archUpperRight2.receiveShadow = true;
archUpperLeft2.receiveShadow = true;
archUpperLeft2.castShadow = true;
archUpperRight2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)

let archUpperRight3 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archUpperLeft3 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archUpperRight3.position.set(-1.041,-3.945 ,5.644);
archUpperLeft3.position.set(3.962,-3.945 ,5.644);
archUpperRight3.castShadow = true; 
archUpperRight3.receiveShadow = true;
archUpperLeft3.receiveShadow = true;
archUpperLeft3.castShadow = true;
archUpperRight3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)

let archUpperRight4 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archUpperLeft4 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archUpperRight4.position.set(-0.995,-4.002 ,6.955);
archUpperLeft4.position.set(3.970, -4.002,6.995);
archUpperRight4.castShadow = true; 
archUpperRight4.receiveShadow = true;
archUpperLeft4.receiveShadow = true;
archUpperLeft4.castShadow = true;
archUpperRight4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)
archUpperLeft4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)

//

let archRight = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLeft = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archRight.position.set(3.956,-2.723  ,0.445 );
archLeft.position.set( -1.044, -2.723  ,0.445 );
archRight.castShadow = true; 
archRight.receiveShadow = true;
archLeft.receiveShadow = true;
archLeft.castShadow = true;
archRight.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)
archLeft.rotation.set(THREE.Math.degToRad( 12.99 ) ,THREE.Math.degToRad( 90)  , 0)

let archRight2 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLeft2 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archRight2.position.set(3.941, -3.142,2.958 );
archLeft2.position.set( -1.036, -3.142,2.958  );
archRight2.castShadow = true; 
archRight2.receiveShadow = true;
archLeft2.receiveShadow = true;
archLeft2.castShadow = true;
archRight2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)
archLeft2.rotation.set(THREE.Math.degToRad( 6.86) ,THREE.Math.degToRad( 90)  , 0)

let archRight3 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLeft3 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archRight3.position.set(-1.041, -3.385,5.644 );
archLeft3.position.set(3.962, -3.385,5.644);
archRight3.castShadow = true; 
archRight3.receiveShadow = true;
archLeft3.receiveShadow = true;
archLeft3.castShadow = true;
archRight3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)
archLeft3.rotation.set(THREE.Math.degToRad( 2.42) ,THREE.Math.degToRad( 90)  , 0)

let archRight4 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLeft4 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archRight4.position.set(3.970,-3.460 ,6.955 );
archLeft4.position.set(-1.049,-3.460 ,6.955 );
archRight4.castShadow = true; 
archRight4.receiveShadow = true;
archLeft4.receiveShadow = true;
archLeft4.castShadow = true;
archRight4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)
archLeft4.rotation.set(THREE.Math.degToRad( 2.91) ,THREE.Math.degToRad( 90)  , 0)

//

let archLowerRight = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLowerLeft = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archLowerRight.position.set(3.979 ,-2.245 ,0.445 );
archLowerLeft.position.set(-1.021 ,-2.245 , 0.445);
archLowerRight.castShadow = true; 
archLowerLeft.castShadow = true; 
archLowerRight.receiveShadow = true;
archLowerLeft.receiveShadow = true;
archLowerRight.rotation.set(THREE.Math.degToRad( 11.18) ,THREE.Math.degToRad( 90)  , 0)
archLowerLeft.rotation.set(THREE.Math.degToRad( 11.18) ,THREE.Math.degToRad( 90)  , 0)

let archLowerRight2 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLowerLeft2 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archLowerRight2.position.set(3.926,-2.658 ,2.981);
archLowerLeft2.position.set(-1.058,-2.658 ,2.981);
archLowerRight2.castShadow = true; 
archLowerLeft2.castShadow = true; 
archLowerRight2.receiveShadow = true;
archLowerLeft2.receiveShadow = true;
archLowerRight2.rotation.set(THREE.Math.degToRad( -155.73) ,THREE.Math.degToRad( 88.19)  , THREE.Math.degToRad( 163.30))
archLowerLeft2.rotation.set(THREE.Math.degToRad(- 155.73) ,THREE.Math.degToRad( 88.19)  , THREE.Math.degToRad( 163.30))

let archLowerRight3 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLowerLeft3 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archLowerRight3.position.set(3.883,-2.954 ,5.612);
archLowerLeft3.position.set(-1.147,-2.954 ,5.612);
archLowerRight3.castShadow = true; 
archLowerLeft3.castShadow = true; 
archLowerRight3.receiveShadow = true;
archLowerLeft3.receiveShadow = true
archLowerRight3.rotation.set(THREE.Math.degToRad( -76.85 ) ,THREE.Math.degToRad( 89.75)  , THREE.Math.degToRad( 80.1));
archLowerLeft3.rotation.set(THREE.Math.degToRad( -76.85 ) ,THREE.Math.degToRad( 89.75)  , THREE.Math.degToRad( 80.1));

let archLowerRight4 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
let archLowerLeft4 = new THREE.Mesh(veryLongBlockGeom,redpaintMaterial);
archLowerRight4.position.set(3.859, -3.061,6.991);
archLowerLeft4.position.set(-1.117,-3.061 ,6.991);
archLowerRight4.castShadow = true; 
archLowerLeft4.castShadow = true; 
archLowerRight4.receiveShadow = true;
archLowerLeft4.receiveShadow = true;
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

//background structures

//big house
let houseBodyGeom = new THREE.BoxBufferGeometry(4.50,3.54,2.47);
let lowerRoofGeom = new THREE.CylinderBufferGeometry(2.02,3.14,0.48,4,1);
let upperBodyGeom = new THREE.BoxBufferGeometry(1.66,1.14,2.70);
let upperBodyLeftGeom = new THREE.BoxBufferGeometry(1.38,1.14,2.70);
let upperRoofGeom = new THREE.CylinderBufferGeometry(0,2.30,0.68,4,1);

let houseBody = new THREE.Mesh(houseBodyGeom, wallMaterial);
houseBody.position.set(6.998,-4.872 ,12.274 );

let lowerRoof = new THREE.Mesh(lowerRoofGeom,roofMaterial);
lowerRoof.position.set(6.995,-6.894 ,13.235);
lowerRoof.rotation.set(0,THREE.Math.degToRad(45),THREE.Math.degToRad(180));

let upperBody = new THREE.Mesh(upperBodyGeom, wallMaterial);
upperBody.position.set(7.591,-7.612 ,13.280);
upperBody.rotation.set(0,0,THREE.Math.degToRad(180));

let upperBodyLeft = new THREE.Mesh(upperBodyLeftGeom, windowMaterial);
upperBodyLeft.position.set(6.243,-7.612 ,13.280);
upperBodyLeft.rotation.set(0,0,THREE.Math.degToRad(180));

let upperRoof = new THREE.Mesh(upperRoofGeom,roofMaterial);
upperRoof.position.set(7.025, -8.515,13.314);
upperRoof.rotation.set(0,THREE.Math.degToRad(45),THREE.Math.degToRad(180));

scene.add(houseBody,upperBodyLeft, lowerRoof ,upperBody, upperRoof );

//smaller house

let smallHouseBodyGeom = new THREE.BoxBufferGeometry(1.72,2.60,2.04);
let smallRoofGeom = new THREE.CylinderBufferGeometry(0,0.88,0.87,2,1);
let smallRoofSide = new THREE.PlaneBufferGeometry(1.20,1.96,1,1);

let smallHouseBody = new THREE.Mesh(smallHouseBodyGeom,wallMaterial);
smallHouseBody.position.set(10.555,-4.714,13.272);

let smallRoof = new THREE.Mesh(smallRoofGeom,whiteMaterial);
smallRoof.position.set(10.569,-6.437 ,12.249 );
smallRoof.rotation.set(0,THREE.Math.degToRad( 90 ) ,Math.PI);

let smallRoofSide1 = new THREE.Mesh(smallRoofSide,roofMaterial);
smallRoofSide1.position.set(10.992 , -6.462,13.188 );
smallRoofSide1.rotation.set( THREE.Math.degToRad( -90.00 ),THREE.Math.degToRad(135.00 ) ,THREE.Math.degToRad( -180.00  ) );

let smallRoofSide2 = new THREE.Mesh(smallRoofSide,roofMaterial);
smallRoofSide2.position.set( 10.144,-6.454 ,13.189 );
smallRoofSide2.rotation.set( THREE.Math.degToRad( -90.00  ),THREE.Math.degToRad( -135.00 ) ,THREE.Math.degToRad( -180.00  ) );

scene.add(smallHouseBody,smallRoof,smallRoofSide1,smallRoofSide2);

//far right house
let rightHouseBodyGeom = new THREE.BoxBufferGeometry( 3.18, 1.92,2.36 );
let rightRoofGeom = new THREE.CylinderBufferGeometry(0.00,1.22 ,1.19,2,1 );
let rightRoofSideGeom = new THREE.PlaneBufferGeometry(1.74,3.22 ,1,1 );

let rightHouseBody = new THREE.Mesh(rightHouseBodyGeom,wallMaterial );
rightHouseBody.position.set(17.517, -3.873, 12.756);

let rightRoof = new THREE.Mesh(rightRoofGeom,whiteMaterial);
rightRoof.position.set(15.936, -5.426, 12.796);
rightRoof.rotation.set(0,0,Math.PI);

let rightRoofSide = new THREE.Mesh(rightRoofSideGeom,roofMaterial);
rightRoofSide.position.set(17.528,-5.425,12.186);
rightRoofSide.rotation.set(THREE.Math.degToRad( 135.00 ),0,THREE.Math.degToRad( 90));

scene.add(rightRoofSide,rightRoof,rightHouseBody);

let pinkTexture = new THREE.TextureLoader().load('assets/textures/pink.jpg');
let saturatedYellowTexture = new THREE.TextureLoader().load('assets/textures/saturated.png');
let pinkMaterial =  new THREE.MeshBasicMaterial( { map: pinkTexture, side: THREE.DoubleSide});
let saturatedMaterial =  new THREE.MeshBasicMaterial( { map: saturatedYellowTexture, side: THREE.DoubleSide});

let pinkHouseGeom = new THREE.PlaneBufferGeometry(2.72,2.94,1,1);
let pinkHouse = new THREE.Mesh(pinkHouseGeom,pinkMaterial);
pinkHouse.position.set(-1.675,-4.104,16.627);

let pinkRoofGeom = new THREE.CylinderBufferGeometry(0,1.44,0.89,2,1);
let pinkRoof = new THREE.Mesh(pinkRoofGeom,pinkMaterial);
pinkRoof.position.set(-1.689,-6.015 ,16.633);
pinkRoof.rotation.set(THREE.Math.degToRad( 180 ),THREE.Math.degToRad( 90 ),0);

let saturatedHouseGeom = new THREE.PlaneBufferGeometry(2.30,3.40);
let saturatedHouse = new THREE.Mesh(saturatedHouseGeom,saturatedMaterial )
saturatedHouse.position.set(-4.455,-4.062 ,16.792 );

let saturatedRoofGeom = new THREE.PlaneBufferGeometry(2.38,1.48);
let saturatedRoof = new THREE.Mesh(saturatedRoofGeom,saturatedMaterial);
saturatedRoof.position.set(-4.478,-6.272, 16.837);
saturatedRoof.rotation.set(THREE.Math.degToRad( -45  ),THREE.Math.degToRad( 180 ) ,THREE.Math.degToRad( 0  ));

scene.add(saturatedHouse,saturatedRoof, pinkRoof,pinkHouse );

let bigBushMaterial =  new THREE.MeshBasicMaterial( { map: longBushTexture, side: THREE.DoubleSide, transparent: true});

let backgroundTreeGeom = new THREE.PlaneBufferGeometry(3.36,5.28,1,1);
let backgroundTree = new THREE.Mesh(backgroundTreeGeom,bigBushMaterial);
backgroundTree.position.set(14.598,-4.858 , 14.434);
backgroundTree.rotation.set(0, Math.PI,THREE.Math.degToRad( 180 ));

let backgroundTreeGeom2 = new THREE.PlaneBufferGeometry(3.36,3.82,1,1);
let backgroundTree2 = new THREE.Mesh(backgroundTreeGeom2,bigBushMaterial);
backgroundTree2.position.set(11.706,-4.858 , 14.434);
backgroundTree2.rotation.set(0,Math.PI ,Math.PI);

let backgroundTreeGeom3 = new THREE.PlaneBufferGeometry(3.74,1.68,1,1);
let backgroundTree3 = new THREE.Mesh(backgroundTreeGeom3,bigBushMaterial);
backgroundTree3.position.set(2.490,-3.32 , 16.855);
backgroundTree3.rotation.set(0,Math.PI ,Math.PI);

scene.add(backgroundTree,backgroundTree2,backgroundTree3);

let cloudTexture = new THREE.TextureLoader().load('assets/textures/clouds.jpg');

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
light.position.set(-103.233, -27.655, -28.907);
scene.add(light);
var helper = new THREE.DirectionalLightHelper( light, 5 );
scene.add( helper );
var ambient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( ambient );

var helperShadow = new THREE.CameraHelper( light.shadow.camera );
scene.add( helperShadow );


// backgroud
let textureSky = new THREE.TextureLoader().load('assets/textures/Sky.jpg')
scene.background = (cloudTexture);

// cam position
camera.position.set(-0.34692271,-1.6264739,-4.7234988414);

function animate() {
   requestAnimationFrame( animate );
   // console.log(camera.position);
   renderer.render( scene, camera );
}

animate();
