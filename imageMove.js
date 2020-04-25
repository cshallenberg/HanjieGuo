let img1;
let img2;
let img3;
let img4;

let x1 = 50;
let y1 = 200;
let x2 = 150;
let y2 = 200;
let x3 = 250;
let y3 = 200;
let x4 = 350;
let y4 = 200;

let value = 0;

function preload() {
  img1 = loadImage('assets/1pad.png');
  img2 = loadImage('assets/2pad.png');
  img3 = loadImage('assets/3pad.png');
  img4 = loadImage('assets/4pad.png');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}


function keyPressed() {
  if (value === 1) {
    x1 = mouseX;
    y1 = mouseY;
  } else if (value === 2) {
    x2 = mouseX;
    y2 = mouseY;
  } else if (value === 3) {
    x3 = mouseX;
    y3 = mouseY;
  } else if (value === 4) {
    x4 = mouseX;
    y4 = mouseY;
  }
}

function draw() {
  background(255);
  image(img3, x3, y3, img3.width/4, img3.height/4);
  image(img4, x4, y4, img4.width/4, img4.height/4);
  image(img1, x1, y1, img1.width/4, img1.height/4);
  image(img2, x2, y2, img2.width/4, img2.height/4);
}