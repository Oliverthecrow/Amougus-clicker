let textX = 700;
let textsize = 20;
let selected_color = 0;
let colors;
let currency = 0;
let upgradelv = 1;
let upgradecost = 10;
let killlv = 1;
let killupgradecost = 5;
let reportcost = 1000;
let tick = 0;
let reportlv = 0;
let haswon = false;
let imposterspersecond = 0;

function preload() {
  img = loadImage("./yel9tkhg9en51.png");
  img2 = loadImage("./kill.png");
  img3 = loadImage("./Report.png");
}
function setup() {}
function imposterclicked(mouseX, mouseY) {
  if (mouseX < 200 || mouseX > 450) {
    return false;
  }
  if (mouseY < 100 || mouseY > 395) {
    return false;
  }
  return true;
}
function upgradeclicked(mouseX, mouseY) {
  if (mouseX < 10 || mouseX > 140) {
    return false;
  }
  if (mouseY < 320 || mouseY > 390) {
    return false;
  }
  return true;
}
function killclicked(mouseX, mouseY) {
  if (mouseX < 580 || mouseX > 680) {
    return false;
  }
  if (mouseY < 285 || mouseY > 385) {
    return false;
  }
  return true;
}
function reportclicked(mouseX, mouseY) {
  if (mouseX < 572 || mouseX > 677) {
    return false;
  }
  if (mouseY < 20 || mouseY > 105) {
    return false;
  }
  return true;
}
function victorybutton(mouseX, mouseY) {
  if (mouseX < 20 || mouseX > 120) {
    return false;
  }
  if (mouseY < 95 || mouseY > 170) {
    return false;
  }
  return true;
}
function setup() {
  createCanvas(2000, 2000);
  // amogus colors
  colors = [
    color(255, 153, 204), //pink
    color(255, 0, 0), //red
    color(0, 255, 0), //lime
    color(0, 0, 255), //blue
    color(10, 156, 10), //green
    color(30, 30, 30), //black
    color(255, 255, 255), //white
    color(255, 255, 100), //yellow
    color(255, 141, 28), //orange
    color(120, 61, 210), //purple
    color(128, 88, 45), //brown
    color(68, 255, 247), //cyan
  ];
  amounguscolor = [
   // this will eventually display amoung us characters that change color
    //  impostercolor0 = loadImage("black.jpeg"),
    //  impostercolor1 = loadImage("blue.png"),
    //  impostercolor2 = loadImage("brown.jpeg"),
    //  impostercolor3 = loadImage("cyan.png"),
    //  impostercolor4 = loadImage("green.png"),
    //  impostercolor5 = loadImage("lime.png"),
    //  impostercolor6 = loadImage("orange.jpeg"),
    //  impostercolor7 = loadImage("pink.png"),
    //  impostercolor8 = loadImage("purple.png"),
    //  impostercolor9 = loadImage("red.png"),
    //  impostercolor10 = loadImage("white.png"),
    //  impostercolor11 = loadImage("yellow.jpeg"),
  ];
}
function draw() {
  processtick();

  image(img, 20, 400);

  background(125, 125, 125);
  fill(colors[selected_color]);
  //  image(amounguscolor[selected_color], 220, 96);
  rect(230, 130, 240, 300);
  stroke(0);
  strokeWeight(5);
  textSize(textsize);
  text("Amougus", textX, 50);

  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(5);
  textSize(30);
  text("Click", 315, 300);
  text("imposters", 24, 25);
  text(currency, 175, 25);
  textSize(20);
  text("imposters per second " + imposterspersecond, 24.5, 55);

  image(img, 20, 300);
  stroke(0);
  strokeWeight(2);
  fill(255);
  textSize(15);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Level " + upgradelv, 43, 290);
  text(upgradecost + " cost", 43, 310);

  image(img2, 585, 300);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textSize(25);
  fill(255, 255, 255);
  textSize(15);
  stroke(0);
  strokeWeight(4);
  text(killupgradecost + " cost", 610, 310);
  text("Level " + killlv, 610, 290);

  image(img3, 575, 5);
  fill(255);
  stroke(0);
  strokeWeight(3);
  text(reportcost + " cost", 610, 140);
  text("Level " + reportlv, 610, 120);

  fill(60, 80, 180);
  ellipse(350, 200, 195, 85);
  fill(255, 0, 0);
  stroke(colors[selected_color]);
  strokeWeight(5);
  rect(20, 95, 100, 75);
  fill(255);
  stroke(0);
  strokeWeight(3);
  text("1,000,000,000\nimposters", 26, 130);
  if (haswon) {
    fill(80, 80, 80);
    stroke(0, 0, 0);
    strokeWeight(3);
    bezier(200, 244, 160, 270, 150, 200, 135, 178);
    line(135, 178, 200, 244);
    fill(125, 90, 50);
    rotate(0.7);
    ellipse(320, 66, 45, 25);
    rotate(-0.7);
    rotate(-0.7);
    ellipse(-13, 310, 45, 15);
    rotate(0.7);
    fill(255, 200, 100);
    text("You are now legally SUSSY!", 500, 210);
  }
  //move the text to the left by 4 pixels
  textX = textX - 4;

  if (textX < -300) {
    textX = 700;
  }
}
function mousePressed() {
  //  print(mouseX + ", X");
  //  print(mouseY + ", Y");

  textsize = textsize + 4;
  if (textsize > 60) {
    textsize = 60;
    //    print(selected_color);
  }
  if (imposterclicked(mouseX, mouseY)) {
    if (reportlv <= 2) {
      currency = Math.ceil(
        currency + killlv * 0.25 * 1.2 * upgradelv + reportlv
      );
    }
    if (reportlv >= 3) {
      currency = Math.ceil(
        currency + killlv * 0.3 * 1.8 * upgradelv * 1.3 + reportlv
      );
    }
    if (reportlv >= 7) {
      currency = Math.ceil(currency + killlv * 2 * upgradelv * 2.5 + reportlv);
    }
  }
  //change colour of amougus
  if (imposterclicked(mouseX, mouseY)) {
    selected_color = selected_color + 1;
  }
  if (selected_color >= colors.length) {
    selected_color = 0;
  }
  if (upgradeclicked(mouseX, mouseY)) {
    if (currency >= upgradecost) {
      upgradelv = upgradelv + 1;
      currency = currency - upgradecost;
      upgradecost = Math.floor(upgradecost * 1.6);
    }
  }
  if (killclicked(mouseX, mouseY)) {
    if (currency >= killupgradecost) {
      killlv = killlv + 1;
      currency = currency - killupgradecost;
      killupgradecost = Math.ceil(killupgradecost * 1.14);
    }
  }
  if (reportclicked(mouseX, mouseY)) {
    if (currency >= reportcost) {
      reportlv++;
      currency -= reportcost;
      reportcost = Math.ceil(Math.pow(reportcost, 1 + reportlv * 0.032));
    }
  }
  if (victorybutton(mouseX, mouseY)) {
    if (currency >= 1000000000) {
      haswon = true;
      currency -= 1000000000;
    }
  }
}
function processtick() {
  let reportifkilllv0 = Math.pow(
    reportlv * 5 * upgradelv * 1.5 * killlv * 1.6,
    reportlv * 0.122
  );
  let reportifkilllv50 = Math.pow(
    reportlv * 8 * upgradelv * 3 * killlv * 2,
    reportlv * 0.135
  );
  let reportifkilllv100 = Math.pow(
    reportlv * 20 * upgradelv * 3 * killlv * 5,
    reportlv * 0.15
  );

  tick++;
  if (tick % 60 == 0) {
    if (reportlv >= 1) {
      if (killlv <= 49) imposterspersecond = Math.ceil(reportifkilllv0);
      currency = Math.ceil(currency + reportifkilllv0);
    }
    if (killlv >= 50) {
      imposterspersecond = Math.ceil(reportifkilllv50);
      currency = Math.ceil(currency + reportifkilllv50);
    }
    if (killlv >= 100) {
      currency = Math.ceil(currency + reportifkilllv100);
      imposterspersecond = Math.ceil(reportifkilllv100);
    }
  }
}

