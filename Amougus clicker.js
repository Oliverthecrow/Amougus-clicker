let clickableObjects = [];
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
let selected_hat = 0;
let hats;
let song = new Audio('western-125865.mp3');
let songstop = stop;
let rebirth = false;
let rebirthcost = 3e+9;
let skilltree = false;
let skilltreepoint = 0;
let skilltreepointprice = 100;
let killpointlv = 0;
let sabopointlv = 0;
let reportpointlv = 0;

function onImpostorClick() {
  if (rebirth) {
    if (reportlv <= 2) {
      currency = Math.ceil(
        currency + killlv * 0.75 * 1.5 * upgradelv + reportlv * upgradelv + 1 
      );
    }
    else if (reportlv < 7) {
      currency = Math.ceil(
        currency + killlv * 0.85 * 2.5 * upgradelv + reportlv * upgradelv
      );
    }
    else {
      currency = Math.ceil(
        currency + killlv * 10 * upgradelv * 20 * reportlv * 2
      );
    }
  }
  else {
    if (reportlv <= 2) {
      currency = Math.ceil(
        currency + killlv * 0.2 * 1.2 * upgradelv + reportlv * 0.5 * upgradelv
      );
    }
    else if (reportlv < 7) {
      currency = Math.ceil(
        currency + killlv * 0.3 * 1.5 * upgradelv + reportlv * 0.5 * upgradelv
      );
    }
    else {
      currency = Math.ceil(
        currency + killlv * 5 * upgradelv * 10 * reportlv * 1.5
      );
    }
  }

  // amogus color swapping
  selected_color = selected_color + 1;
  if (selected_color >= colors.length) {
    selected_color = 0;
  }
}
function onUpgradeClick() {
  if (currency >= upgradecost) {
    upgradelv++;
    currency -= upgradecost;
    upgradecost = Math.floor(upgradecost * 1.58);
  }
}
function onKillClick() {
  if (currency >= killupgradecost) {
    killlv++;
    currency -= killupgradecost;
    killupgradecost = Math.ceil(killupgradecost * 1.2);
  }
}
function onReportClick() {
  if (currency >= reportcost) {
    if (reportlv <= 5) {
      reportlv++;
      currency -= reportcost;
      reportcost = Math.ceil(Math.pow(reportcost, 1 + (reportlv-reportpointlv) * 0.05));
    }
    else if (reportlv > 5) {
      reportlv++;
      currency -= reportcost;
      reportcost = Math.ceil(Math.pow(reportcost, 1 + (reportlv-reportpointlv) * 0.1))
    }
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class RectangleHitbox {
  constructor(top_left, bottom_right) {
    this.top_left = top_left;
    this.bottom_right = bottom_right;
  }
}

class ClickableObject {
  // imago_loop is a stupid placeholder name for "image" because p5 has already reserved that name
  constructor(onClickHandler, bounds, imago_loop) {
    if (imago_loop) {
      this.imago_loop = imago_loop;
    }
    this.onClickHandler = onClickHandler;
    this.bounds = bounds;
  }
  draw() {
    // if the user passed in a function to draw their button
    if (typeof this.imago_loop === "function") {
      this.imago_loop();
    }
    // this is what *should* normally run, provided the user passed in an image made from p5's `image()` function.
    else if (this.imago_loop) {
      image(this.imago_loop, this.bounds.top_left.x, this.bounds.top_left.y);
    }
    return;
  }
  boundsCheck(clickPosition) {
    if (clickPosition.x < this.bounds.top_left.x || clickPosition.x > this.bounds.bottom_right.x) {
      return false;
    }
    if (clickPosition.y < this.bounds.top_left.y || clickPosition.y > this.bounds.bottom_right.y) {
      return false;
    }
    return true;
  }
  run() {
    this.onClickHandler();
  }
}

function preload() {
  img = loadImage("./sabotage.png");
  img2 = loadImage("./kill.png");
  img3 = loadImage("./Report.png");
  img6 = loadImage("./customise.png");
  gun = loadImage("./gun.png");
  emergencybutton = loadImage("./emergencybutton.png");
  hand = loadImage("./skilltree.png");
  sabskill = loadImage("./sabotage - Copy.png")
  killskill = loadImage("./kill - Copy.png")
  reportskill = loadImage("./Report - Copy.png")
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
    nohat = loadImage(""),
    partyhat = loadImage("./party hat.png"),
    cowboyhat = loadImage("./cowboy hat.png"),
  ];
  clickableObjects = [
    new ClickableObject(onImpostorClick,
      new RectangleHitbox(new Point(695, 320), new Point(1250, 905)), () => {
        image(hats[selected_hat], 750, 130);
        // tha mogus
        fill(colors[selected_color]);
        rect(700, 325, 550, 600);
        fill(60, 80, 180);
        ellipse(975, 475, 350, 175);
      }),                               // impostor

    new ClickableObject(onUpgradeClick,
      new RectangleHitbox(new Point(20, 655), new Point(260, 895)), img),                             // upgrade

    new ClickableObject(onKillClick,
      new RectangleHitbox(new Point(1590, 645), new Point(1845, 895)), img2),                         // kill

    new ClickableObject(onReportClick,
      new RectangleHitbox(new Point(1585, 20), new Point(1855, 255)), img3),                          // report

    new ClickableObject(() => {
      if (currency >= 6.02e+24) {
        haswon = true;
        currency -= 6.02e+24;
      }
    },
      new RectangleHitbox(new Point(20, 150), new Point(325, 305))),                                  // the win button

    new ClickableObject(() => { selected_hat = (selected_hat + 1) % hats.length; },
      new RectangleHitbox(new Point(2080, 350), new Point(2210, 460)), img6),                         // customizer

    new ClickableObject(() => {
      if (currency >= rebirthcost) {
        if (rebirth == false) {
        rebirth = true;
        currency = 0;
        reportlv = 0
        killlv = 0
        upgradelv = 0
        reportcost = 1000
        killupgradecost = 5
        upgradecost = 10
        }
      }
    }, new RectangleHitbox(new Point(20, 400), new Point(250, 500)), emergencybutton), // rebirth

    new ClickableObject(() => { skilltree = !skilltree; },
      new RectangleHitbox(new Point(1600, 350), new Point(1850, 550)), hand), // skilltree

    new ClickableObject(() => {
      if (skilltreepoint >= 1) {
        killpointlv += 1
        killlv = killlv + killpointlv * 7.5
        skilltreepoint -= 1
      }
    },
      new RectangleHitbox(new Point(520, 35), new Point(720, 240)), () => { if (skilltree) { image(killskill, 520, 35) } }),                       // kill skill

    new ClickableObject(() => {
      if (skilltreepoint >= 1) {
        sabopointlv += 1
        upgradelv = upgradelv + sabopointlv * 5
        skilltreepoint -= 1
      }
    },
      new RectangleHitbox(new Point(875, 40), new Point(1075, 245)), () => { if (skilltree) { image(sabskill, 875, 40) } }),                       // sab skill

    new ClickableObject(() => {
      if (skilltreepoint >= 1) {
        reportpointlv += 1
        reportlv = reportlv + 0.25
        skilltreepoint -= 1
      }
    },
      new RectangleHitbox(new Point(1250, 35), new Point(1450, 240)), () => { if (skilltree) { image(reportskill, 1250, 35) } }),                    // report skill
  ]
}
function formatNumber(number) {
  return number > 1000000000 ? number.toExponential() : number.toLocaleString("en-US");
}
function displayreportlv(number) {
  return number.toLocaleString("en-US", { maximumFractionDigits: 3 });
}
function draw() {
  processtick();
  background(80, 80, 80);

  stroke(0);
  strokeWeight(5);
  textSize(50);
  text("Amougus", textX, 50);

  clickableObjects.forEach((drawable) => {
    drawable.draw();
  });

  fill(255)
  stroke(0)
  strokeWeight(2)
  textSize(20)
  text("skill points " + skilltreepoint, 1680, 570)

  if (skilltree) {
    fill(180, 180, 180, 80)
    rect(480, 30, 1020, 270)
  }

  fill(255, 255, 255);
  stroke(0);
  strokeWeight(5);
  textSize(30);
  text("Click", 950, 800);
  textSize(50);
  text("imposters", 50, 50);
  text(formatNumber(currency), 290, 50);
  textSize(35);
  text("imposters per second " + formatNumber(imposterspersecond), 50, 110);

  stroke(0);
  strokeWeight(2);
  fill(255);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Level " + upgradelv, 90, 625);
  text(formatNumber(upgradecost) + " cost", 88, 660);

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

  fill(255);
  stroke(0);
  strokeWeight(3);
  text(formatNumber(reportcost) + " cost", 1550, 280);
  text("Level " + displayreportlv(reportlv), 1600, 320);

  fill(255);
  stroke(0);
  strokeWeight(1);
  textSize(25);
  text("Rebirth\n" + "Cost " + "3e+9", 50, 365);

  fill(255, 0, 0);
  stroke(colors[selected_color]);
  strokeWeight(5);
  rect(20, 150, 300, 150);
  fill(255);
  stroke(0);
  strokeWeight(3);
  text("6.02*10^23\nimposters", 110, 210);
  if (haswon) {
    if (selected_hat == 2) {
      image(gun, 500, 420)
    }
    else {
      fill(50, 50, 50);
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
  }

  if (textX < -300) {
    textX = 2100;
  }
  fill(255)
  textSize(20)
  text("Customize", 2110, 340)

  if (selected_hat == 2) {
    fill(120, 90, 45);
    stroke(0);
    strokeWeight(1);
    textSize(25);
    song.volume = 0.2
    song.play();
    background(140, 90, 50, 70);
    text("THERE AINT ENOUGH ROOM IN THIS TOWN FOR THE TWO OF US", 600, 150);
    selected_color = 10;
  }
  if (selected_hat <= 1) {
    song.pause();
    song.currentTime = 0
  }
}

function mousePressed() {
  console.log(`Mouse X: ${mouseX}\nMouseY: ${mouseY}`);
  textsize = textsize + 4;
  if (textsize > 60) {
    textsize = 60;
  }

  clickableObjects.forEach((clickableObject) => {
    if (clickableObject.boundsCheck(new Point(mouseX, mouseY))) {
      console.log(clickableObject);
      clickableObject.run();
    }
  });
}
function processtick() {
  //move the text to the left by 4 pixels
  textX = textX - 4;

  if (currency >= skilltreepointprice) {
    skilltreepoint = skilltreepoint + 1;
    skilltreepointprice = skilltreepointprice * 10;
  }

  tick++;
  if (tick % 60 == 0) {
    if (reportlv >= 1) {
      let reportifkilllv0 = Math.pow(
        reportlv * 3 * upgradelv * killlv * 1.4,
        reportlv * 0.122
      );
      let reportifkilllv50 = Math.pow(
        reportlv * 5 * upgradelv * 2 * killlv * 2,
        reportlv * 0.14
      );
      let reportifkilllv100 = Math.pow(
        reportlv * 7 * upgradelv * 3 * killlv * 2.5,
        reportlv * 0.16
      );
      let reportifkilllv350rebirth = Math.pow(
        reportlv * 100 * upgradelv * 100 * killlv * 100,
        reportlv
      );
      let reportifkilllv0rebirth = Math.pow(
        reportlv * 8 * upgradelv * 2 * killlv * 1.6,
        reportlv * 0.135
      );
      let reportifkilllv50rebirth = Math.pow(
        reportlv * 15 * upgradelv * 5 * killlv * 3,
        reportlv * 0.165
      );
      let reportifkilllv100rebirth = Math.pow(
        reportlv * 20 * upgradelv * 10 * killlv * 5,
        reportlv * 0.225
      );
      if (rebirth) {
        if (killlv <= 49) {
          imposterspersecond = Math.ceil(reportifkilllv0rebirth);
          currency = Math.ceil(currency + reportifkilllv0rebirth)
        }
        if (killlv > 49) {
          imposterspersecond = Math.ceil(reportifkilllv50rebirth);
          currency = Math.ceil(currency + reportifkilllv50rebirth);
        }
      }
      else {
        if (killlv <= 49) {
          imposterspersecond = Math.ceil(reportifkilllv0);
          currency = Math.ceil(currency + reportifkilllv0);
        }
        if (killlv >= 50) {
          imposterspersecond = Math.ceil(reportifkilllv50);
          currency = Math.ceil(currency + reportifkilllv50);
        }
      }
      if (rebirth) {
        if (killlv >= 100 && killlv < 350) {
          imposterspersecond = Math.ceil(reportifkilllv100rebirth);
          currency = Math.ceil(currency + reportifkilllv100rebirth);
        }
        else if (killlv >= 350) {
          imposterspersecond = Math.ceil(reportifkilllv350rebirth);
          currency = Math.ceil(currency + reportifkilllv350);
        }
      }
      else {
        if (killlv >= 100) {
          currency = Math.ceil(currency + reportifkilllv100);
          imposterspersecond = Math.ceil(reportifkilllv100);
        }
      }

      if (reportlv >= 1) {
        selected_color = selected_color + 1;
        if (selected_color >= colors.length) {
          selected_color = 0;
        }
      }
    }
  }
}


