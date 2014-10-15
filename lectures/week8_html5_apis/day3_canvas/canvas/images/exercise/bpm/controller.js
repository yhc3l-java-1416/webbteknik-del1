// Disable dragging of page
document.addEventListener("touchmove", function(e) {
	e.preventDefault();
});
// requestAnim shim layer by Paul Irish
window.cancelRequestAnimFrame = (function() {
	return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
} )();

// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(/* function */callback, /* DOMElement */element) {
		window.setTimeout(callback, 1000 / 60);
	};

})();

//global variables
var canvas, context;

// Create a function for resizing the canvas so it fits the fullscreen
var resizeCanvas = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};
// A function for initialising the canvas and add it to the body
var init = function() {
	canvas = document.createElement('canvas');
	resizeCanvas();
	context = canvas.getContext('2d');
	document.body.appendChild(canvas);
	// If the user resizes the screen, resize the canvas (Note this will clear the canvas)
	window.addEventListener("resize", resizeCanvas);
};
// initialise the canvas
init();


var draw = function(beat) {
	canvas.width = canvas.width;
	context.fillStyle = context.createPattern(keyFrames[beat-1](), "repeat");
	context.fillRect(0, 0, canvas.width, canvas.height);
};

var anime;
var animate = ( function() {
	var startedTime = new Date(), first = true, beatsInBar = keyFrames.length, beat = 0, last = startedTime;
	return function(startBeat) {
		var currentTime = new Date(), lastTime = currentTime - last, millisecs = bpm.getBeatDistance(), timeTaken = currentTime - startedTime;
		// recursive function calling itself for every keyframe
		anime = requestAnimFrame(animate);
		// Allow a beat restart if you send a 1 to startBeat
		if((!first) && startBeat === 1) {
			console.log("restart");
			startedTime = currentTime;
			last = currentTime;
			beat = startBeat;
		} else {
			first = false;
		}
		// If we are within 20 millisecs of the desired beat start animation
		if(lastTime / millisecs > 0.9 && (millisecs % timeTaken < 20 || timeTaken % millisecs < 20)) {
			beat = ((beat === beatsInBar) ? 1 : beat + 1);
			draw(beat);
			last = currentTime;
		}
	};
}());

draw(1);

var tap = ( function() {
	var lastTime = new Date();
	return function() {
		var currentTime = new Date();
		bpm.tap();
		cancelRequestAnimFrame(anime);
		// Restart the beat counter if more than a second has passed since the last tie we tapped
		if((currentTime - lastTime) > 1000) {
			animate(1);
		} else {
			// If we are not doing a restart just animate
			if(bpm.getBeatDistance() > 0) {
				animate();
			}
		}
		lastTime = currentTime;
	}
}());
document.addEventListener("keypress", function(evt) {
	var k = evt ? evt.which : window.event.keyCode;
	if(k == 32) {
		tap();
	}
}, false);
document.addEventListener("touchstart", tap, false);
