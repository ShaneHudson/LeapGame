var Map = (function() {
	var asteroids = new Array();
	for (i=0; i<9; i++) {
		asteroids[i] = new Image();
		asteroids[i].src = 'asteroid_'+(i+1)+'.png';
	}
	var objects = new Array();

	function draw() {
		for (i=0; i<objects.length; i++) {
			if (objects[i] != null) {
				objects[i].x--;
				ctx.drawImage(asteroids[objects[i].img], objects[i].x, objects[i].y, objects[i].size, objects[i].size);
				if (objects[i].x < -128) {
					delete objects[i];
				}
			}
		}
		if (getRandomBool()) {
			i = objects.length;
			objects[i] = new Object();
			objects[i].x = canvas.width;
			objects[i].y = getRandomInt(0, canvas.height);
			objects[i].img = getRandomInt(0, 8);
			objects[i].size = getRandomInt(50, 150);
		}	
	}
	
	function collide(x, y) {
		for (i=0; i<objects.length; i++) {
			if (objects[i] != null) {
				if ((objects[i].x < x && (objects[i].x + objects[i].size) > x) && (objects[i].y < y && (objects[i].y + objects[i].size) > y)) {
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
		if (getRandomInt(0, (50000 /canvas.height)) == 1) {
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