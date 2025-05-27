let oldX = 0;
let oldY = 0;

function setup() {
  createCanvas(600, 600);
  
  let R = random(225);
  let V = random(225);
  let B = random(225);
  background(R,V,B);
}

function draw() {
  // mouseX - oldX
  
  oldX = oldX + (mouseX - oldX) / 100;
  oldY += (mouseY - oldY) / 100;
  circle (oldX, oldY, 50)
}

function mouseClicked (){
  let R = random(225);
  let V = random(225);
  let B = random(225);
  fill (R,V,B)
}

function keyPressed(){
  if(key == "s"){
  save("drawing.png")
  }
  
  if( key == "x"){
   let R = random(225);
   let V = random(225);
   let B = random(225);
   background(R,V,B);
  }
}