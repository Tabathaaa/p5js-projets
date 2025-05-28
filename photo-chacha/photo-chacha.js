let myImage;

function preload() {
  myImage = loadImage("https://tabathaaa.github.io/p5js-projets/photo-chacha/chacha.jpg");
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {
  background(0);

  let img = myImage.get();
  img.loadPixels();

  let shift = frameCount * 0.5;

  for (let y = 0; y < img.height; y += 1) {
    for (let x = 0; x < img.width; x += 1) {
      let i = 4 * (y * img.width + x);
      let r = img.pixels[i];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];

      let h = (frameCount + x + y) % 360;
      let s = 100;
      let br = (r + g + b) / 3;

      let c = color(h, s, br);
      img.pixels[i] = red(c);
      img.pixels[i + 1] = green(c);
      img.pixels[i + 2] = blue(c);
    }
  }

  img.updatePixels();
  image(img, 0, 0, width, height);
}
