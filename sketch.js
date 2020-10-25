const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground_;
var divisionheight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {

  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  for(var k = 0; k <= width; k = k+80){
    divisions.push(new division(k, height - divisionheight/2, 10, divisionheight));
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new plinko(j, 75));
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new plinko(j, 175));
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new plinko(j, 275));
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new plinko(j, 375));
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }
  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }
  ground_ = new ground(750, 240, 480, 10);

}

function draw() {
  background(255,255,255); 

  ground_.display();
  
}