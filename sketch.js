
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x)
obstaclesGroup = new Group();
bananaGroup = new Group();  
}


function draw() {
background(225);
  
  
  if(ground.x<0) {
    ground.x = ground .width/2;
  }
  
  
  if(keyDown("space") ) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnObstacles(); 
  spawnbanana(); 
drawSprites();
  
}
function  spawnbanana() {
  if(frameCount %80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(200, 300);
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 400;
    monkey.depth = banana.depth + 1;
    bananaGroup.add(banana);
  }
}

 function spawnObstacles() {
   if(frameCount % 300 === 0) {
     obstacle = createSprite(800,320,10,40);
     obstacle.velocityX = -6;
     
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.15;
     
     obstacle.lifetime = 300;
     
     obstaclesGroup.add(obstacle);
   }
 }