let button1,button2, button3,returnButton;
let d;
let loserText;

let imgKitten, bgImage, imgCat1, imgCat2, imgCat3, imgMouse, cheeseImage;
let speed;

function preload(){
  imgCat1 = loadImage('imgCat1.png');
  imgCat2 = loadImage('imgCat2.png');
  imgCat3 = loadImage('imgCat3.png');
  imgMouse = loadImage('imgMouse.png');
  bgImage = loadImage('grass.png');
  cheeseImage = loadImage('cheeseImage.png');
  
  // myFont = loadFont('assets/inconsolata.otf');
}

function setup() {
  createCanvas(400, 400);
  
  gameNotStarted = true;
  levelChosen = 0;
  p = new Player(imgMouse);
  t = new Timer(20);

  returnButton = createButton("Return to menu");
  returnButton.position(250,350);
  returnButton.mousePressed(function(){returnMenu();});
  returnButton.hide();
  
  button1 = createButton("Easy");
  button1.position(173, 170);
  button1.mousePressed(function(){chooseLevel(1);});
  
  button2 = createButton("Medium");
  button2.position(165, 220);
  button2.mousePressed(function(){chooseLevel(2);});
  
  button3 = createButton("Hard");
  button3.position(173, 270);
  button3.mousePressed(function(){chooseLevel(3);});
  
  
}

function returnMenu(){
  returnButton.hide();
  setup();
}

function draw() {
  background(bgImage)
  
  if (gameNotStarted && levelChosen == 7){
    textAlign(CENTER, CENTER);
    textSize(50);
    text("YOU LOSE!", width/2, height/2);
  }
  if (gameNotStarted && levelChosen == 8){
    textAlign(CENTER, CENTER);
    textSize(50);
    text("YOU WIN!", width/2, height/2);
  }
  if (levelChosen == 0){
    textAlign(CENTER, CENTER);
    textSize(30);
    text("MENU", width/2, 40);
    textFont("Walter Turncoat");
    textSize(50);
    text("Dom & Perry", width/2, 80);
    textSize(25);
    text("Pick a level:", width/2, 120);
  }

  if (levelChosen == 1){
    imgKitten = imgCat1;
    speeds = [2,3,4];
    d = 50;
  }
  if (levelChosen == 2){
    imgKitten = imgCat2;
    speeds = [4,5,6];
    d = 100;
  }
  
  if (levelChosen == 3){
    imgKitten = imgCat3;
    speeds = [5,6,7];
    d = 125;
  }
  
  if (gameNotStarted && (levelChosen == 1 || levelChosen == 2 || levelChosen == 3)){
    b = new Ball(speeds, d, imgKitten);
    gameNotStarted = false;
  }
  
  if (gameNotStarted == false && (levelChosen == 1 || levelChosen == 2 || levelChosen == 3)){
    runGame(d);
  }
  
  if (t.time == "YOU WIN!"){
    gameNotStarted = true;
    levelChosen = 8;
    returnButton.show();
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Here's a snack!", width/2, height/2 + 40);
    image(cheeseImage,width/2-25, height/2 + 70);
    
    
  }
  
}

function checkCollision(b,size){
  let hyp;
  let x = abs(b.x-mouseX);
  let y = abs(b.y-mouseY);
  
  hyp = sqrt(pow(x,2) + pow(y,2));
  
  if(hyp <= (size+25)/2) {
    b.xspeed = 0;
    b.yspeed = 0; 
    returnButton.show();
    gameNotStarted = true;
    levelChosen = 7;
  }
}

function runGame(size){
  
  t.update();
  t.show();
  
  b.update();
  b.show();
  p.show();
  
  checkCollision(b, size);
}

function chooseLevel(level){
  levelChosen = level;
  button1.hide();
  button2.hide();
  button3.hide();
}

