
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
let next;
let nextsprite;
let hold;
let holdsprite;
let a;
let asprite;
let b;
let bsprite;
let c;
let csprite;

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
	next = loadImage('assets/next.png');
	hold = loadImage('assets/hold.png');
	a = loadImage('assets/a.png');
	b = loadImage('assets/b.png');
	c = loadImage('assets/c.png');
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

	nextsprite = new Sprite;
	nextsprite.diameter = 100;
	nextsprite.x = 300;
	nextsprite.y = 400;
	nextsprite.image = next;
	nextsprite.collider = "kinematic";

	startBsprite = new Sprite();
	startBsprite.diameter = 50;
	startBsprite.x = 350;
	startBsprite.y = 455;
	startBsprite.image = startB;
	startBsprite.collider = "kinematic";

	starsprite = new Sprite();
	starsprite.scale = .7;
	starsprite.diameter = 10;
	starsprite.x = 300;
	starsprite.y = 450;
	starsprite.image = star;
	starsprite.collider = "kinematic";

	drinksprite = new Sprite();
	drinksprite.scale = .9;
	drinksprite.diameter = 50;
	drinksprite.x = 80;
	drinksprite.y = 350;
	drinksprite.image = drink;
	drinksprite.collider = "kinematic";

	carsprite = new Sprite;
	carsprite.scale = 1;
	carsprite.diameter = 50;
	carsprite.x = 350;
	carsprite.y = 180;
	carsprite.image = car;
	carsprite.collider = "kinematic";

	shadowsprite = new Sprite;
	shadowsprite.scale = 1;
	shadowsprite.diameter = 50;
	shadowsprite.x = 450;
	shadowsprite.y = 25;
	shadowsprite.image = shadow;
	shadowsprite.collider = "kinematic";

	couchsprite = new Sprite;
	couchsprite.scale = 1;
	couchsprite.diameter = 50;
	couchsprite.x = 105;
	couchsprite.y = -100;
	couchsprite.image = couch;
	couchsprite.collider = "kinematic";

	keysprite = new Sprite;
	keysprite.scale = 1;
	keysprite.diameter = 50;
	keysprite.x = 420;
	keysprite.y = -200;
	keysprite.image = key;
	keysprite.collider = "kinematic";

	holdsprite = new Sprite();
	holdsprite.diameter = 100;
	holdsprite.x = 300;
	holdsprite.y = 10;
	holdsprite.image = hold;
	holdsprite.collider = "kinematic";

	asprite = new Sprite;
	asprite.scale = .5;
	asprite.diameter = 50;
	asprite.x = 70;
	asprite.y = 110;
	asprite.image = a;
	asprite.collider = "kinematic";

	bsprite = new Sprite;
	bsprite.scale = .5;
	bsprite.diameter = 50;
	bsprite.x = 70;
	bsprite.y = 200;
	bsprite.image = b;
	bsprite.collider = "kinematic";

	csprite = new Sprite;
	csprite.scale = .5;
	csprite.diameter = 50;
	csprite.x = 70;
	csprite.y = 300;
	csprite.image = c;
	csprite.collider = "kinematic";

}

function draw() {
	background("black");

	switch (stage) {
		case 0:
			image(start, 30, 10, 500, 500);

			startBsprite.visible = true;
			nextsprite.visible = false;
			starsprite.visible = false;
			streetsprite.visible = false;
			drinksprite.visible = false;
			carsprite.visible = false;
			shadowsprite.visible = false;
			couchsprite.visible = false;
			keysprite.visible = false;
			holdsprite.visible = false;
			asprite.visible = false;
			bsprite.visible = false;
			csprite.visible = false;


			if (startBsprite.mouse.presses()) {
				print("Start button is pressed.");
				stage = 1; // Move to case 1
			}
			break;

		case 1:

			startBsprite.visible = false;
			nextsprite.visible = true;
			starsprite.visible = false;
			streetsprite.visible = false;
			drinksprite.visible = false;
			carsprite.visible = false;
			shadowsprite.visible = false;
			couchsprite.visible = false;
			keysprite.visible = false;
			holdsprite.visible = false;
			asprite.visible = false;
			bsprite.visible = false;
			csprite.visible = false;

			text("After a night out with some friends, you decide to walk home from the club alone.", 50, 50, 50);
			text("You must choose your actions wisely in order to make it home safely.", 50, 85, 50);
			text("Use keys “a,b, and c” to make decisions and the up arrow key to move around.", 50, 150, 50);
			text("Good luck surviving the walk home.", 50, 200, 50);
			fill("white");
			if (nextsprite.mouse.presses()) {
				print("next button is pressed.");
				stage = 2; // Move to case 2
			}
			break;


		case 2:

			holdsprite.visible = false;
			startBsprite.visible = false;
			starsprite.visible = true;
			nextsprite.visible = false;
			streetsprite.visible = true;
			drinksprite.visible = true;
			carsprite.visible = true;
			shadowsprite.visible = true;
			couchsprite.visible = true;
			keysprite.visible = true;
			asprite.visible = false;
			bsprite.visible = false;
			csprite.visible = false;


			streetsprite.draw(0, 200);

			starsprite.draw();

			drinksprite.draw(80, 350);

			//streetsprite.draw();
			if (keyIsDown(UP_ARROW) && streetsprite.y < 660) {
				streetsprite.y += 2;
				drinksprite.y += 2;
				carsprite.y += 2;
				shadowsprite.y += 2;
				couchsprite.y += 2;
				keysprite.y += 2;

				console.log(streetsprite.y)
			}
			if (keyIsDown(DOWN_ARROW) && streetsprite.y > 0) {
				streetsprite.y -= 2;
				drinksprite.y -= 2;
				carsprite.y -= 2;
				shadowsprite.y -= 2;
				couchsprite.y -= 2;
				keysprite.y -= 2;
			}



			if (drinksprite.mouse.presses()) {
				print("drink is pressed.");
				stage = 3;
			}

			break;

		case 3:

			print("case 3");

			holdsprite.visible = false;
			startBsprite.visible = false;
			starsprite.visible = false;
			nextsprite.visible = false;
			streetsprite.visible = false;
			drinksprite.visible = false;
			carsprite.visible = false;
			shadowsprite.visible = false;
			couchsprite.visible = false;
			keysprite.visible = false;
			asprite.visible = true;
			bsprite.visible = true;
			csprite.visible = true;


			text("As you are leaving the club, three drunk men standing outside ask for you to post game at their apartment", 50, 50, 50);
			text("Ignore them and keep walking", 100, 110, 50);
			text("Tell them your boyfriend is waiting for you at home", 100, 200, 50);
			text("Accept and go post game with them", 100, 300, 50);

			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 4; 
			}

			break;

		case 4:
			holdsprite.visible = false;
			startBsprite.visible = false;
			starsprite.visible = false;
			nextsprite.visible = true;
			streetsprite.visible = false;
			drinksprite.visible = false;
			carsprite.visible = false;
			shadowsprite.visible = false;
			couchsprite.visible = false;
			keysprite.visible = false;
			asprite.visible = false;
			bsprite.visible = false;
			csprite.visible = false;

			text("They leave you alone, you keep walking home", 50,50,50);
			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2; 
			}

			break;

		case 5:
			
		break;

		case 6:
			
			break;

		case 7:
			
		break;
	}


}
