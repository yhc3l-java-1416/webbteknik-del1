var createAnimal = function(){
	var canvas = document.createElement("canvas"),
		context = canvas.getContext("2d"),
		animateFrame = 0,
		direction = "e",
		spriteLoaded = false,
		spriteImg = document.createElement("img");
	canvas.width = 32;
	canvas.height = 32;
	spriteImg.src = "sprites/galleryanimals.png";
	spriteImg.onload = function () {
		spriteLoaded = true;
	};
	var animate = function () {
		var yPosition = 0;
		if(spriteLoaded){
			switch(direction){
				case "n":
					yPosition = -96;
					break;
				case "s":
					yPosition = 0;
					break;
				case "e":
					yPosition = -64;
					break;
				case "w":
					yPosition = -32;
					break;
			}
			context.clearRect(0, 0, canvas.width, canvas.height);
			if (animateFrame === 3) {
				animateFrame = 0;
			} else {
				animateFrame = animateFrame + 1;
			}
			var tempFrame = (animateFrame === 3) ? 1 : animateFrame;
			context.drawImage(spriteImg, tempFrame * -32, yPosition);
		}
		setTimeout(animate, 200);
	};
	animate();

	document.addEventListener("keydown", function (e) {
		switch (e.keyIdentifier) {
		case "Right":
			direction = "e";
			break;
		case "Left":
			direction = "w";
			break;
		case "Up":
			direction = "n";
			break;
		case "Down":
			direction = "s";
			break;
		}
	});

	return {
		canvas : canvas,
		getDirection : function() {
			return direction;
		}
	};
};









