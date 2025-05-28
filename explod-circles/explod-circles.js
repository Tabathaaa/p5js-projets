class Bouncy {
  
  constructor (size, posX, posY, vitX,vitY){
    this.size=size;
     this.posX=posX;
     this.posY=posY;
    this.vitX=vitX;
    this.vitY=vitY;
    }// fin constructor
  

  bouger() {
    this.posX += this.vitX;
    this.posY += this.vitY;
  }

  rebondir () {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
    }
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
    }
  }

  afficher() {
    stroke(0);
    circle(this.posX, this.posY, this.size);
    noStroke();
  }

  update() {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
}// bouncy class

let mesBouncies = [];

mesBouncies[0] = new Bouncy(16,100,200,1.2,1.7);
mesBouncies[1] = new Bouncy(30,100,100,1.2,1.7);
mesBouncies[2] = new Bouncy(20,200,200,1.2,1.7);

function setup() {
  createCanvas(600, 600);
  frameRate(120);
  
  for (let i = 0; i < 300; i++) {
    console.log(i);
    mesBouncies[i] = new Bouncy(16, 300, 300, random(-2,2), random(-2,2) );
  }
    
}

function draw() {
  background(220,100,30);
  
  for( let i = 0; i < mesBouncies.length; i++){
    console.log(i);
    mesBouncies[i].update();
  }
  
//mesBouncies[0].update();
//mesBouncies[1].update();
//mesBouncies[2].update();
  
}