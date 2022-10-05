
var trex ,trex_running,trex_collided;
function preload(){

  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided=loadAnimation("trex_collided.png");
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,120,20,100);
  ground=createSprite(200,180,400,20);
 trex.addAnimation("runnig",trex_running);
 trex.scale=0.5;
 //trex.x=50;

  //crear sprite de Trex
 
}

function draw(){
  background("white")
 if(keyDown("space")){
  trex.velocityY=-10;
 }
    trex.velocityY=trex.velocityY +0.5;
      trex.collide(ground);
  drawSprites();
}
