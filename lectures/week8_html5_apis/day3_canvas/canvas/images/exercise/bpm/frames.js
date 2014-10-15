var createMarimekko = function() {
	var ballCanvas = document.createElement("canvas");
	ballCanvas.width = "240";
	ballCanvas.height = "240";
	var ctx = ballCanvas.getContext("2d");
	ctx.beginPath();
	ctx.fillStyle = "rgb(" + Math.round(Math.random() * 255) + ", 255 ,0)";
	ctx.arc(120, 120, 30 + Math.round(Math.random() * 180), 0, Math.PI * 2, true);
	ctx.fill();
	ctx.closePath();
	return ballCanvas;
};
var createBeaber = ( function() {
	var img = document.createElement("img"), imageReady = false, imgCanvas = document.createElement("canvas"),
	ctx = imgCanvas.getContext("2d");
	img.src = "bieber.jpg";
	//img.src = "../lilly.jpg";
	img.onload = function() {
		imgCanvas.width = img.width;
		imgCanvas.height = img.height;
		ctx.drawImage(img, 0, 0);
		imageReady = true;
	};
	return function() {
		if(imageReady) {
			return imgCanvas;
		} else {
			return createMarimekko();
		}
	}
}());

var inverseBeaber = function() {
	return inverseCanvas(createBeaber());
};
var inverseMaimekko = function() {
	return inverseCanvas(createMarimekko());
};

var keyFrames = [createBeaber, // frame at beat 1
createMarimekko, // frame at beat 2
inverseBeaber, // frame at beat 3
createMarimekko // frame at beat 4
];
