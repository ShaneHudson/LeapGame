// Pollyfill for RequestAnimationFrame
(function() {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	                          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

})();


var canvas = document.querySelector('#game');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var userX, userY;
var posX = 0;
var posY = 0;


var ctx = canvas.getContext('2d');
var map = new Map();
var player = new Player();

var Init = (function() {

	function logic()  {
		// LOGIC GOES HERE
		player.logic();
		requestAnimationFrame(render);
	}

	function render() {
		// RENDERING GOES HERE
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		map.draw();
		player.draw();
	}
	setInterval(logic, 1000/30);	

})();