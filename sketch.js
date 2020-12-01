var bullet;
var wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(500, 200, 50, 10);
  bullet.shapeColor=color("grey");
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80) 
  speed =random(223,321)
  weight = random(30,52)
thickness = random(22,83);
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}


function draw() {
  background(255,255,255);  
bullet.velocityX = speed;

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage= 0.5 * weight * speed* speed/(thickness *thickness *thickness);
}
  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
 
  if(damage<10){
    
    wall.shapeColor = color(0,255,0);
  }



drawSprites();
}


