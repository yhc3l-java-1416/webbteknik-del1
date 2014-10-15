window.cancelRequestAnimFrame = (function () {
	"use strict";
	return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
})();
// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function () {
	"use strict";
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function ( /* function */ callback, /* DOMElement */ element) {
		window.setTimeout(callback, 1000 / 60);
	};
})();
document.addEventListener("DOMContentLoaded", function () {
	var canvas = document.querySelector("canvas"),
		myDog = createAnimal(),
		context = canvas.getContext("2d");
	canvas.width = 800;
	canvas.height = 800;
	myDog.x = 50;
	myDog.y = 50;
	context.fillStyle = "yellow";
	context.fillRect(0, 0, canvas.width, canvas.height);
	var animate = function () {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.drawImage(myDog.canvas, myDog.x, myDog.y);
			requestAnimFrame(animate);
		};
	animate();
	setInterval(function () {
		switch (myDog.getDirection()) {
		case "n":
			myDog.y = myDog.y - 1;
			break;
		case "s":
			myDog.y = myDog.y + 1;
			break;
		case "e":
			myDog.x = myDog.x + 1;
			break;
		case "w":
			myDog.x = myDog.x - 1;
			break;
		}
	}, 10);
});