
//scenes
let start;
let startB;
let startBsprite;
let street;
let streetsprite;
let star;
let starsprite;
let car;
let couch;
let couchsprite;
let drink;
let drinksprite;
let key;
let keysprite;
let shadow;
let shadowsprite;
let carsprite;

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
let cars;
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
  street = loadImage('assets/street.png');
  star = loadImage('assets/star.png');
  car = loadImage('assets/car.png');
  couch = loadImage('assets/couch.png');
  drink = loadImage('assets/drink.png');
  key = loadImage('assets/key.png');
  shadow = loadImage('assets/shadow.png');
  //sounds
}

function setup() {
  createCanvas(600, 500); 
  displayMode('centered', 'pixelated', 10);
  //fullscreen(true);
  
  streetsprite = new Sprite();
  streetsprite.diameter = 100;
  streetsprite.x = 300;
  streetsprite.y = 10;
  streetsprite.image = street;
  streetsprite.collider = "kinematic";

  startBsprite = new Sprite();
  startBsprite.diameter = 50;
  startBsprite.x = 350;
  startBsprite.y = 400;
  startBsprite.image = startB;
  startBsprite.collider = "kinematic";

  starsprite = new Sprite();
  starsprite.scale = .7;
  starsprite.diameter = 10;
  starsprite.x = 300;
  starsprite.y = 450;
  starsprite.image = star;
  starsprite.collider = "kinematic";


  //image(start);

  //allSprites.autoDraw = false;
 //starsprite.hide();


}

function draw() {
   background("black");

  switch (stage) {
    case 0:
	   image(start, 30, 10, 500, 500);

	   startBsprite.visible = true;
	   starsprite.visible = false;
	   streetsprite.visible = false;
	   
	   if (startBsprite.mouse.presses()) {
		 print("Start button is pressed.");
		 stage = 1; // Move to case 1
	   }
      break;
      
    case 1:
	
      startBsprite.visible = false;
      starsprite.visible = true;
	  streetsprite.visible = true;

	  streetsprite.draw(0,200);
	  
	  starsprite.draw();

	  //streetsprite.draw();
	  if (keyIsDown(UP_ARROW) && streetsprite.y < 660) {
		streetsprite.y += 5; 
		console.log(streetsprite.y)
	  }
	  if (keyIsDown(DOWN_ARROW) && streetsprite.y > 0) {
		streetsprite.y -= 5; 
	  }
	
      break;
      
    case 2:
      // Code for Stage 2
      break;
  }
 // camera.y = streetsprite.y;
}
