let myImage;
function preload(){
  myImage = loadImage("image.jpg")
}

function setup() {
  createCanvas(600, 600);
  background(220);
  
  image(myImage, 0, 0)
  
  myImage.loadPixels();
  
  //traitement d'image...
  for( let i = 0;   i < myImage.pixels.length; i +=4 ){
    myImage.pixels[i] += 30; //rouge
    myImage.pixels[i+1] += 60; //vert
    myImage.pixels[i+2] += 80; //bleu

  }
  myImage.updatePixels();
  
    image(myImage, 200, 0)

}

function draw() {}