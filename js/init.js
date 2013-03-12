// Pollyfill for RequestAnimationFrame
(function() {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	                          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

})();


var canvas = document.querySelector('#game');
canvas.height = (window.innerHeight-20);
canvas.width = window.innerWidth;

var userX, userY;
var posX = 0;
var posY = 0;
var start = new Date().getTime(),
    elapsed = '0.0';
var speed = 30;


var ctx = canvas.getContext('2d');
var map = new Map();
var player = new Player();

var Init = (function() {

	function logic()  {
		// LOGIC GOES HERE
		player.logic();
		if (map.collide(player.pos().posX, player.pos().posY)) document.title = 'FUCK WE ARE DEAD';
		requestAnimationFrame(render);
		speed++;
	}

	function render() {
		// RENDERING GOES HERE
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		map.draw();
		player.draw();
	}	

	window.setInterval(function()
	{
		var time = new Date().getTime() - start;
		elapsed = Math.floor(time / 100) / 10;
		if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
		document.getElementById('timer').innerHTML = elapsed;
	}, 100);

	setInterval(logic, 1000/60);
})();