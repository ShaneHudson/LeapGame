// Pollyfill for RequestAnimationFrame
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var userX, userY;
var canvas = document.querySelector('#game');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext('2d');

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

function logic()  {
	// LOGIC GOES HERE

	requestAnimationFrame(render);
}

function render() {
	// RENDERING GOES HERE
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(userX + window.innerWidth/2, userY + window.innerHeight, 10, 10);
}

setInterval(logic, 1000/30);