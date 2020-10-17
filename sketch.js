const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var slingShot;

function setup() {

  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,320,200,20);
  ground2 = new Ground(700,250,200,20);
  ground3 = new Ground(500,380,1000,5);

  block1 = new Block(310,300,20,20, "cyan");
  block2 = new Block(330,300,20,20, "cyan");
  block3 = new Block(350,300,20,20,"cyan");
  block4 = new Block(370,300,20,20,"cyan");
  block5 = new Block(390,300,20,20,"cyan");
  block6 = new Block(410,300,20,20,"cyan");
  block7 = new Block(430,300,20,20,"cyan");
  block8 = new Block(450,300,20,20,"cyan");
  block9 = new Block(470,300,20,20,"cyan"); 
  block10 = new Block(490,300,20,20,"cyan");
  
  block11 = new Block(320,270,20,40, "Blue");
  block12 = new Block(340,270,20,40, "Blue");
  block13 = new Block(360,270,20,40, "Blue");
  block14 = new Block(380,270,20,40, "Blue");
  block15 = new Block(400,270,20,40, "Blue");
  block16 = new Block(420,270,20,40, "Blue");
  block17 = new Block(440,270,20,40, "Blue");
  block18 = new Block(460,270,20,40, "Blue");
  block19 = new Block(480,270,20,40, "Blue");

  block20 = new Block(330,240,20,20, "yellow");
  block21 = new Block(350,240,20,20, "yellow");
  block22 = new Block(370,240,20,20, "yellow");
  block23 = new Block(390,240,20,20, "yellow");
  block24 = new Block(410,240,20,20, "yellow");
  block25 = new Block(430,240,20,20, "yellow");
  block26 = new Block(450,240,20,20, "yellow");
  block27 = new Block(470,240,20,20, "yellow");
  
  
  block28 = new Block(610,230,20,20, "green");
  block29 = new Block(630,230,20,20, "green");
  block30 = new Block(650,230,20,20, "green");
  block31 = new Block(670,230,20,20, "green");
  block32 = new Block(690,230,20,20, "green");
  block33 = new Block(710,230,20,20, "green");
  block34 = new Block(730,230,20,20, "green");
  block35 = new Block(750,230,20,20, "green");
  block36 = new Block(770,230,20,20, "green");
  block37 = new Block(790,230,20,20, "green");

  block38 = new Block(620,210,20,20, "orange");
  block39 = new Block(640,210,20,20, "orange");
  block40 = new Block(660,210,20,20, "orange");
  block41 = new Block(680,210,20,20, "orange");
  block42 = new Block(700,210,20,20, "orange");
  block43 = new Block(720,210,20,20, "orange");
  block44 = new Block(740,210,20,20, "orange");
  block45 = new Block(760,210,20,20, "orange");
  block46 = new Block(780,210,20,20, "orange");

  block47 = new Block(640,180,40,40, "magenta");
  block48 = new Block(680,180,40,40, "magenta");
  block49 = new Block(720,180,40,40, "magenta");
  block50 = new Block(760,180,40,40, "magenta");

  polygon = new Polygon(100,200,20);

  slingShot = new SlingShot(polygon.body,{x:200,y:100});
}

function draw() {

  background(200,200,200);  
  Engine.update(engine);
 
  text("Press Space to play again!!",350 ,50);
 
  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();

  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();

  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();

  block47.display();
  block48.display();
  block49.display();
  block50.display();
  
  slingShot.display();
  polygon.display();

  drawSprites();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(polygon.body,{x:100,y:100})
		slingShot.attach(polygon.body);
	}
}
