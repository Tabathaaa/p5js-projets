function setup() {
  createCanvas(600, 600);
  background(255);
  
  fill(255, 204, 0);
  stroke(0);
  strokeWeight(2);
  ellipse(width / 2, height / 2, 200, 200);

  fill(0);
  noStroke();
  ellipse(width / 2 - 40, height / 2 - 30, 20, 20);
  ellipse(width / 2 + 40, height / 2 - 30, 20, 20);

  noFill();
  stroke(0);
  strokeWeight(4);
  arc(width / 2, height / 2 + 20, 100, 60, 0, PI);
}
