const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var slingShot;
var pos1 = [];
var backgroundImg;
var block = [];
var block1 = [];
var block2 = [];
var block3 = [];
var block4 = [];
var block5 = [];
var score = 0;
var bag = 0;

//function preload() {
//  getBg();  
//}

function setup() {

  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,320,400,20);
  ground2 = new Ground(800,250,200,20);
  ground3 = new Ground(500,380,1000,5);

  for(var i =210;i<600;){
    pos1.push([i,300]);
    i = i + 20 
  }
 
  var l1 = 20;
  var b1 = 20;
  var col1 = "cyan";

  for (var i = 0;i<pos1.length;i++){
    block[i] = new Block(pos1[i][0],pos1[i][1],l1,b1,col1);
  }
    
  var x = 220;
  var b1 = 40;
  var col1 = "blue";

  for (var i = 0; i<19; i++){
    block1[i] = new Block(x,270,l1,b1,col1);
    x = x + 20;
  } 
    
    
  var x = 230;
  var b1 = 20;
  var col1 = "yellow";

  for (var i = 0; i<18; i++){
    block2[i] = new Block(x,240,l1,b1,col1);
    x = x + 20;
  }

  var x = 710;
  var b1 = 20;
  var col1 = "green";

  for (var i = 0; i<10; i++){
    block3[i] = new Block(x,230,l1,b1,col1);
    x = x + 20;
  }
 
  var x = 720;
  var b1 = 20;
  var col1 = "orange";

  for (var i = 0; i<9; i++){
    block4[i] = new Block(x,210,l1,b1,col1);
    x = x + 20;
  }

  var x = 740;
  var l1 = 40;
  var b1 = 40;
  var col1 = "magenta";

  for (var i = 0; i<4; i++){
    block5[i] = new Block(x,180,l1,b1,col1);
    x = x + 40;
  }

 
  polygon = new Polygon(100,200,20);

  slingShot = new SlingShot(polygon.body,{x:200,y:100});
}

function draw() {
//  if(backgroundImg){
//    background(backgroundImg);
//}
  background(200,200,200);
  Engine.update(engine);
 
  text("Press Space to play again!!",350 ,50);
  textSize(35);
  fill("white");
  text("Score : "+score, 700,50);
 
  ground1.display();
  ground2.display();
  ground3.display();
  
  for (var i=0;i<pos1.length;i++){
    block[i].display();
    block[i].score();
  }
  
  for (var i=0;i<19;i++){
    block1[i].display();
    block1[i].score();

  }
  
  for (var i=0;i<18;i++){
    block2[i].display();
    block2[i].score();
  }

  for (var i=0;i<10;i++){
    block3[i].display();
    block3[i].score();
  }

  for (var i=0;i<9;i++){
    block4[i].display();
    block4[i].score();
  }

  for (var i=0;i<4;i++){
    block5[i].display();
    block5[i].score();
  }


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
/*
async function getBg(){
  //http://worldtimeapi.org/api/timezone/Asia/Kolkata
  var response  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson  = await response.json();
  var hour = responseJson.datetime.slice(11,13);
  if(hour>=06 && hour<16){
    backgroundImg = loadImage("bg.png");
  }
  else{
    backgroundImg = loadImage("bg2.jpg");
  }
  
}*/

