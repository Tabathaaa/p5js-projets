let boxSize = 20;

let posX = 33;
let vitesseX = 4;

let posY = 33;
let vitesseY = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(30, 30, 30);
  
  circle(posX, 500, boxSize);
  posX += vitesseX;

  if (posX > 600 || posX < 0) {
    vitesseX *= -1;
  }

  circle(300, posY, boxSize);
  posY += vitesseY;

  if (posY > 600 || posY < 0) {
    vitesseY *= -1;
  }
}
