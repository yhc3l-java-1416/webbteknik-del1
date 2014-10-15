/*jslint browser:true */
/*global requestAnimFrame: false,alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
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
	"use strict";
	var canvas = document.querySelector("canvas"),
		context = canvas.getContext("2d"),
		animals = [],
		animate = function () {
			var i;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(0,0,canvas.width,canvas.height);
			for (i = 0; i < animals.length; i = i + 1) {
				context.drawImage(animals[i].canvas, animals[i].x, animals[i].y);
			}
			requestAnimFrame(animate);
		};
	canvas.width = 850;
	canvas.height = 850;
	context.fillStyle ="yellow";
	context.fillRect(0,0,canvas.width,canvas.height);
	animate();
	var randomStart = function(animal){
		animal.x = Math.floor(Math.random() * (canvas.width - 200)) + 100;
		animal.y = Math.floor(Math.random() * (canvas.height - 200)) + 100;
	};
	/*animals.push(createAnimal("greyDog", true));
	animals.push(createAnimal("whiteDog", true));
	animals.push(createAnimal("blackDog", true));
	animals.push(createAnimal("blackCat", true));
	animals.push(createAnimal("whiteCat", true));
	animals.push(createAnimal("greyDog", true));
	animals.push(createAnimal("blackCat", true));
	animals.push(createAnimal("whiteCat", true));
	animals.push(createAnimal("greyDog", true));
	animals.push(createAnimal("whiteDog", true));
	animals.push(createAnimal("blackDog", true));
	animals.push(createAnimal("blackCat", true));
	animals.push(createAnimal("whiteCat", true));
	animals.push(createAnimal("greyDog", true));
	animals.push(createAnimal("whiteDog", true));*/
	animals.push(createAnimal("brownDog", true));
	animals.push(createAnimal("whiteDog"));
	for(var i = 0; i < animals.length; i ++){
		randomStart(animals[i]);
	}
	var calculatePosition = function () {
			var i;
			for (i = 0; i < animals.length; i = i + 1) {
				switch (animals[i].getDirection()) {
				case "n":
					if (animals[i].y >= 1) {
						animals[i].y = animals[i].y - 1;
					}
					break;
				case "s":
					if (animals[i].y + animals[i].canvas.height <= canvas.height - 1) {
						animals[i].y = animals[i].y + 1;
					}
					break;
				case "e":
					if (animals[i].x + animals[i].canvas.width <= canvas.width - 1) {
						animals[i].x = animals[i].x + 1;
					}
					break;
				case "w":
					if (animals[i].x >= 1) {
						animals[i].x = animals[i].x - 1;
					}
					break;
				}
			}
			setTimeout(calculatePosition, 10);
		}
	calculatePosition();
});