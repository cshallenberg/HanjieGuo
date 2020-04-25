let img1;
let img2;
let img3;
let img4;

let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

function preload() {
  img1 = loadImage('assets/1pad.png');
  img2 = loadImage('assets/2pad.png');
  img3 = loadImage('assets/3pad.png');
  img4 = loadImage('assets/4pad.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  x1 = width/5;
  x2 = 2*(width/5);
  x3 = 3*(width/5);
  x4 = 4*(width/5);
  y1 = height/2;
  y2 = height/2;
  y3 = height/2;
  y4 = height/2;    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
    if (keyIsDown(49)) {
    x1 = mouseX;
    y1 = mouseY;
  } 
  if (keyIsDown(50)) {
    x2 = mouseX;
    y2 = mouseY;
  } 
  if (keyIsDown(51)) {
    x3 = mouseX;
    y3 = mouseY;
  } 
  if (keyIsDown(52)) {
    x4 = mouseX;
    y4 = mouseY;
  }
  image(img3, x3, y3, img3.width/4, img3.height/4);
  image(img4, x4, y4, img4.width/4, img4.height/4);
  image(img1, x1, y1, img1.width/4, img1.height/4);
  image(img2, x2, y2, img2.width/4, img2.height/4);
  
   fill(0);
   textSize(12);
   textAlign(LEFT, TOP);
   text("hold down numbers 1 though 4 to move the mind maps with your mouse", 10, 10);
}
