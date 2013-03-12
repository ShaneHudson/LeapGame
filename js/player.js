var Player = (function() {
	var controllerOptions = {enableGestures: false};
	Leap.loop(controllerOptions, function(frame, done) {
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
			userX = pointer.tipPosition[0] + window.innerWidth/2;
			userY = -pointer.tipPosition[1] + window.innerHeight;
		}
		done(); // if you don't invoke this, you won't get more events
	});

		canvas.addEventListener('mousemove', function(e) {
			userX = e.clientX;
			userY = e.clientY;
		});



	function logic()  {
		//posX = lerp(posX, userX, 0.1);
		//posY = lerp(posY, userY, 0.1);
		posX = userX;
		posY = userY;
	}

	function draw() {
		ctx.fillStyle = "#00FF00";
		ctx.fillRect(posX, posY, 10, 10);
	}

	return {
		draw : draw,
		logic : logic,
		controllerOptions : controllerOptions
	}

});