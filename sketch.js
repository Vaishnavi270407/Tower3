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

  block1 = new Block(310,300,20,20);
  block2 = new Block(330,300,20,20);
  block3 = new Block(350,300,20,20);
  block4 = new Block(370,300,20,20);
  block5 = new Block(390,300,20,20);
  block6 = new Block(410,300,20,20);
  block7 = new Block(430,300,20,20);
  block8 = new Block(450,300,20,20);
  block9 = new Block(470,300,20,20); 
  block10 = new Block(490,300,20,20);
  
  block11 = new Block(320,280,20,20);
  block12 = new Block(340,280,20,20);
  block13 = new Block(360,280,20,20);
  block14 = new Block(380,280,20,20);
  block15 = new Block(400,280,20,20);
  block16 = new Block(420,280,20,20);
  block17 = new Block(440,280,20,20);
  block18 = new Block(460,280,20,20);
  block19 = new Block(480,280,20,20);

  block20 = new Block(330,260,20,20);
  block21 = new Block(350,260,20,20);
  block22 = new Block(370,260,20,20);
  block23 = new Block(390,260,20,20);
  block24 = new Block(410,260,20,20);
  block25 = new Block(430,260,20,20);
  block26 = new Block(450,260,20,20);
  block27 = new Block(470,260,20,20);
  
  
  block28 = new Block(610,230,20,20);
  block29 = new Block(630,230,20,20);
  block30 = new Block(650,230,20,20);
  block31 = new Block(670,230,20,20);
  block32 = new Block(690,230,20,20);
  block33 = new Block(710,230,20,20);
  block34 = new Block(730,230,20,20);
  block35 = new Block(750,230,20,20);
  block36 = new Block(770,230,20,20);
  block37 = new Block(790,230,20,20);

  block38 = new Block(620,210,20,20);
  block39 = new Block(640,210,20,20);
  block40 = new Block(660,210,20,20);
  block41 = new Block(680,210,20,20);
  block42 = new Block(700,210,20,20);
  block43 = new Block(720,210,20,20);
  block44 = new Block(740,210,20,20);
  block45 = new Block(760,210,20,20);
  block46 = new Block(780,210,20,20);

  block47 = new Block(630,190,20,20);
  block48 = new Block(650,190,20,20);
  block49 = new Block(670,190,20,20);
  block50 = new Block(690,190,20,20);
  block51 = new Block(710,190,20,20);
  block52 = new Block(730,190,20,20);
  block53 = new Block(750,190,20,20);
  block54 = new Block(770,190,20,20);


  polygon = new Polygon(100,200,20);

  slingShot = new SlingShot(polygon.body,{x:200,y:100});
}

function draw() {

  background(200,200,200);  
  Engine.update(engine);
  
  ground1.display();
  ground2.display();

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
  block51.display();
  block52.display();
  block53.display();
  block54.display();

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
