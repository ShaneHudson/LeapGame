var game = document.querySelector('#game');
var ctx = game.getContext('2d');
game.height = height = (window.innerHeight - 30); 
game.width = width = window.innerWidth;
var objects = new Array();
drawThings();

function drawThings() {
	ctx.clearRect(0, 0, width, height);
	for (i=0; i<objects.length; i++) {
		ctx.fillStyle = "#ff0000";
		objects[i].x--;
		ctx.fillRect(objects[i].x, objects[i].y, 50, 50);
	}
	if (getRandomBool()) {
		i = objects.length;
		objects[i] = new Object();
		objects[i].x = (width + 10);
		objects[i].y = getRandomInt(0, height);
	}	
}

function logic () {
	requestAnimationFrame(drawThings);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBool() {
	if (getRandomInt(0, 50) == 1) {
		return true;
	} else {
		return false;
	}
}

requestAnimationFrame(drawThings);
setInterval(logic, 1000/30);