 let boxSize = 60;

let posX = 123;
let posY = 234;

let vitX = 2;
let vitY = 1.234;

let r = Math.random() * 255;
let v = Math.random() * 255;
let b = Math.random() * 255;

function setup() {
  createCanvas(600, 600);
  background(30, 30, 30);
  print(r,v,b)
}

function draw() {
  background(0, 10);
  
  fill(r,v,b);
  
  square(posX, posY, boxSize);
  
  posX = posX + vitX;
  posY += vitY; // posY = posY + vitY
  
  
  if(posX + boxSize > width || posX < 0){
    vitX = vitX * -1;
    changeColor()
  }
 if ( posY + boxSize > height || posY < 0){
   vitY *= -1; // vitY = VitY * -1;
   changeColor()
 }
}


function changeColor (){
  r = Math.random() * 255;
  v = Math.random() * 255;
  b = Math.random() * 255;
}

function afficher (){
  square(posX, posY, boxSize);
}

function bouger (){ 
  posX = posX + vitX;
  posY += vitY; // posY = posY + vitY
}

function rebondir (){
  if(posX + boxSize > width || posX < 0 ){
    vitX = vitX * -1;
    changecolor()
  }
  
    if(posY + boxSize > height || posY < 0 ){
    vitY *= -1;
    changecolor()
  }
}