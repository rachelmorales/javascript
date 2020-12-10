// Removing Objects from Arrays
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.5-removing-objects-from-array.html
// https://youtu.be/tA_ZgruFF9k

// Main Sketch: https://editor.p5js.org/codingtrain/sketches/smC4Jedi
// Trail Sketch: https://editor.p5js.org/codingtrain/sketches/9Ve9S6Mx

let bubbles = [];

let germs = []; // germ array




function preload() {
  for (let i = 0; i < 6; i++) {
    germs[i] = loadImage('images/germ' + i + '.png');
  }
}


function setup() {
  createCanvas(windowWidth, 600);
  for (let i = 0; i < 40; i++) { //adding how many bubbles
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let germ = random(germs);
    let b = new Bubble(x, y, r, germ);
    bubbles.push(b); //adds something to the end of the array
  }
}

function mousePressed() { //check if the mouse is pressed and if it is delete
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1); //splice takes two arguments -index & how many- removes it from the array
    }
  }
}

function draw() {
  background(210);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255); //changes color
    } else {
      bubbles[i].changeColor(0); //no color
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble { // bubble class
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.germ = img;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) { //checking to see if the point is inside that bubble
    let d = dist(px, py, this.x, this.y); //distance function can tell if you are clicking inside the circle or outside
    if (d < this.r) {
      return true; //returns true or false
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.germ, this.x, this.y, this.r, this.r); //r is radius
  }
}
