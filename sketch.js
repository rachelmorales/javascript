// Removing Objects from Arrays
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.5-removing-objects-from-array.html
// https://youtu.be/tA_ZgruFF9k

// Main Sketch: https://editor.p5js.org/codingtrain/sketches/smC4Jedi
// Trail Sketch: https://editor.p5js.org/codingtrain/sketches/9Ve9S6Mx

let bubbles = [];

let germs = [];


function preload() {
  for (let i = 0; i < 6; i++) {
    germs[i] = loadImage('images/germ' + i + '.png');
  }
}


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 40; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let germ = random(germs);
    let b = new Bubble(x, y, r, germ);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(200);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.germ = img;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.germ, this.x, this.y, this.r, this.r);
  }
}
