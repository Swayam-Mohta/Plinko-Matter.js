var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var circles = [];
var boundaries = [];
var plinkos = [];
var PLINKO1;
var PLINKO2;
var PLINKO3;
var PLINKO4;
var PLINKO5;
var PLINKO6;

var PLINKO7,
  PLINKO8,
  PLINKO9,
  PLINKO10,
  PLINKO11,
  PLINKO12,
  PLINKO13,
  PLINKO14,
  PLINKO15,
  PLINKO16,
  PLINKO17,
  PLINKO18,
  PLINKO19,
  PLINKO20;

function setup() {
  createCanvas(300, 300);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  boundaries.push(new Boundary(200, height, 1000, 20, 0));

  boundaries.push(new Boundary(10, 280, 10, 100, 0));
  boundaries.push(new Boundary(50, 280, 10, 100, 0));
  boundaries.push(new Boundary(100, 280, 10, 100, 0));
  boundaries.push(new Boundary(150, 280, 10, 100, 0));
  boundaries.push(new Boundary(200, 280, 10, 100, 0));
  boundaries.push(new Boundary(250, 280, 10, 100, 0));
  boundaries.push(new Boundary(295, 280, 10, 100, 0));

  var options = {
    isStatic: true,
  };

  PLINKO1 = Bodies.circle(50, 200, 10, options);
  PLINKO2 = Bodies.circle(100, 200, 10, options);
  PLINKO3 = Bodies.circle(150, 200, 10, options);
  PLINKO4 = Bodies.circle(200, 200, 10, options);
  PLINKO5 = Bodies.circle(250, 200, 10, options);
  PLINKO6 = Bodies.circle(300, 200, 10, options);

  PLINKO20 = Bodies.circle(10, 125, 10, options);
  PLINKO7 = Bodies.circle(50, 125, 10, options);
  PLINKO8 = Bodies.circle(100, 125, 10, options);
  PLINKO9 = Bodies.circle(150, 125, 10, options);
  PLINKO10 = Bodies.circle(200, 125, 10, options);
  PLINKO11 = Bodies.circle(250, 125, 10, options);
  PLINKO12 = Bodies.circle(300, 125, 10, options);

  PLINKO19 = Bodies.circle(10, 50, 10, options);
  PLINKO13 = Bodies.circle(50, 50, 10, options);
  PLINKO14 = Bodies.circle(100, 50, 10, options);
  PLINKO15 = Bodies.circle(150, 50, 10, options);
  PLINKO16 = Bodies.circle(200, 50, 10, options);
  PLINKO17 = Bodies.circle(250, 50, 10, options);
  PLINKO18 = Bodies.circle(300, 50, 10, options);

  World.add(world, [
    PLINKO2,
    PLINKO3,
    PLINKO4,
    PLINKO5,
    PLINKO6,
    PLINKO1,
    PLINKO7,
    PLINKO8,
    PLINKO9,
    PLINKO10,
    PLINKO11,
    PLINKO12,
    PLINKO13,
    PLINKO14,
    PLINKO15,
    PLINKO16,
    PLINKO17,
    PLINKO18,
    PLINKO19,
    PLINKO20,
  ]);
}

function draw() {
  background(0);

  if (frameCount % 50 === 0) {
    circles.push(new Circle(150, 0, 5));
  }

  console.log(frameCount);

  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  ellipse(5, 200, 10, 10);
  ellipse(50, 200, 10, 10);
  ellipse(100, 200, 10);
  ellipse(150, 200, 10);
  ellipse(200, 200, 10);
  ellipse(250, 200, 10);
  ellipse(300, 200, 10);

  ellipse(10, 125, 10);
  ellipse(50, 125, 10);
  ellipse(100, 125, 10);
  ellipse(150, 125, 10);
  ellipse(200, 125, 10);
  ellipse(250, 125, 10);
  ellipse(300, 125, 10);

  ellipse(10, 50, 10);
  ellipse(50, 50, 10);
  ellipse(100, 50, 10);
  ellipse(150, 50, 10);
  ellipse(200, 50, 10);
  ellipse(250, 50, 10);
  ellipse(300, 50, 10);
}
