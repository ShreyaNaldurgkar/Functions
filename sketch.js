var fixedRect;
var movingRect;
var gameobject1,gameObject2;
var result, result2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect=createSprite(200,200,25,25);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;

  gameobject1 = createSprite(600, 200, 40, 60);
  gameobject1.shapeColor = "yellow";
  gameobject1.debug = true;
  gameobject1.velocityX=-2;

  gameObject2 = createSprite(200,200,20,20);
  gameObject2.velocityX=2;

}

function draw() {
  background("black");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x - fixedRect.x);

  result = isTouching(movingRect, fixedRect);
  console.log(result);

  result2 = isTouching (movingRect, gameobject1);
  if(result2 == true){
    gameobject1.shapeColor = "blue";
  }else{
    gameobject1.shapeColor = "yellow";
  }
  bounceOff(gameobject1,gameObject2);
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x <= object1.width/2+object2.width/2
    && object2.x - object1.x <= object1.width/2+object2.width/2 
    && object1.y - object2.y <= object1.height/2+object2.height/2
    &&object2.y - object1.y <= object1.height/2+object2.height/2 ){
    return true;
  }
  else{
   return false;
  }
}

function bounceOff(o1,o2){
if(o1.x - o2.x <= o1.width/2+o2.width/2
  && o2.x - o1.x<= o1.width/2+o2.width/2){
  o1.velocityX = o1.velocityX*(-1);
  o2.velocityX = o2.velocityX*(-1);
}
if(o1.y - o2.y <= o1.height/2+o2.height/2
  && o2.y - o1.y <= o1.height/2+o2.height/2){
  o1.velocityY = o1.velocityY*(-1);
  o2.velocityY = o2.velocityY*(-1);
  

}
}