
//scenes
let start;
let startB;
let startBsprite;
let street;
let star;
let starsprite;
let stage = 0;
let sit1;
let sit2;
let sit3;
let sit3a;
let sit4;
let sit5;
let sit5a;
let gameover;

//sounds
let intro;
let night;
let club;
let murmer;
let end;
let car;
let angry;
let yelling;
let grunt;
let footsteps;
let rev;
let woman;
let cup;


function preload() {
	//images 
  start = loadImage('assets/start.png');
  startB = loadImage('assets/startb.png');
  street = loadImage('assets/street.jpg');
  star = loadImage('assets/star.jpg');
  //sounds
}

function setup() {
  createCanvas(); 
  displayMode("fullscreen");


  startBsprite = new Sprite();
  startBsprite.diameter = 100;
  startBsprite.x = 750;
  startBsprite.y = 600;
  startBsprite.image = startB;

  starsprite = new Sprite();
  starsprite.diameter = 100;
  starsprite.x = width / 2;
  starsprite.y = height / 2;
  starsprite.image = star;


  //image(start);

  allSprites.autoDraw = false;
}

function draw() {
  //clear();
   background("black");

  switch (stage) {
    case 0:
	   image(start, 400, 100);

	   startBsprite.draw();
	   
	   if (startBsprite.mouse.pressing()) {
		 print("Start button is pressed.");
		 stage = 1; // Move to case 1
	   }
      break;
      
    case 1:
      image(street, 500,500);

	  star.draw()
	  if (keyIsDown(LEFT_ARROW)) {
		star.x -= 5; 
	  }
	  if (keyIsDown(RIGHT_ARROW)) {
		star.x += 5; 
	  }
	  if (keyIsDown(UP_ARROW)) {
		star.y -= 5; 
	  }
	  if (keyIsDown(DOWN_ARROW)) {
		star.y += 5; 
	  }
      break;
      
    case 2:
      // Code for Stage 2
      break;
  }
}
