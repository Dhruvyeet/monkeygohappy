var gameState = "PLAY"
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, stoneGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500, 500);
  
  monkey = createSprite(50,height-70,20,50);
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
invisibleGround = createSprite(width/2,height-10,width,10);
  invisibleGround.visible = false;
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
  score = 0;  

  
}


function draw() {
  background("red");
  text("Survival time : "+ score, 300,50);
  console.log(monkey.y)
  if (gameState==="PLAY"){
    score = score + Math.round(getFrameRate()/60);
    
  
    if(keyDown("space") && monkey.y >= 423) {
      monkey.velocityY = -17;
}
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
    spawnbanana();
    spawnstones();
  
  drawSprites();
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(500,30,40,10);
    banana.y = Math.round(random(200,350));
    banana.addImage(bananaImage);
    banana.scale = 0.2 ;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

function spawnstones() {
//write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var stone = createSprite(500,480,40,10);
    stone.addImage(obstacleImage);
    stone.scale = 0.2;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    
    
    
    //add each cloud to the group
    stoneGroup.add(stone);
  }
    
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}






