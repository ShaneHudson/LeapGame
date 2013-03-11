// Pollyfill for RequestAnimationFrame
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


function logic()  {
	// LOGIC GOES HERE
	requestAnimationFrame(render);
}

function render() {
	// RENDERING GOES HERE
}

setInterval(logic, 1000/60);