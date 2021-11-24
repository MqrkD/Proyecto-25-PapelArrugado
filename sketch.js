const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperMC, paperImg;

function preload() {
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperMC = new paperObject(100, 100, 70);

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(230);
 
  paperMC.setImage("imagen", paperImg);

  groundObject.display();
  dustbinObj.display();
  paperMC.display();

  if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body.paperObject.body.position, {x: 130, y:-145});
  }

}

