var j = 0;
var l = 0;
var ax = 0;
var s = 0;
var al = 0;
var h = 0;
var sa = 0;
var am = 0;
var p = 0;
var d = 0;
var an = 0;
var g = 0;
var gu = 0;
var f = 0;
var aw = 0;
var e = 0;
var joySpeed = 1;
var loveSpeed = 1;
var anxietySpeed = 1;
var satisfactionSpeed = 1;
var alertnessSpeed = 1;
var hopeSpeed = 1;
var sadnessSpeed = 1;
var amusementSpeed = 1;
var prideSpeed = 1;
var disgustSpeed = 1;
var angerSpeed = 1;
var gratitudeSpeed = 1;
var guiltSpeed = 1;
var fearSpeed = 1;
var aweSpeed = 1;
var offenseSpeed = 1;
var embarrassmentSpeed = 1;


function setup() {
  frameRate(30);
  createCanvas(700,700);
  // createCanvas(windowWidth, windowHeight);
  smooth();
}

function draw() {
  background(0);
  noStroke();


  //turqoise
  fill(13, 224, 224);
  ellipse(25,210,j,j);
  j = j + joySpeed;

  if (j > 47 || j < 0) {
    joySpeed=-joySpeed;
  }


  //light pink
  fill(255, 173, 244);
  ellipse(400,400,l,l);
  l = l + loveSpeed;

  if (l > 53 || l < 0) {
    loveSpeed=-loveSpeed;
  }


  //green
  fill(51, 138, 29);
  ellipse(100,100,ax,ax);
  ax = ax + anxietySpeed;

  if (ax > 30 || ax < 0) {
    anxietySpeed=-anxietySpeed;
  }


  //brown/orange
  fill(196, 137, 26);
  ellipse(100,400,s,s);
  s = s + satisfactionSpeed;

  if (s > 48 || s < 0) {
    satisfactionSpeed=-satisfactionSpeed;
  }


  //red/orange
  fill(255, 81, 0);
  ellipse(200,500,al,al);
  al = al + alertnessSpeed;

  if (al > 49 || al < 0) {
    alertnessSpeed=-alertnessSpeed;
  }



  //rosey
  fill(209, 56, 100);
  ellipse(170,600,h,h);
  h = h + hopeSpeed;

  if (h > 52 || h < 0) {
    hopeSpeed=-hopeSpeed;
  }



  //light blue/grey
  fill(147, 158, 186);
  ellipse(230,150,sa,sa);
  sa = sa + sadnessSpeed;

  if (sa > 33 || sa < 0) {
    sadnessSpeed=-sadnessSpeed;
  }



  //teal///////////////////////////
  fill(0, 153, 133);
  ellipse(50,50,am,am);
  am = am + amusementSpeed;

  if (am > 40 || am < 0) {
    amusementSpeed=-amusementSpeed;
  }



  //orange/yellow
  fill(252, 161, 15);
  ellipse(600,500,p,p);
  p = p + prideSpeed;

  if (p > 40 || p < 0) {
    prideSpeed=-prideSpeed;
  }



  //green/brown
  fill(120, 112, 0);
  ellipse(600,400,d,d);
  d = d + disgustSpeed;

  if (d > 31 || d < 0) {
    disgustSpeed=-disgustSpeed;
  }



  //deep red
  fill(148, 15, 0);
  ellipse(450,200,an,an);
  an = an + angerSpeed;

  if (an > 16 || an < 0) {
    angerSpeed=-angerSpeed;
  }



  //soft blue
  fill(114, 163, 173);
  ellipse(500,600,g,g);
  g = g + gratitudeSpeed;

  if (g > 34 || g < 0) {
    gratitudeSpeed=-gratitudeSpeed;
  }



  //dark green
  fill(42, 66, 43);
  ellipse(350,300,gu,gu);
  gu = gu + guiltSpeed;

  if (gu > 28 || gu < 0) {
    guiltSpeed=-guiltSpeed;
  }


  //bright blue
  fill(33, 96, 255);
  ellipse(400,610,f,f);
  f = f + fearSpeed;

  if (f > 19 || f < 0) {
    fearSpeed=-fearSpeed;
  }



  //purple
  fill(186, 130, 255);
  ellipse(500,100,aw,aw);
  aw = aw + aweSpeed;

  if (aw > 26 || aw < 0) {
    aweSpeed=-aweSpeed;
  }



  //fill(156, 9, 2);
  //ellipse(400,400,s,s);
  //s = s + offenseSpeed;

  //if (s > 100 || s < 0) {
  //  offenseSpeed=-offenseSpeed;
  //}



  //lime
  fill(226, 255, 130);
  ellipse(600,200,e,e);
  e = e + embarrassmentSpeed;

  if (e > 25 || e < 0) {
    embarrassmentSpeed=-embarrassmentSpeed;
  }
}
