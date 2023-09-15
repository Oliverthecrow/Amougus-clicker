let textX = 2100;
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
let hats;
let selected_hat = 0

function preload() {
  img = loadImage("./yel9tkhg9en51.png");
  img2 = loadImage("./kill.png");
  img3 = loadImage("./Report.png");
  img6 = loadImage("./customise.png");
}
function setup() { }
function imposterclicked(mouseX, mouseY) {
  if (mouseX < 695 || mouseX > 1250) {
    return false;
  }
  if (mouseY < 320 || mouseY > 905) {
    return false;
  }
  return true;
}
function upgradeclicked(mouseX, mouseY) {
  if (mouseX < 20 || mouseX > 260) {
    return false;
  }
  if (mouseY < 655 || mouseY > 895) {
    return false;
  }
  return true;
}
function killclicked(mouseX, mouseY) {
  if (mouseX < 1590 || mouseX > 1845) {
    return false;
  }
  if (mouseY < 645 || mouseY > 895) {
    return false;
  }
  return true;
}
function reportclicked(mouseX, mouseY) {
  if (mouseX < 1585 || mouseX > 1855) {
    return false;
  }
  if (mouseY < 20 || mouseY > 255) {
    return false;
  }
  return true;
}
function victorybutton(mouseX, mouseY) {
  if (mouseX < 20 || mouseX > 325) {
    return false;
  }
  if (mouseY < 150 || mouseY > 305) {
    return false;
  }
  return true;
}
function customizeclicked(mouseX, mouseY) {
  if (mouseX <2080 || mouseX > 2210) {
    return false;
  }
  if (mouseY < 350 || mouseY > 460) {
    return false;
  }
    return true;
}
function setup() {
  createCanvas(2220, 900);
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
  hats = [
    loadImage(""),
    loadImage("./party hat.png"),
    loadImage("./cowboy hat.png"),
  ];
}
function formatNumber(number) {
  return number > 1000000000 ? number.toExponential() : number.toLocaleString("en-US");
}
function draw() {
  processtick();
  background(125, 125, 125);
  image(hats[selected_hat],750,135);
  fill(colors[selected_color]);
  rect(700, 325, 550, 600);
  stroke(0);
  strokeWeight(5);
  textSize(50);
  text("Amougus", textX, 50);

  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(5);
  textSize(30);
  text("Click", 950, 800);
  textSize(50);
  text("imposters", 50, 50);
  text(formatNumber(currency), 290, 50);
  textSize(35);
  text("imposters per second " + formatNumber(imposterspersecond), 50, 110);

  image(img, 20, 650);
  stroke(0);
  strokeWeight(2);
  fill(255);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Level " + upgradelv, 90, 625);
  text(formatNumber(upgradecost) + " cost", 88, 660);

  image(img2, 1600, 650);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textSize(25);
  fill(255, 255, 255);
  textSize(30);
  stroke(0);
  strokeWeight(4);
  text(formatNumber(killupgradecost) + " cost", 1680, 660);
  text("Level " + killlv, 1680, 625);

  image(img3, 1600, 5);
  fill(255);
  stroke(0);
  strokeWeight(3);
  text(formatNumber(reportcost) + " cost", 1680, 280);
  text("Level " + reportlv, 1682, 320);

  fill(60, 80, 180);
  ellipse(975, 475, 350, 175);
  fill(255, 0, 0);
  stroke(colors[selected_color]);
  strokeWeight(5);
  rect(20, 150, 300, 150);
  fill(255);
  stroke(0);
  strokeWeight(3);
  text("6.2^24\nimposters", 110, 210);
  if (haswon) {
    fill(80, 80, 80);
    stroke(0, 0, 0);
    strokeWeight(3);
    bezier(650, 650, 600, 720, 540, 600, 490, 500);
    line(490, 500, 630, 630,);
    fill(125, 90, 50);
    rotate(0.7);
    ellipse(950, 100, 110, 65);
    rotate(-0.7);
    rotate(-0.7);
    ellipse(55, 900, 80, 30);
    rotate(0.7);
    fill(255, 200, 100);
    text("You are now legally SUSSY!", 1350, 450);
  }
  //move the text to the left by 4 pixels
  textX = textX - 4;

  if (textX < -300) {
    textX = 2100;
  }
  image(img6,2050,300)
  fill(255)
  textSize(20)
  text("Customize",2110,340)
}
function mousePressed() {
//    print(mouseX + ", X");
//    print(mouseY + ", Y");

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
    if (reportlv >= 3 && reportlv < 7) {
      currency = Math.ceil(
        currency + killlv * 0.3 * 1.8 * upgradelv * 1.3 + reportlv
      );
    }
    if (reportlv >= 7) {
      currency = Math.ceil(currency + killlv * 3 * upgradelv * 5 + reportlv);
    }
  }
  //change colour of amougus
  if (imposterclicked(mouseX, mouseY)) {
    selected_color = selected_color + 1;
  }
  if (selected_color >= colors.length) {
    selected_color = 0;
  }
  
  if (customizeclicked(mouseX, mouseY)) {
    selected_hat = selected_hat + 1;
  }
  if (selected_hat >= hats.length) {
    selected_hat = 0
  }

  if (upgradeclicked(mouseX, mouseY)) {
    if (currency >= upgradecost) {
      upgradelv = upgradelv + 1;
      currency = currency - upgradecost;
      upgradecost = Math.floor(upgradecost * 1.58);
    }
  }
  if (killclicked(mouseX, mouseY)) {
    if (currency >= killupgradecost) {
      killlv = killlv + 1;
      currency = currency - killupgradecost;
      killupgradecost = Math.ceil(killupgradecost * 1.2);
    }
  }
  if (reportclicked(mouseX, mouseY)) {
    if (currency >= reportcost) {
      if (reportlv <= 5) {
        reportlv++;
        currency -= reportcost;
        reportcost = Math.ceil(Math.pow(reportcost, 1 + reportlv * 0.030));
      }
      else if (reportlv >= 6) {
        reportlv++;
        currency -= reportcost;
        reportcost = Math.ceil(Math.pow(reportcost, 1 + reportlv * 0.02))
      }
    }
  }
  if (victorybutton(mouseX, mouseY)) {
    if (currency >= 6.2e+24) {
      haswon = true;
      currency -= 6.2e+24;
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
    reportlv * 13 * upgradelv * 5 * killlv * 3,
    reportlv * 0.2
  );
  let reportifkilllv350 = Math.pow(
    reportlv * 100 * upgradelv * 100 * killlv * 100, 
    reportlv
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
    if (killlv >=350) {
      currency = Math.ceil(currency + reportifkilllv350)
    }
  }
}
