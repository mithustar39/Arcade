var swordIMG, sword

var PLAY=1;
var END=0;
var gameState=1;

var r;
//var fruit,fruit1,fruit2,fruit3,fruit4
var fruit1IMG,fruit2IMG,fruit3IMG,fruit4IMG

var position

var knifeSound

var monster,monsterIMG

var gameOverIMG,gameOverSound

var score=0;

function preload(){
  swordIMG= loadImage("sword.png")
 
  fruit1IMG=loadImage("fruit1.png")
  fruit2IMG=loadImage("fruit2.png")
  fruit3IMG=loadImage("fruit3.png")
  fruit4IMG=loadImage("fruit4.png")
  
  knifeSound=loadSound("knifeSwooshSound.mp3");
  
  monsterIMG=loadAnimation("alien1.png","alien2.png")

  gameOverIMG=loadImage("gameover.png");
  
  gameOverSound=loadSound("gameover.mp3")
}

function setup(){
  sword=createSprite(40,200,20,20);
  sword.addImage(swordIMG);
  sword.scale=0.5;
  
  fruitGroup=new Group();
  enemyGroup=new Group();
}

function draw(){
  background("white");
  text("score:"+score,50,50)
  
  if(gameState==1){
    sword.x=World.mouseX
    sword.y=World.mouseY
     fruits();
     Enemy();
    //apear from both sides
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    knifeSound.play();
    score=score+2;
  }
  else{
  
  if(sword.isTouching(enemyGroup)){
    gameState=0;
    gameOverSound.play();
    fruitGroup.destroyEach();
    fruitGroup.setvelocityX=0;
    enemyGroup.destroyEach();
    enemyGroup.setvelocityX=0;
    sword.addImage(gameOverIMG);
    sword.x=200;
    sword.y=200;
    sword.scale=1;
  }
  
}
  
 
  drawSprites();
}

function fruits(){
  
  
  if(World.frameCount%80===0){
    
    position=Math.round(random(1,2))
  fruit=createSprite(400,200,20,20)
  if(position==1){
    fruit.x=400;
    fruit.velocityX=-((7+(score/4)))
  }
  else {
    if(position==2){
    fruit.x=0;
    fruit.velocityX=((7+(score/4)))
    }
  }
    fruit.scale=0.2;
    
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1IMG);
    }
    
    if(r==2){
      fruit.addImage(fruit2IMG);
    }
    
    if(r==3){
      fruit.addImage(fruit3IMG);
    }
    if(r==4){
      fruit.addImage(fruit4IMG);
    }
    
    fruit.y=Math.round(random(50,340));
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
    
  }
  
  }
}

function Enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterIMG)
    monster.y=Math.round(random(100,300));
    monster.velocityX=-(8+(score/10));
    monster.setLifetime=50;
    
    enemyGroup.add(monster)
  }}
