const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
 
 var iss;
 var spacecraft;
 var hasDocked = false ;
 
 
 function preload(){
space1 = loadImage("spacecraft1.png")
space2 = loadImage("spacecraft2.png")
space3 = loadImage("spacecraft3.png")
space4 = loadImage("spacecraft4.png");
bg = loadImage("spacebg.jpg")
Iss = loadImage("iss.png")
 }
 

 function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,600);
 iss = createSprite(400,200,30,30)
 iss.addImage(Iss)
 
 spacecraft = createSprite(500,500,30,30)
spacecraft.addImage(space1)
spacecraft.scale = 0.25



}

function draw() {
  Engine.update(engine);
  background(bg);  

  

  if(!hasDocked){
      if(keyDown("LEFT_ARROW")){
        spacecraft.x-=0.4
        spacecraft.addImage(space3)
      }
      if(keyDown("RIGHT_ARROW")){
        spacecraft.x+=0.4
        spacecraft.addImage(space4)
      }
      if(keyDown("UP_ARROW")){
        spacecraft.y-=0.4
        spacecraft.addImage(space1)
      }
      if(keyDown("DOWN_ARROW")){
        spacecraft.y+=0
        spacecraft.addImage(space2)
        text.visible = false
      }
      
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked=true
    spacecraft.velocityX = 0
    spacecraft.velocityY = 0
    fill("yellow")
    textSize(20)
    text("docking sucessful",40,40)
  }
 

drawSprites()

}