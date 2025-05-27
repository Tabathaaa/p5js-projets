let taille = 1;

function setup() {
  createCanvas(600, 600);
  background(random(255), random(255), random(255));
  rectMode(CENTER);
}

function draw() {
  stroke(color(random(255), random(255), random(255)));
  strokeWeight(4);
  noFill();
  
  square(width / 2, height / 2, taille);
  
  taille += 20;
  
  if (taille > width) {
    taille = 1;
  }
}


