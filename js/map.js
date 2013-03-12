var Map = (function() {
	var objects = new Array();

	function draw() {
		for (i=0; i<objects.length; i++) {
			if (objects[i] != null) {
				ctx.fillStyle = "#ff0000";
				objects[i].x--;
				ctx.fillRect(objects[i].x, objects[i].y, 50, 50);
				if (objects[i].x < -50) {
					delete objects[i];
				}
			}
		}
		if (getRandomBool()) {
			i = objects.length;
			objects[i] = new Object();
			objects[i].x = (canvas.width + 10);
			objects[i].y = getRandomInt(0, canvas.height);
		}	
	}
	
	function collide(x, y) {
		for (i-0; i<objects.length; i++) {
			if (objects[i] != null) {
				if (objects[i].x = x && objects[i].y = y) {
					return true;
					break;
				}
			}
		}
		return false;
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function getRandomBool() {
		if (getRandomInt(0, (40000 /canvas.height)) == 1) {
			return true;
		} else {
			return false;
		}
	}

	return {
		draw : draw,
		collide : collide
	}

});