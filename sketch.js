
//scenes
let start;
let startB;
let street;
let star;
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
  start = loadImage('assets/start.jpg');
  startBImage = loadImage('assets/startB.jpg');
  street = loadImage('assets/street.jpg');
  star = loadImage('assets/star.jpg');
}

function setup() {
  createCanvas(500, 500); 


  startB = new Sprite();
  startB.diameter = 100;
  startB.x = width / 2;
  startB.y = height / 2;

  star = new Sprite();
  star.diameter = 100;
  star.x = width / 2;
  star.y = height / 2;

  //image(start);
}

function draw() {
  clear();

  switch (stage) {
    case 0:
	   image("start", 0, 0);

	   startB.draw();
	   
	   if (startB.pressing() && startB.mouse.overlapping) {
		 print("Start button is pressed.");
		 stage = 1; // Move to case 1
	   }
      break;
      
    case 1:
      image("street", 500,500);

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
