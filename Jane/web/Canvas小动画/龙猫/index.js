// colors
var white = '#fff';
var gray = '#aaa';
var darkgray = '#999';
var yellow = '#f4f5cf';
var isRotating = true;

// create totoro
let totoro = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  translate: {y:25},
  onDragStart: function() {
    isRotating = false;
  },
  onDragEnd: function(){
    isRotating = true;
  }
});

let body = new Zdog.Ellipse({
  addTo: totoro,
  width:130,
  height:200,
  stroke:150,
  color: gray,
});

let face = body.copy({
  stroke:140,
  translate: {y:-140},
  scale: {y:0.05, x:0.35},
});



let bellymarks = new Zdog.Group({
  addTo: totoro,
  translate: {z:70},
  rotate:{x:-0.05}
});

let belly = new Zdog.Cylinder({
  addTo: bellymarks,
  diameter: 200,
  length: 10,
  color: yellow,
  translate: {y:40},
  scale: {y:1.15},
});

let bellymark = new Zdog.Ellipse({
  addTo: bellymarks,
  diameter: 30,
  quarters: 2,
  stroke: 10,
  color: gray,
  translate: {y:-20},
  rotate: {z:-1.56},
  scale: {x:0.75},
});

let bellymark2 = bellymark.copy({
  translate: {y:0, x:50},
});

let bellymark3 = bellymark.copy({
  translate: {y:0, x:-50},
});

let eyes = new Zdog.Group({
  addTo: totoro,
  translate: {z:60},
});

let eye = new Zdog.Cylinder({
  addTo: eyes,
  diameter: 25,
  length: 1,
  color: gray,
  backface:white,
  translate: {y:-160, x:-50}
});

let eye2 = eye.copy({
  translate: {y:-160, x:50}
});

let pupil = eye.copy({
  addTo: eyes,
  diameter: 10,
  color:gray,
  backface: '#000',
  translate: {y:-160, x:-50, z:1}
});

let pupil2 = pupil.copy({
  translate: {y:-160, x:50, z:1}
});

let mouth = new Zdog.Polygon({
  addTo: eyes,
  radius: 30,
  sides: 3,
  stroke: 20,
  fill: white,
  color: white,
  translate: {y:-120, x:0, z:-5},
  scale: {y:0.25, x:1.5},
  rotate: {x:3.15},
});

let nose = mouth.copy({
  color:'#000',
  radius:5,
  stroke:10,
  translate: {y:-160, x:0, z:1},
});

let ear = new Zdog.Cylinder({
  addTo: totoro,
  diameter: 12,
  length: 50,
  stroke: false,
  color: gray,
  backface: gray,
  translate: {y:-210, x:-50, z:0},
  rotate: {x:1.57},
});

let ear2 = ear.copy({
  addTo: totoro,
  translate: {y:-210, x:50, z:0},
});

let earTop = new Zdog.Ellipse({
  addTo: totoro,
  width:5,
  height:10,
  stroke:20,
  color: gray,
  translate: {y:-250, x:-50, z:0},
  scale: {y:3}
});

let earTop2 = earTop.copy({
  addTo: totoro,
  translate: {y:-250, x:50, z:0},
});

let arm = new Zdog.Ellipse({
  addTo: totoro,
  width:10,
  height:30,
  stroke:50,
  color: gray,
  translate: {y:-10, x:-125, z:0},
  scale: {y:3.25, x:1.5, z:2},
  rotate: {z:0.25},
});

let arm2 = arm.copy({
  addTo: totoro,
  translate: {y:-10, x:125, z:0},
  rotate: {z:-0.25},
});

let claw = new Zdog.Ellipse({
  addTo: totoro,
  width:10,
  height:20,
  stroke:10,
  fill: true,
  color: darkgray,
  translate: {y:60, x:-155, z:0},
  scale: {x:0.05, z:5},
  rotate: {z:0.15},
});

let claw2 = claw.copy({
  addTo: totoro,
   translate: {y:55, x:-155, z:15},
    rotate: {z:0.25},
});

let claw3 = claw.copy({
  addTo: totoro,
   translate: {y:55, x:-155, z:-15},
  rotate: {z:0.25},
});

let claw4 = claw.copy({
  addTo: totoro,
   translate: {y:55, x:155, z:0},
  rotate: {z:-0.15},
});

let claw5 = claw.copy({
  addTo: totoro,
   translate: {y:55, x:155, z:-15},
  rotate: {z:-0.15},
});

let claw6 = claw.copy({
  addTo: totoro,
   translate: {y:55, x:155, z:15},
  rotate: {z:-0.15},
});


let foot = new Zdog.Hemisphere({
  addTo: totoro,
  diameter: 80,
  stroke: false,
  color: gray,
  backface: darkgray,
  translate: {y:170, x:70, z:0},
  rotate: {x:1.65},
});

let foot2 = foot.copy({
  addTo: totoro,
  translate: {y:170, x:-70, z:0},
});

totoro.updateRenderGraph();

function animate() {
  if ( isRotating ) {
  totoro.rotate.y += 0.0025;
  }
  totoro.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();