var bg, bgImg
var bottomGround
var topGround
var flappy, flappyIMG,flappyIMG2
var gameOver,hit,fly,point,die,gmover;
var obs1,obs2,obsup1,obsup2,obs1IMG,obs2IMG,obsup1IMG,obsup2IMG
var logo,speed;
var gamestate;
var wing,point,die;
var ob,Barrier,pos,swish;
var score
var flappy2
var dedno;
var dedno2;
var bird2,bird2IMG2

speed=-3



pos=200

function preload(){
bgImg = loadImage("assets/bg.png")
flappyIMG = loadImage("assets/bird.png");
logo =loadImage("assets/logo.png")
flappyIMG2 = loadImage("assets/fly_bird.png");
obs1IMG = loadImage("assets/Big tunnel.png");
obs2IMG = loadImage("assets/small tunnel.png")
obsup1IMG = loadImage("assets/obs1.png");
obsup2IMG = loadImage("assets/obs2.png");
wing = loadSound("assets/sfx_wing.wav");
point = loadSound("assets/sfx_point.wav");
die=loadSound("assets/sfx_die.wav");
gmover=loadImage("assets/flappyOver.png")
swish=loadSound("assets/sfx_swooshing.wav")
bird2=loadImage("assets/bird2.png");
bird2IMG2 = loadImage("assets/fly_bird2.png");
}

function setup(){

  createCanvas(920,500)
score=0
gamestate=1
//creating grps


obs1 = new Group();
obs2 = new Group();
obsup1 = new Group();
obsup2 = new Group();
Barrier = new Group()

//background image
bg = createSprite(460,250,1,1);
bg.addImage(bgImg);
bg.scale = 1.1

//creating top and bottom grounds
bottomGround = createSprite(200,510,800,1);

flappy = createSprite(100,pos,20,50);
flappy.addImage(flappyIMG)
flappy.scale = 0.07;

flappy2 = createSprite(100,pos,20,50);
flappy2.addImage(bird2)
flappy2.scale = 0.05;

gameOver=createSprite(460,250,20,20);
gameOver.addImage(gmover);

dedno=0
dedno2=0

topGround = createSprite(200,-15,800,1);

      
//creating bird     




}

function draw() {

if(dedno >0 && dedno2 >01){
  gamestate = 2
}

 console.log(gamestate) 

console.log(dedno)
console.log(dedno2)




 ob = Math.round(random(1,200));




if (Barrier.collide(flappy)){
  point.play()
  score=score+1
}

if(obs1.collide(flappy)){
 dedno=dedno+1

  
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();

  die.play()
  
}
if(obs2.collide(flappy)){
  dedno=dedno+1

  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();
  die.play()
}
if(obsup1.collide(flappy)){
  dedno=dedno+1

  
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();
  die.play()
}
if(obsup2.collide(flappy)){
  dedno=dedno+1

  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();
  die.play()
}

if (flappy.isTouching(topGround)){
  dedno=dedno+1
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();

  die.play()
}
if(flappy.isTouching(bottomGround)){
  dedno=dedno+1
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();

  swish.play()
}


if (Barrier.collide(flappy2)){
  point.play()
  score=score+1
}

if(obs1.collide(flappy2)){
dedno2=dedno2+1;

  
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();

  die.play()
  
}
if(obs2.collide(flappy2)){
  dedno2=dedno2+1;

  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();
  die.play()
}
if(obsup1.collide(flappy2)){
  dedno2=dedno2+1;

  
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();
  die.play()
}
if(obsup2.collide(flappy2)){
  dedno2=dedno2+1;

  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();
  die.play()
}

if (flappy2.isTouching(topGround)){
  dedno2=dedno2+1;
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();

  die.play()
}
if(flappy2.isTouching(bottomGround)){
  dedno2=dedno2+1;
  obs1.destroyEach();
  obs2.destroyEach();
  obsup1.destroyEach();
  obsup2.destroyEach();

  swish.play()
}

  if  (gamestate == 1){
flappy.addImage(flappyIMG)
flappy.scale=0.07

flappy2.addImage(bird2)
flappy2.scale=0.055

gameOver.visible=false;

if (World.frameCount % 100 == 0){

 if (ob<100){
   obstacle_1()
 }

 if(ob >100){
   obstacle_2()
 }
        
}  




if(dedno==0){
  if(keyWentDown("space")) {
            flappy.velocityY = -10 ;
            flappy.addImage(flappyIMG2);
            flappy.scale=0.05

            wing.play()
            
          }
}

if(dedno2==0){
      if(keyWentDown("enter")) {
            flappy2.velocityY = -10 ;
            flappy2.addImage(bird2IMG2);
            flappy2.scale=0.05

            wing.play()
            
          }
}


      
  }
  if(gamestate == 2){
    gameOver.visible = true;

if(mousePressedOver(gameOver)){
  gamestate =1;

  dedno=0;
  dedno2=0

flappy.y = 200
flappy2.y = 200

flappy.velocityY = 0
flappy2.velocityY = 0

score = 0
}


  }

  
  background("black");
        
   


          //adding gravity
           flappy.velocityY = flappy.velocityY + 2;
           flappy2.velocityY = flappy2.velocityY + 2;
   
        drawSprites();

        
}
function obstacle_1() {
  var obs1_ = createSprite(970,400, 10, 10);
 obs1_.addImage(obs1IMG);
  obs1_.velocityX = -10;
  obs1_.lifetime = 100;
  obs1_.scale = 0.3;
  obs1.add (obs1_);

  var obsup1_ = createSprite(970,40, 10, 10);
  obsup1_.addImage(obsup1IMG);
   obsup1_.velocityX = -10;
   obsup1_.lifetime = 100;
   obsup1_.scale = 0.3;
   obsup1.add (obsup1_);

   var barrier = createSprite(970,187, 10, 220);
 
   barrier.velocityX = -10;
   barrier.lifetime = 100;
   barrier.visible = false;
   Barrier.add (barrier);
 

}
function obstacle_2() {
  var obs2_ = createSprite(970,470, 10, 10);
 obs2_.addImage(obs2IMG);
  obs2_.velocityX = -10;
  obs2_.lifetime = 100;
  obs2_.scale = 0.3;
  obs2.add (obs2_);

  var obsup2_ = createSprite(970,100, 10, 10);
 obsup2_.addImage(obsup2IMG);
  obsup2_.velocityX = -10;
  obsup2_.lifetime = 100;
  obsup2_.scale = 0.3;
  obsup1.add (obsup2_);

  var barrier = createSprite(970,315, 10, 220);
 
   barrier.velocityX = -10;
   barrier.lifetime = 100;
   barrier.visible = false;
   
  Barrier.add (barrier)



}