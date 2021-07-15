const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var world;
var leftSide, rightSide;
var radius = 40;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	ball = Bodies.circle(200,350,radius/2,ball_options);
	World.add(world,ball);
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(500,580,20,200);
	rightSide = new Ground(650,580,20,200);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);  
  background(0);
 
  Engine.update(engine); 
 	ellipse(ball.position.x,ball.position.y,radius,radius);
  	groundObj.display();
	leftSide.display();
	rightSide.display();
  

}
 
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball,ball.position,{x:30,y:-78});
  
	}
}

