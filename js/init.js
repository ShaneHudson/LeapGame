// Pollyfill for RequestAnimationFrame
(function() {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	                          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

})();

var userX, userY;
var posX = 0;
var posY = 0;

var canvas = document.querySelector('#game');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext('2d');
var game = new GameLogic();

var Init = (function() {

	Leap.loop(function(frame, done) {
		var pointer = frame.pointables[0];
		if (frame.pointables.length > 0) {
			for (var i = 0; i < frame.pointables.length; i++) {
			    	var pointable = frame.pointables[i];
			    	if (pointable.tipPosition[1] > pointer.tipPosition[1])
			    		pointer = pointable;
		    }
		}
		if (pointer != null)  {
			//console.log(pointer.tipPosition);
			userX = pointer.tipPosition[0];
			userY = -pointer.tipPosition[1];
		}
		done(); // if you don't invoke this, you won't get more events
	});

	canvas.addEventListener('mousemove', function(e) {
		userX = e.clientX;
		userY = e.clientY;
	});

	function logic()  {
		// LOGIC GOES HERE
		posX = lerp(posX, userX, 0.5);
		posY = lerp(posY, userY, 0.5);
		requestAnimationFrame(render);
	}

	function render() {
		// RENDERING GOES HERE
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#00FF00";
		ctx.fillRect(posX + window.innerWidth/2, posY + window.innerHeight, 10, 10);
		game.draw();
	}


	function lerp(start, end, speed) {
		return start + (end - start) * speed;
	}

	setInterval(logic, 1000/30);
})();