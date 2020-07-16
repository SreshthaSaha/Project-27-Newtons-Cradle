var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {	
	createCanvas(1600, 700);
		
	engine = Engine.create();
	world = engine.world;

	bobDiameter=50;
	startBobPositionX=800;
	startBobPositionY=500;

	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter,0);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter,0);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter,0);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter,0);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter,0);
	// radiusX = 40; 
	// radiusY = 70;

	// bob1 = new Bob(500,500,radiusX,radiusY);
	// bob2 = new Bob(430,500,radiusX,radiusY);
	// bob3 = new Bob(360,500,radiusX,radiusY);
	// bob4 = new Bob(290,500,radiusX,radiusY);
	// bob5 = new Bob(220,500,radiusX,radiusY);

	 roof = new Roof(800,100,1600/6,20);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Rope(bob3.body,roof.body,0,0)
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(200);

  rope1.display();
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display();  
  bob1.display();
  bob2.display();
  bob3.display(); 
  bob4.display(); 
  bob5.display();
  roof.display();
  
  //keyPressed();
    
  drawSprites();
   
}
function keyPressed() {
	if (keyCode === UP_ARROW) {		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-45});
	  //Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10,y: 0});  
	}
}




