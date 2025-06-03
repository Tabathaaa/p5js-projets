let colorVal;

function setup() {
  createCanvas(600, 600);
  colorVal = color(255, 0, 0);
  textAlign(CENTER, CENTER); // Centrer le texte horizontalement et verticalement
  textSize(32); // Taille du texte
  textFont('Arial'); // Police (optionnel)
}

function draw() {
  background(20,20,20);
  
  // Cercle coloré
  fill(colorVal);
  noStroke();
  circle(width / 2, height / 2, 300);

  // Texte au centre
  fill(255); // Couleur du texte (ici blanc)
  text("CLICK HERE!", width / 2, height / 2);
}

function mousePressed() {
  colorVal = color(random(255), random(255), random(255));
}