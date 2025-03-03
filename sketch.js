
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
let play;
let playsprite;

let stage = 0;
let sit1;
let sit2;
let sit3;
let sit3a;
let sit4;
let sit5;
let sit5a;
let gameover;



function preload() {
	//images 
	start = loadImage('assets/start.png');
	startB = loadImage('assets/startb.png');
	street = loadImage('assets/street.png');
	star = loadImage('assets/feet.png');
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
	play = loadImage('assets/play.png');
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
	starsprite.scale = .3;
	starsprite.diameter = 3;
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

	playsprite = new Sprite;
	playsprite.scale = .5;
	playsprite.diameter = 100;
	playsprite.x = 300;
	playsprite.y = 400;
	playsprite.image = play;
	playsprite.collider = "kinematic";

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
			playsprite.visible = false;

			streetsprite.x = 300;
			streetsprite.y = 10;

			startBsprite.x = 350;
			startBsprite.y = 455;

			starsprite.x = 300;
			starsprite.y = 450;

			nextsprite.x = 300;
			nextsprite.y = 400;

			drinksprite.x = 80;
			drinksprite.y = 350;

			carsprite.x = 350;
			carsprite.y = 180;

			shadowsprite.x = 450;
			shadowsprite.y = 25;

			couchsprite.x = 105;
			couchsprite.y = -100;

			keysprite.x = 420;
			keysprite.y = -200;

			playsprite.x = 300;
			playsprite.y = 400;


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
			playsprite.visible = false;

			text("After a night out with some friends, you decide to walk home from the club alone.", 50, 50, 50);
			text("You must choose your actions wisely in order to make it home safely.", 50, 85, 50);
			text("Use the up and down arrows to walk home", 50, 120, 50);
			text("Click the icons in order as they appear on the screan then click “a,b, or c” to make decisions.", 50, 150, 50);
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
			playsprite.visible = false;


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

			if (carsprite.mouse.presses()) {
				print("car is pressed.");
				stage = 7;
			}

			if (shadowsprite.mouse.presses()) {
				print("shadow is pressed.");
				stage = 11;
			}

			if (couchsprite.mouse.presses()) {
				print("couch is pressed.");
				stage = 17;
			}

			if (keysprite.mouse.presses()) {
				print("key is pressed.");
				stage = 21;
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
			playsprite.visible = false;


			text("As you are leaving the club, three drunk men standing outside ask for you to post game at their apartment", 50, 50, 50);
			text("Ignore them and keep walking", 100, 110, 50);
			text("Tell them your boyfriend is waiting for you at home", 100, 200, 50);
			text("Accept and go post game with them", 100, 300, 50);

			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 4;
			}

			if (bsprite.mouse.presses()) {
				print("b is pressed.");
				stage = 5;
			}

			if (csprite.mouse.presses()) {
				print("c is pressed.");
				stage = 6;
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
			playsprite.visible = false;

			text("They leave you alone, you keep walking home", 50, 50, 50);
			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}

			break;

		case 5:
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
			playsprite.visible = false;

			text("They yell and call you a liar, you keep walking home", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 6:
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
			playsprite.visible = false;

			text("GAME OVER, they expected more than just a post game…", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 0;
			}
			break;

		case 7:
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
			playsprite.visible = false;


			text("A car revs its engine and then slows down next to you, A man yells out the window to cat call you", 50, 50, 50);
			text("Yell back “fuck off”", 100, 110, 50);
			text("Pretend to be on a call", 100, 200, 50);
			text("Ignore him and hope he drives off", 100, 300, 50);

			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 8;
			}

			if (bsprite.mouse.presses()) {
				print("b is pressed.");
				stage = 9;
			}

			if (csprite.mouse.presses()) {
				print("c is pressed.");
				stage = 10;
			}

			break;

		case 8:
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
			playsprite.visible = false;

			text("He gets mad and throws a solo cup at you then drives off", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 9:
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
			playsprite.visible = false;

			text("He drives off", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 10:
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
			playsprite.visible = false;

			text("He yells “fine, you’re ugly anyways!” and drives off", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 11:
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
			playsprite.visible = false;


			text("As you continue to walk, you feel someone following closely behind you", 50, 50, 50);
			text("Walk faster", 100, 110, 50);
			text("Cross the street", 100, 200, 50);
			text("Turn around and use your pepper spray", 100, 300, 50);

			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 12;
			}

			if (bsprite.mouse.presses()) {
				print("b is pressed.");
				stage = 13;
			}

			if (csprite.mouse.presses()) {
				print("c is pressed.");
				stage = 14;
			}
			break;

		case 12:
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
			csprite.visible = false;
			playsprite.visible = false;


			text("The man begins to walk faster to catch up with you", 50, 50, 50);
			text("Use your rape whistle", 100, 110, 50);
			text("Tell him to stop following you", 100, 200, 50);


			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 15;
			}

			if (bsprite.mouse.presses()) {
				print("b is pressed.");
				stage = 16;
			}
			break;

		case 13:
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
			playsprite.visible = false;

			text("the man doesn’t follow you across the street and leaves you alone", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 14:
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
			playsprite.visible = false;

			text("GAME OVER, You just pepper sprayed an innocent old man walking his dog behind you…", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 0;
			}
			break;

		case 15:
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
			playsprite.visible = false;

			text("You scare him off ", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 16:
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
			playsprite.visible = false;

			text("GAME OVER, he attacks you…", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 0;
			}
			break;

		case 17:
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
			playsprite.visible = false;


			text("An old man with a limp and a cast is trying to load an old couch into the back of a van, he asks you for help", 50, 50, 50);
			text("Respond “Sorry, I can’t. I’m in a hurry” and walk away", 100, 110, 50);
			text("Accept and offer to help", 100, 200, 50);
			text("You pretend not to hear him and continue walking", 100, 300, 50);

			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 18;
			}

			if (bsprite.mouse.presses()) {
				print("b is pressed.");
				stage = 19;
			}

			if (csprite.mouse.presses()) {
				print("c is pressed.");
				stage = 20;
			}
			break;

		case 18:
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
			playsprite.visible = false;

			text("He continues loading the couch without you", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 19:
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
			playsprite.visible = false;

			text("GAME OVER, he was inspired by Ted Bundy and abducts you…", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 0;
			}
			break;

		case 20:
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
			playsprite.visible = false;

			text("He calls you a bitch and continure to load the couch without you", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 2;
			}
			break;

		case 21:
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
			playsprite.visible = false;


			text("You’re at the door of your apartment building looking for your key fob in your purse. A man around your age approaches you and says “I forgot my fob, can you open the door for me please?", 40, 50, 50);
			text("He looks trusting so you let him in the building", 100, 110, 50);
			text("Tell him no and shut the door behind you", 100, 200, 50);
			text("Ask him his apartment number for proof", 100, 300, 50);

			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 22;
			}

			if (bsprite.mouse.presses()) {
				print("b is pressed.");
				stage = 23;
			}

			if (csprite.mouse.presses()) {
				print("c is pressed.");
				stage = 24;
			}
			break;

		case 22:
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
			playsprite.visible = false;

			text("GAME OVER, he lied about living in the building a followed you to your unit…", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 0;
			}
			break;

		case 23:
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
			playsprite.visible = false;

			text("He gets frustrated and continues to wait outside the building", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 28;
			}
			break;

		case 24:
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
			playsprite.visible = false;


			text("He responds with your close friend’s apartment number so you know he's lying", 50, 50, 50);
			text("Call him out", 100, 110, 50);
			text("Tell him no and shut the door behind you", 100, 200, 50);
			text("Hesitate but let him in out of fear of confrontation", 100, 300, 50);

			if (asprite.mouse.presses()) {
				print("a is pressed.");
				stage = 25;
			}

			if (bsprite.mouse.presses()) {
				print("b is pressed.");
				stage = 26;
			}

			if (csprite.mouse.presses()) {
				print("c is pressed.");
				stage = 27;
			}
			break;

		case 25:
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
			playsprite.visible = false;

			text("He groans and walks away", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 28;
			}
			break;

		case 26:
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
			playsprite.visible = false;

			text("He groans and walks away", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 28;
			}
			break;

		case 27:
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
			playsprite.visible = false;

			text("GAME OVER, he follows you to your unit…", 50, 50, 50);

			if (nextsprite.mouse.presses()) {
				print("next is pressed.");
				stage = 0;
			}
			break;

		case 28:
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
			asprite.visible = false;
			bsprite.visible = false;
			csprite.visible = false;
			playsprite.visible = true;

			text("Congratulations, you made it home safely… this time", 50, 50, 50);

			if (playsprite.mouse.presses()) {
				print("play is pressed.");
				stage = 0;
			}
			break;

	}


}
