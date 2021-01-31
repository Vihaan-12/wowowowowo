const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var star, star_image;
var backgroundImage;
var fairy, fairy_image;
var starBody;
var fairyBody;

function preload() {

fairy_image = loadAnimation ("fairy1.png", "fairy2.png");

star_image = loadImage ("star.png");

backgroundImage = loadImage("starnight.png");

}

function setup() {
  var canvas = createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  var body_options={
    isStatic:true
  }

  fairy=Bodies.rectangle(200,500,10,10,body_options);
  World.add(world,fairy)
  
star=Bodies.circle(340,25,20,body_options);
World.add(world,star);

starBody = createSprite(200,200,20);
starBody.addImage("starimg",star_image);

fairyBody = createSprite(10,10,30);
fairyBody.addAnimation("fairyimg", fairy_image);

}

function draw() {
  
  background(backgroundImage);
 Engine.update(engine)
  rectMode (CENTER);

  rect (fairy.position.x,fairy.position.y,10,10);

  ellipse(star.position.x,star.position.y,20);

  if (star.position.y > 470){
    var body_options={
      isStatic:true
    }
    star=Bodies.circle(star.position.x,star.position.y,20,body_options);
  World.add(world,star);
  }

starBody.x = star.position.x;
starBody.y = star.position.y;

fairyBody.x = fairy.position.x;
fairyBody.y = fairy.position.y;

fairyBody.scale = 0.20;

starBody.scale = 0.20;

  keyPressed();

  drawSprites();
}

function keyPressed() 
{ if(keyCode === RIGHT_ARROW)
{ fairy.position.x = fairy.position.x + 5; }
 if(keyCode === LEFT_ARROW)
{ fairy.position.x = fairy.position.x - 5; } 
if (keyCode === DOWN_ARROW) 
{ Matter.Body.setStatic(star,false);
 }
 
 }