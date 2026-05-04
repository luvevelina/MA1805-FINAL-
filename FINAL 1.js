let level = 1;
let startX = 30;
let startY = 20;
let playerX = 30;
let playerY = 20;
let showTitle1 = true;
let showTitle2 = true;
let showTitle3 = true;
let showTitle4 = true;
let showTitle5 = true;
let showTitle6 = true;
let showTitle7 = true;
let showTitle8 = true;
let automove = false;

function resetPlayer() {
  playerX = startX;
  playerY = startY;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  
  background(random(25), random(255));
  fill(100);
  
 if (level === 1) {
 //obstacles vertical
 rect(50, 0, 10, 500);   //1up
 rect(100, height - 500, 15, 500); //1down
 rect(200, 0, 7, 500);  //2up
 rect(300, height - 500, 13, 500);  //2down
 rect(400, 0, 10, 500);  //3up
 rect(500, height - 500, 5, 500);  //3down
 rect(600, 0, 50, 500);  //4up
 rect(700, height - 500, 20, 500);  //4down
 rect(800, 10, 45, 500);  //5up
 rect(900, height - 500, 50, 500); //5down
 rect(1000, 0, 50, 500); //6up
 rect(1100, height - 500, 10, 500);  //6down 
 rect(1200, 0, 30, 500);   //7up
 rect(1300, height - 500, 50, 500); //7down
 
 //reset player if it touches the obstacles
 hit(50, 0, 10, 500);              // 1up
 hit(100, height - 500, 15, 500);  // 1down
 hit(200, 0, 7, 500);              // 2up
 hit(300, height - 500, 13, 500);  // 2down
 hit(400, 0, 10, 500);             // 3up
 hit(500, height - 500, 5, 500);   // 3down
 hit(600, 0, 50, 500);             // 4up
 hit(700, height - 500, 20, 500);  // 4down
 hit(800, 10, 45, 500);            // 5up
 hit(900, height - 500, 50, 500);  // 5down
 hit(1000, 0, 50, 500);            // 6up
 hit(1100, height - 500, 10, 500); // 6down
 hit(1200, 0, 30, 500);            // 7up
 hit(1300, height - 500, 50, 500); // 7down
 }
  if (level === 2) {
    //obstacles horizontal
 rect(0, 50, 100, 10);   //1 
  rect(width - 1100, 100, 1500, 15); //2
  rect(0, 150, 130, 7);  //3
  rect(width - 1100, 160, 500, 13);  //4
  rect(0, 250,160, 10);  //5
  rect(width - 1060, 300, 500, 5);  //6
  rect(0, 350, 500, 50);  //7
  rect(550, 400, 500, 15);  //8
  rect(0, 450, 600, 10);  //9
  rect(width - 1100, 500, 500, 10);  //10
  rect(800, 550, 500, 20);  //11
  rect(1000, 600, 500, 50);  //12
  rect(1100, 650, 500, 10);  //13
  rect(1200, 700, 500, 10);  rect(0, 750, 500, 20);  //14

  //obstacles vertical
  rect(200, 0, 10, 200);   //1
  rect(250, height - 300, 15, 1000); //2
 rect(300, 0, 15, 300); //3
 rect(600, 0, 7, 400);  //4
 rect(900,0 , 13, 600);  //5 

 //reset player if it touches the obstacles
  hit(0, 50, 100, 10);   //1  
  hit(width - 1100, 100, 1500, 15); //2
  hit(0, 150, 130, 7);  //3
  hit(width - 1100, 160, 500, 13);  //4
  hit(0, 250,160, 10);  //5 
  hit(width - 1060, 300, 500, 5);  //6  
  hit(0, 350, 500, 50);  //7  
  hit(550, 400, 500, 15);  //8
  hit(0, 450, 600, 10);  //9  
  hit(width - 1100, 500, 500, 10);  //10        
  hit(800, 550, 500, 20);  //11 
  hit(1000, 600, 500, 50);  //12
  hit(1100, 650, 500, 10);  //13
  hit(1200, 700, 500, 10); 
  hit(0, 750, 500, 20);  //14
  hit(200, 0, 10, 200);   //1v
  hit(250, height - 300, 15, 1000); //2v
  hit(300, 0, 15, 300); //3v
  hit(600, 0, 7, 400);  //4v
  hit(900,0 , 13, 600);  //5v 

 
  }    
   if (level === 3) {
    //obstacles 
  rect(50, 50, 10, 500);   //1vert   
  rect(100, height - 500, 15, 400); //2vert
  rect(200, 0, 7, 550);  //3 vert
  rect(300, height - 500, 13, 300); //4vert 
  rect(400, 0, 10, 500);  //5vert
  rect(500, height - 500, 5, 500);  //6vert
  rect(600, 0, 50, 500);  //7vert
  rect(700, height - 500, 20, 1700);  //8vert  
  rect(800, 100, 45, 500);  //9vert  
  rect(900, height - 900, 50, 500); //10vert 
  rect(1000, 0, 50, 500); //11vert
  rect(1100, height - 500, 10, 500); //12vert
  rect(1200, 0, 30, 500);   //13vert

 
  rect(0, 50, 50, 10);   //1horiz  
  rect(width - 570, 200, 100, 15); //2horiz  
  rect(160, 200, 250, 7);  //3 horiz
  rect(width - 500, 300, 150, 13); //4horiz
  rect(100, 400, 250, 10);  //5horiz      
  rect(width - 500, 500, 150, 5);  //6horiz 
  rect(0, 600, 500, 50);  //7horiz
  rect(width - 500, 700, 500, 20);  //8horiz
  rect(50, 800, 500, 45);  //9horiz
  rect(width - 500, 900, 500, 50);  //10horiz

  //reset player if it touches the obstacles
  hit(50, 50, 10, 500);   //1vert
  hit(100, height - 500, 15, 400); //2vert
  hit(200, 0, 7, 550);  //3 vert
  hit(300, height - 500, 13, 300);  
  hit(400, 0, 10, 500);  //5vert
  hit(500, height - 500, 5, 500);   //6vert
  hit(600, 0, 50, 500); //7vert
  hit(700, height - 500, 20, 1700); //8vert
  hit(800, 100, 45, 500); //9vert
  hit(900, height - 900, 50, 500); //10vert
  hit(1000, 0, 50, 500); //11vert
  hit(1100, height - 500, 10, 500); //12vert
  hit(1200, 0, 30, 500);   //13vert 
  hit(0, 50, 50, 10);   //1horiz  
  hit(width - 570, 200, 100, 15); //2horiz  
  hit(160, 200, 250, 7);  //3 horiz 
  hit(width - 500, 300, 150, 13); //4horiz  
  hit(100, 400, 250, 10);  //5horiz
  hit(width - 500, 500, 150, 5);  //6horiz
  hit(0, 600, 500, 50);  //7horiz
  hit(width - 500, 700, 500, 20);  //8horiz
  hit(50, 800, 500, 45);  //9horiz
  hit(width - 500, 900, 500, 50);  //10horiz  
    
   }

  if (level === 4) {
    
    //ecg line

    fill(255,0,0);
    
   rect(0, 350, 200, 1);//1top horiz
   rect(0, 400, 250, 1); //1bottom horiz
   stroke(255, 0, 0);
   line(200, 350, 350, 100); //1diag top
   line(250, 400, 350, 200); //1diag bottom
   line(350, 100, 470, 470); //2diag top
   line(350, 200, 450, 550); //2diag bottom
   line(470, 470, 650, 350); //3diag top
   line(450, 550, 700, 400); //3diag bottom
   rect(650, 350, 650, 1); //2top horiz
   rect(700, 400, 650, 1); //2bottom horiz

   
  }

 //level text
 
 if (level === 1 && showTitle1) {
  fill(255)
  textSize(90);
  textFont("arial");
  textAlign(CENTER)
  text("LEVEL 1: CONCEPTION", width/2, height/2);
  textSize(30);
  text("press                 to start", width/2, height/2 + 150);
  fill(255, 0, 0);
  text("ENTER", width/2 - 10, height/2 + 150);
  if (keyIsDown(ENTER)) {
   showTitle1 = false;
  }
  }
 if (level === 2 && showTitle2) {
  fill(255)
  textSize(90);
  textFont("arial");
  textAlign(CENTER)
  text("LEVEL 2: BIRTH", width/2, height/2);
  textSize(30);
  text("press                 to start", width/2, height/2 + 150);
  fill(255, 0, 0);
  text("ENTER", width/2 - 10, height/2 + 150);
  if (keyIsDown(ENTER)) {
   showTitle2 = false;
  }
  }
   if (level === 3 && showTitle3) {
  fill(255)
  textSize(90);
  textFont("arial");
  textAlign(CENTER)
  text("LEVEL 3: LIFE", width/2, height/2);
  textSize(30);
  text("press                 to start", width/2, height/2 + 150);
  fill(255, 0, 0);
  text("ENTER", width/2 - 10, height/2 + 150);
  if (keyIsDown(ENTER)) {
   showTitle3 = false;
  }
}
 if (level === 4 && showTitle4) {
  fill(255)
  textSize(90);
  textFont("arial");
  textAlign(CENTER)
  text("LEVEL 4: DEATH", width/2, height/2);
  textSize(30);
  text("press                 to start", width/2, height/2 + 150);
  fill(255, 0, 0);
  text("ENTER", width/2 - 10, height/2 + 150);
   
  
}
  //instructions
  fill(255);
  textSize(10);
  textFont("arial");
  textAlign(LEFT);
  text("Use the arrow keys to move the cell", 10, height - 20);
  textSize(8)
  fill(255, 0, 0);
  text("go LEFT and you will start again", 10, height - 10);
  if (keyIsDown(ENTER)) {
   showTitle4 = false;
  }

  //text after completing the game

  if (level === 5 && showTitle5) {
    automove = true;
  fill(255)
  textSize(90); 
  textFont("arial");
  textAlign(CENTER)
  text("You've completed your life", width/2, height/2);
  }
 if (level === 6 && showTitle6) {
  fill(255)
  textSize(30); 
  textFont("arial");
  textAlign(CENTER)
  text("did you actually reach something?", width/2, height/2);
 }

 if (level === 7 && showTitle7) {
  fill(255, 0, 0);
  textSize(30);
  text(" or just escape something else?", width/2, height/2 + 50);
  }

  if (level === 8 && showTitle8) {
    fill(255);
    textSize(50);
    textFont("times new roman");
    textAlign(CENTER);
    text("I learned that one can never go back", width/2, height/2 - 50); 
    text("that one should not ever try to go back", width/2, height/2);
    text("that the essence of life is going forward.", width/2, height/2 + 50);
    text("Life is really a one way street, isn't it?", width/2, height/2 + 100);
    fill(255, 0, 0);    
    textSize(20);
    text("- Agatha Christie", width/2, height/2 + 150); 
    
  }
   //end quote
  if (level === 10) {
    
   textSize(30);
    textFont("times new roman");
    textAlign(CENTER);
    text("you only have one life", width/2, height/2);
   
  }
  //cell
  fill(255);
  circle(playerX, playerY, 30, 30);

  //auto movement after completing the game
  if (automove) {
    playerY += height/2 - playerY;
    playerX += 3;    
  }
  // movement
  if (!automove) {
  if (keyIsDown(LEFT_ARROW)) {
    playerX = startX;
    playerY = startY;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    playerY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += 5;
  }
}
 // glitch effect
  stroke(random(255), 100, random(255));
  line(random(width), random(height),
 random(width), random(height));

  // level progression
  if (playerX > width - 20) {
    if (level < 11) {
    level++;
    playerX = startX;

    if (level === 4) {
    playerY = height / 2 + 37;
    } else {
    playerY = startY;
    showTitle = true;
    }
  }
       
}
}

//function for collisions
function hit(x, y, w, h) {
  if (
    playerX > x &&
    playerX < x + w &&
    playerY > y &&
    playerY < y + h
  ) {
    resetPlayer();
  }
}
