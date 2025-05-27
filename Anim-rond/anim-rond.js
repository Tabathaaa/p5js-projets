function setup() {
  createCanvas(600, 600);
  background(300,150, 200);
}

 let taille = 1;

function draw() {
  stroke(255);
  strokeWeight(2);
  noFill();
  circle(300,300,taille);
  taille = taille + 10;
} 