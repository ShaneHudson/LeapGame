var Map = (function() {
	var objects = new Array();
	var img = new Image();
	img.src = 'asteroid.png';

	function draw() {
		for (i=0; i<objects.length; i++) {
			if (objects[i] != null) {
				objects[i].x--;
				ctx.drawImage(img, objects[i].x, objects[i].y);
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
		for (i=0; i<objects.length; i++) {
			if (objects[i] != null) {
				if ((objects[i].x < x && (objects[i].x + 100) > x) && (objects[i].y < y && (objects[i].y + 100) > y)) {
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
		if (getRandomInt(0, (30000 /canvas.height)) == 1) {
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