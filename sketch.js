
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
  star = loadImage('assets/star.png');
  //sounds
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  fullscreen(true);


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

  //allSprites.autoDraw = false;
 //starsprite.hide();


}

function draw() {
   background("black");

  switch (stage) {
    case 0:
	   image(start, 400, 100);

	   startBsprite.visible = true;
	   starsprite.visible = false;
	   
	   if (startBsprite.mouse.presses()) {
		 print("Start button is pressed.");
		 stage = 1; // Move to case 1
	   }
      break;
      
    case 1:
        image(street, 1, 10);
      camera.position.x = starsprite.position.x;
      camera.position.y = starsprite.position.y;

      startBsprite.visible = false;
      starsprite.visible = true;

	  starsprite.draw()
	  if (keyIsDown(LEFT_ARROW)) {
		starsprite.x -= 5; 
	  }
	  if (keyIsDown(RIGHT_ARROW)) {
		starsprite.x += 5; 
	  }
	  if (keyIsDown(UP_ARROW)) {
		starsprite.y -= 5; 
	  }
	  if (keyIsDown(DOWN_ARROW)) {
		starsprite.y += 5; 
	  }
      break;
      
    case 2:
      // Code for Stage 2
      break;
  }
}
