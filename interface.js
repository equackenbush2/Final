
let brush = "red"
let mode = "red"
let lastblink = 0
let blinkon = false
let bouncing_balls = []
let zapfinoFont
let ball = {x: 200, y: 200, size: 50, vx: 5, vy: 5, color: [0, 166, 80]}

//assigning = is 1 = sign//

function preload() {

    zapfinoFont = loadFont("Zapfino.ttf")

}

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    background(158, 8, 8)
    print("This is the setup")

    for (let i=0; i<1000; i++) {
    let random_ball = {x: (800, 699), y: random(800, 699), size: random(3), vx: (2, 10), vy: (2,10), color: [random(0, 91), random(0, 245), random(0, 121)]}

    bouncing_balls.push(random_ball)

  }

}


function draw() {


  print(mode)
  if (mouseIsPressed) {
    if (mode == "red" && brush == "red") {
      fill(0, 0, 0)          // set color for the text
    circle(mouseX + random(-10, 20), mouseY + random(-10, 20), random(10, 30))
  }


    if (mode == "b1") {
      rectMode(CORNERS) // https://p5js.org/reference/#/p5/rectMode
    rect(mouseX + random(30), mouseY + random(20), pmouseX, pmouseY)
  }

}

textFont(zapfinoFont)    // set the font to your variable
textSize(36)
fill(128, 117, 117)             // set text size
text("SHE IS REBORN", 300, 400)

for (let ball of bouncing_balls) {

    fill(ball.color)
    stroke(1)
    circle(ball.x, ball.y, ball.size)
    ball.x = ball.x + ball.vx
    ball.y = ball.y + ball.vy

    if (ball.x >= width) {
       ball.vx = -ball.vx
    }
    if (ball.x <= 0) {
       ball.vx = -ball.vx
    }

    if (ball.y >= height) {
      ball.vy = -ball.vy
    }

    if (ball.y <= 0) {
      ball.vy = -ball.vy
    }

}


fill(250, 158, 72, 1)
rect(225, 0, 75, 300)

fill(250, 158, 72, 1)
rect(100, 410, 75, 300)

fill(250, 158, 72, 1)
rect(1100, 0, 75, 300)

fill(19, 11, 227, 50)
rect(900, 200, 75, 400)

fill(224, 101, 101, 5)
rect(0, 250, 2000, 300)


stroke(0, 0, 0)
strokeWeight(0)


if (millis() - lastblink >= 1000) {
  if (blinkon == false) {
    blinkon = true
  } else {
    blinkon = false
  }
  lastblink = millis()
}

}

  // fill(0, 0, 255)

//remember to add save code//
function mouseClicked() {

    print(int(mouseX), int(mouseY))

//buttons//

    if (mouseX > 106 && mouseX < 134 && mouseY > 66 && mouseY < 89) {
      print("input1")
      background(158, 232, 255)
      mode = "red"
      //background graphics//
    }

    if (mouseX > 464 && mouseX < 504 && mouseY > 78 && mouseY < 85) {
      print("input2")
      background(143, 1, 30,)
      mode = "blue"
    }
    if (mouseX > 517 && mouseX < 535 && mouseY > 78 && mouseY < 85) {
      print("input3")
      background(255, 177, 61)
      mode = "green"
}

    if (mouseX > 0 && mouseX < 75 && mouseY > 290 && mouseY < 320) {
      print("input4")
      mode = "b1"
    }

    if (mouseX > 75 && mouseX < 150 && mouseY > 290 && mouseY < 320) {
      print("input5")
      mode = "b2"
    }

    if (mouseX > 150 && mouseX < 225 && mouseY > 290 && mouseY < 320) {
      print("input6")
      mode = "b3"
    }

    if (mouseX > 255 && mouseX < 300 && mouseY > 290 && mouseY < 320 ){
      print("input7")
      mode = "b4"
    }

    if (mouseX > 300 && mouseX < 375 && mouseY > 290 && mouseY < 320){
      print("input8")
      mode = "b5"
    }

    if (mouseX > 450 && mouseX < 525 && mouseY > 290 && mouseY < 320) {
      print("input9")
      mode = "b6"
    }

    if (mouseX > 525 && mouseX < 600 && mouseY > 290 && mouseY < 320) {
      print ("input10")
      mode = "b7"
    }

if (mouseX > 107 && mouseX < 164 && mouseY > 371 && mouseY < 744) {
       save()  // saves an image of the canvas

}

}


function keyPressed() {
  print(key)
}
