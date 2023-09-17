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
let rebirthcost = 1*10e+30;
let skilltree = false;
let skilltreepoint = 0;
let skilltreepointprice = 100;
let killpointlv = 0;
let sabopointlv = 0;
let reportpointlv = 0;

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
  if (mouseX < 2080 || mouseX > 2210) {
    return false;
  }
  if (mouseY < 350 || mouseY > 460) {
    return false;
  }
  return true;
}
function rebirthclicked(mouseX, mouseY) {
  if (mouseX < 20 || mouseX > 250) {
    return false;
  }
  if (mouseY < 400 || mouseY > 500) {
    return false;
  }
  return true;
}
function skilltreeclicked(mouseX, mouseY) {
  if (mouseX < 1600 || mouseX > 1850) {
    return false;
  }
  if (mouseY < 350 || mouseY > 550) {
    return false;
  }
  return true
}
function killskilltree(mouseX, mouseY) {
  if (mouseX < 520 || mouseX > 720) {
    return false;
  }
  if (mouseY < 35 || mouseY > 240) {
    return false;
  }
  return true;
}
function saboskilltree(mouseX, mouseY) {
  if (mouseX < 875 || mouseX > 1075) {
    return false;
  }
  if (mouseY < 40 || mouseY > 245) {
    return false;
  }
  return true; 
}
function reportskilltree(mouseX, mouseY) {
  if (mouseX < 1250 || mouseX > 1450) {
    return false;
  }
  if (mouseY < 35 || mouseY > 240) {
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
    nohat = loadImage(""),
    partyhat = loadImage("./party hat.png"),
    cowboyhat = loadImage("./cowboy hat.png"),
  ];
}
function formatNumber(number) {
  return number > 1000000000 ? number.toExponential() : number.toLocaleString("en-US");
}
function displayreportlv(number) {
  return number.toLocaleString("en-US", {maximumFractionDigits : 3});
}
function draw() {
  processtick();
  background(80, 80, 80);
  image(hats[selected_hat], 750, 135);
  fill(colors[selected_color]);
  rect(700, 325, 550, 600);
  stroke(0);
  strokeWeight(5);
  textSize(50);
  text("Amougus", textX, 50);

  image(hand,1650,350)
  fill(255)
  stroke(0)
  strokeWeight(2)
  textSize(20)
  text("skill points " + skilltreepoint,1680,570)
  if (skilltree) {
  fill(180,180,180,80)
  rect(480,30,1020,270)
  image(killskill,520,35)
  image(sabskill,875,40)
  image(reportskill,1250,35)
  }

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
  text(formatNumber(reportcost) + " cost", 1550, 280);
  text("Level " + displayreportlv(reportlv), 1600, 320);

  image(emergencybutton,20,350);
  fill(255);
  stroke(0);
  strokeWeight(1);
  textSize(25);
  text("Rebirth\n" + "Cost " + rebirthcost, 50, 365);

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
  //move the text to the left by 4 pixels
  textX = textX - 4;

  if (textX < -300) {
    textX = 2100;
  }
  image(img6, 2050, 300)
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
  //    print(mouseX + ", X");
  //    print(mouseY + ", Y");

  textsize = textsize + 4;
  if (textsize > 60) {
    textsize = 60;
    //    print(selected_color);
  }
  if (skilltreeclicked(mouseX,mouseY)) {
    if (skilltree == false) {
      skilltree = true
    }
    else if (skilltree == true) {
      skilltree = false
    }
  }
  if (currency >= skilltreepointprice) {
    skilltreepoint = skilltreepoint + 1;
    skilltreepointprice = skilltreepointprice * 10;
  }


  if (imposterclicked(mouseX, mouseY)) {
    if (rebirth) {
      if (reportlv <= 2) {
        currency = Math.ceil(
          currency + killlv * 0.75 * 1.5 * upgradelv + reportlv * upgradelv
        );
      }
    }
    else {
      if (reportlv <= 2) {
        currency = Math.ceil(
          currency + killlv * 0.2 * 1.2 * upgradelv + reportlv * 0.5 * upgradelv 
        );
      }
    }
    if (rebirth) {
      if (reportlv >= 2.0000001 && reportlv < 7) {
        currency = Math.ceil(
          currency + killlv * 0.85 * 2.5 * upgradelv + reportlv * upgradelv 
        );
      }
    }
    else {
      if (reportlv >= 2.1 && reportlv < 7) {
        currency = Math.ceil(
          currency + killlv * 0.3 * 1.5 * upgradelv + reportlv * 0.5 * upgradelv
        );
      }
    }
    if (rebirth)
      if (reportlv >= 7) {
        currency = Math.ceil(currency + killlv * 10 * upgradelv * 20 * reportlv * 2);
      }
      else {
        if (reportlv >= 7) {
          currency = Math.ceil(currency + killlv * 5 * upgradelv * 10 * reportlv * 1.5);
        }
      }
    if (rebirthclicked) {
      if (currency >= 1 * 10e+30) {
        rebirth = true;
        currency -= 1 * 10e+30;
      }
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
        reportcost = Math.ceil(Math.pow(reportcost, 1 + reportlv * 0.05));
      }
      else if (reportlv >= 6) {
        reportlv++;
        currency -= reportcost;
        reportcost = Math.ceil(Math.pow(reportcost, 1 + reportlv * 0.1))
      }
    }
  }
  if (victorybutton(mouseX, mouseY)) {
    if (currency >= 6.2e+24) {
      haswon = true;
      currency -= 6.2e+24;
    }
  }
  if (killskilltree(mouseX, mouseY)) {
    if (skilltreepoint >= 1) {
      killpointlv += 1
      killlv = killlv+killpointlv*5
      skilltreepoint -= 1
    }
  }
  if (saboskilltree(mouseX, mouseY)) {
    if (skilltreepoint >= 1) {
      sabopointlv += 1
      upgradelv = upgradelv+sabopointlv*5
      skilltreepoint -= 1
    }
  }
  if (reportskilltree(mouseX, mouseY)) {
    if (skilltreepoint >= 1) {
      reportpointlv += 1
      reportlv = reportlv*1.2
      skilltreepoint -= 1
    }
  }
}
function processtick() {
  let reportifkilllv0 = Math.pow(
    reportlv * 3 * upgradelv * killlv * 1.4,
    reportlv * 0.122
  );
  let reportifkilllv50 = Math.pow(
    reportlv * 10 * upgradelv * 2 * killlv * 2,
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
  let reportifkilllv100rebirht = Math.pow(
    reportlv * 20 * upgradelv * 10 * killlv * 7.5,
    reportlv * 0.32
  );

  tick++;
  if (tick % 60 == 0) {
    if (reportlv >= 1) {
      if (rebirth) {
        if (killlv <= 49) {
          imposterspersecond = Math.ceil(reportifkilllv0rebirth);
          currency = Math.ceil(currency + reportifkilllv0rebirth)
        }
      }
      else {
        if (killlv <= 49) {
          imposterspersecond = Math.ceil(reportifkilllv0);
          currency = Math.ceil(currency + reportifkilllv0);
        }
      }
      if (rebirth) {
        if (killlv >= 50) {
          imposterspersecond = Math.ceil(reportifkilllv50rebirth);
          currency = Math.ceil(currency + reportifkilllv50rebirth);
        }
      }
      else {
        if (killlv >= 50) {
          imposterspersecond = Math.ceil(reportifkilllv50);
          currency = Math.ceil(currency + reportifkilllv50);
        }
      }
      if (rebirth) {
        if (killlv >= 100) {
          imposterspersecond = Math.ceil(reportifkilllv100rebirht);
          currency = Math.ceil(currency + reportifkilllv100rebirht);
        }
      }
      else {
        if (killlv >= 100) {
          currency = Math.ceil(currency + reportifkilllv100);
          imposterspersecond = Math.ceil(reportifkilllv100);
        }
      }
      if (rebirth) {
        if (killlv >= 350) {
          imposterspersecond = Math.ceil(reportifkilllv350rebirth);
          currency = Math.ceil(currency + reportifkilllv350);
        }
      }

      if (reportlv >= 1) {
        if (tick % 60 == 0) {
          selected_color = selected_color + 1;
        }
        if (selected_color >= colors.length) {
          selected_color = 0;
        }
      }
    }
  }
}

