var boy, boyImg;
var reaper, reaperImg;
var rockImg, rock, rocksGroup;
var spooky;
var forestImg, forest;
var gameState = "play"

function preload(){
  boyImg = loadImage("boy.gif");
  reaperImg = loadImage("Grim_Reaper.webp");
  rockImg = loadImage("the-rock-sus.gif");
  forestImg = loadImage("background.jpg");  
  spookySound = loadSound("wrong-place-129242.mp3");
}

function setup() {
  createCanvas(windowWidth-600,windowHeight-1);
  
  forest = createSprite(windowWidth/2,350);
  forest.addImage("forest",forestImg);
  forest.velocityX = -8; 
  forest.scale = 3

  boy = createSprite(450,600,50,50);
  boy.addImage("boy",boyImg);
  boy.scale = 0.5;

  reaper = createSprite(150,600,50,50);
  reaper.addImage("reaper",reaperImg);
  reaper.scale = 1.25;

  rocksGroup = new Group();

}

function draw() {
  background(220);

  if(forest.x <windowWidth/2-600){
    forest.x = windowWidth/2
  }
  boy.velocityY= 5
  if (boy.y>600){
    boy.y=600;
  }
  if (boy.y<500){
    boy.y=boy.y+150
  }
  if (keyDown("space")||keyDown("up_arrow")){
    boy.y = boy.y-35 
  }


  spawnRocks();
  drawSprites();
  
}

function spawnRocks(){
  if (frameCount%90 === 0){
    var rock = createSprite(500,600);
    rock.addImage(rockImg);
    rock.scale = 20;
    
    rock.x = Math.round(random(400,700));
    rock.velocityX = -5;

    rock.lifetime = 800;

    rocksGroup.add(rock);

  }
}



