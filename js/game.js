var game = document.querySelector('#game');
var ctx = game.getContext('2d');
var x = y = 10;
game.height = width = window.innerHeight; 
game.width = height = window.innerWidth;
drawThings();

function drawThings() {
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(x, y, 50, 50);
}

function logic () {
	++x;
	if (x < game.width - width) requestAnimationFrame(drawThings);
}

requestAnimationFrame(drawThings);
setInterval(logic, 1000/60);