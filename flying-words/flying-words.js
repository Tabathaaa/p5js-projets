let bouncy = {
  
  size: 16,
  posX: 100,
  posY: 200,
  vitX: 1.2,
  vitY: 0.9,
  name: "Prout",
  
  bouger: function (){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;  // posY = posY + vitY
  },
  
  rebondir: function (){
    if( this.posX + this.size > width || this.posX < 0 ){
      this.vitX = this.vitX * -1;
    }
    if( this.posY + this.size > height || this.posY < 0 ){
      this.vitY *= -1;  // vitY = vitY * -1;
    }
  },
  
  afficher: function (){
    stroke(0);
    circle(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY-4);
  },
  
  update: function(){
    this.bouger();
    this.rebondir();
    this.afficher();
  }

}; // bouncy object


let Blabla = Object.create(bouncy);
Blabla.name = "Pipi";
Blabla.vitX = 1.5;

let Chaton = Object.create(bouncy);
Chaton.name = "Toilettes";
Chaton.vitY = 1.9;


function setup() {
  createCanvas(600, 600);
  frameRate(120);
}

function draw() {
  background(random(255), random(255), random(255));
  bouncy.update();
  Blabla.update();
  Chaton.update();
} 