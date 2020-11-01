
var monkey , monkey_running;
var  bananaImage,  obstacleImage;
var foodGroup, obstacleGroup;
var score,survival,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  
    obstacleGroup = createGroup();
    foodGroup = createGroup();
  
  
  score = 0;
  survival = 0;
}


function draw() {
background  ("white");
  
  text("Survival Time: "+ survival, 150,50);  
  survival = survival + Math.round(getFrameRate()/60);
  
  text("Score:"+ score,300,50);
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
     monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground);
  
  bananas(); 
  obstacles();
  
  if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach();
  }
  
  
  drawSprites();
  
}

function bananas(){
  if(frameCount% 80===0){
    var banana = createSprite(400,120,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 400;
    banana.scale = 0.1;
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount% 300===0){
    var obstacle = createSprite(400,330,20,20);
     obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
     obstacleGroup.add(obstacle);
    obstacle.lifetime = 400;
  }
}
