var slider;
var edges = [];
var brickGroup;
var ball;
var ballImg;
var tope , bottom, right, left;
var brick1 ,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12;
var score = 0;

function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();
  slider = createSprite(400, 350 , 100,10)
  brick1 = createSprite(400, 100 , 80,30)
  brick2 = createSprite(500, 100 , 80,30)
  brick3 = createSprite(600, 100 , 80,30)
  brick4 = createSprite(700, 100 , 80,30)
  brick5 = createSprite(300, 100 , 80,30)
  brick6 = createSprite(200, 100 , 80,30)
  brick7 = createSprite(100, 100 , 80,30)
  brick8 = createSprite(450, 140 , 80,30)
  brick9 = createSprite(550, 140 , 80,30)
  brick10 = createSprite(350, 140 , 80,30)
  brick11 = createSprite(250, 140 , 80,30)
  brick12 = createSprite(400, 180 , 80,30)
  tope = createSprite(400,0,800,10)
  bottom = createSprite(400,400,800,10)
  right = createSprite(800,400,10,800)
  left = createSprite(0,400,10,800)


  brickGroup = createGroup()

  brickGroup.add(
    brick1
    
  )
  brickGroup.add(brick2)
  brickGroup.add(brick3)
  brickGroup.add(brick4)
  brickGroup.add(brick5)
  brickGroup.add(brick6)
  brickGroup.add(brick7)
  brickGroup.add(brick8)
  brickGroup.add(brick9)


  brickGroup.add(brick10)
  brickGroup.add(brick11)
  brickGroup.add(brick12)





  ball = createSprite(400,300, 15,15)
  ball.addImage(ballImg)
  ball.scale = 0.2

  

    


}

function preload(){
  ballImg = loadImage('ball.png')
}

function draw() {
  background("blue"); 
  text( "Your score -:" + " " +score , 700, 30)
  ball.bounceOff(slider)
  ball.bounceOff(tope)
  ball.bounceOff(right)
  ball.bounceOff(bottom)
  ball.bounceOff(left)

for(var i = 0; i < brickGroup.length; i++ ){
  if(ball.isTouching(brickGroup.get(i))){
    console.log("whgdbbx")
    brickGroup.get(i).destroy()
    score = score + 20
  }
}

if(ball.isTouching(slider)){
  ball.velocityY = ball.velocityY + 2
  ball.velocityX = ball.velocityY - 0.9
}


  
  slider.x = mouseX
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    ball.velocityY = ball.velocityY + 2
    ball.velocityX = ball.velocityX - 0.9
    
  }
}