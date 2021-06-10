const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world

var hasDocked = false
var spacecraft
var simg1,simg2,simg3,simg4
var bg
var issimg,iss
var box
function preload(){
bg = loadImage("spacebg.jpg")
issimg = loadImage("iss.png")
simg1 = loadImage("spacecraft1.png")
simg2 = loadImage("spacecraft2.png")
simg3 = loadImage("spacecraft3.png")
simg4 = loadImage("spacecraft4.png")
}

function setup() {
  engine = Engine.create()
  world = engine.world;
  createCanvas(800,400);
 iss = createSprite(400,150,1,1)
 iss.addImage(issimg)
 iss.scale = 0.7
 spacecraft = createSprite(200,400,1,1)
 spacecraft.addImage(simg1)
 spacecraft.scale = 0.2
box = createSprite(353,175,10,10)
box.visible = false
}

function draw() {
  background(bg);  
 
  if (hasDocked === false){
    if (keyDown(38)){
      spacecraft.y -= 0.5
      spacecraft.addImage(simg2)
    }

    if (keyDown(37)){
      spacecraft.x -= 0.5
      spacecraft.addImage(simg4)
    }
    if (keyDown(RIGHT_ARROW)){
      spacecraft.x += 0.5
      spacecraft.addImage(simg3)
    }
    if (keyDown(DOWN_ARROW)){
      spacecraft.addImage(simg2)
    }
  }
  if (spacecraft.isTouching(box)){
    hasDocked = true
    spacecraft.addImage(simg1)
     spacecraft.y = 215
    fill("white")
    textSize(20)
    text("Docking Successful!",350,350)
    }
  
  drawSprites();
}