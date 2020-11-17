
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree = new Tree(670,150,550,600)
	//boy = new Boy(130,510,250,300);
	rock = new Rock(180,540,60,60);
  throwing = new Throwing(rock.body,{x:180, y:540});
  mango = new Mango(600,350,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  //displaying the Bodies here:
  image(boy,130,460,250,300);
  ground.display();
  tree.display();
  //boy.display();
  rock.display();
  throwing.display();
  mango.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x: mouseX , y: mouseY});
    console.log("dragged");
}

function mouseReleased(){
    throwing.fly();
    console.log("released");
}


