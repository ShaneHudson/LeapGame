var game = document.querySelector('#game');
var ctx = game.getContext('2d');
var y = 10;
var x = (window.innerWidth + 30);
game.height = height = (window.innerHeight - 30); 
game.width = width = window.innerWidth;
var y = 10;
var x = (width + 100);
var x2 = (width + 10);
var y2 = (height - 60);

drawThings();

function drawThings() {
	ctx.clearRect(0, 0, width, height);
	--x;
	--x2;
	if ((y2 - y) < 0 ) {
		ctx.fillStyle = "#0000CC";
	} else {
		ctx.fillStyle = "#ff0000";
	}
	ctx.fillRect(x, y, 50, 50);
	ctx.fillRect(x2, y2, 50, 50);
}

function logic () {
	requestAnimationFrame(drawThings);
}

requestAnimationFrame(drawThings);
setInterval(logic, 1000/30);