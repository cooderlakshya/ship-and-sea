var bground
function preload(){
lakshya=loadImage('sea.png')
l=loadAnimation('ship-3.png','ship-2.png','ship-4.png','ship-1.png')
}

function setup(){
  createCanvas(600,600);
  bground=createSprite(300,300)
  bground.addImage(lakshya)
  lb=createSprite(300,300)
  bground.velocityX=2
  lb.addAnimation('sijis',l)
}

function draw() {
  background("blue");
 drawSprites()
 bground.scale=0.4
 lb.scale=0.3
 if (bground.x < 0)
 {bground.x=bground.width / 2}
 
}