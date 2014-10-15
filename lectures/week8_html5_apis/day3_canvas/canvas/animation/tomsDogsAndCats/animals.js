var createAnimal = function (type, auto) {
		var canvas = document.createElement("canvas"),
			context = canvas.getContext("2d"),
			imageLoaded = false,
			audioLoaded = false,
			image = new Image(),
			walking = false,
			audio = document.createElement("audio"),
			animeSequence = 0,
			direction = "stop",
			animal = type,
			speed = 100,
			animate = function () {
				var imagePosY = 0,
					xAddition, yAddition;
				if (imageLoaded) {
					if (animeSequence === 3) {
						animeSequence = 0;
					} else {
						animeSequence = animeSequence + 1;
					}
					var tempSequence = (animeSequence === 3) ? 1 : animeSequence;
					switch (direction) {
					case "s":
						imagePosY = 0;
						break;
					case "w":
						imagePosY = -32;
						break;
					case "e":
						imagePosY = -64;
						break;
					case "n":
						imagePosY = -96;
						break;
					case "stop":
						imagePosY = 0;
						tempSequence = 1;
						break;
					}
					switch (animal) {
					case "blackDog":
						xAddition = 0;
						yAddition = 0;
						break;
					case "greyDog":
						xAddition = 96;
						yAddition = 0;
						break;
					case "whiteDog":
						xAddition = 192;
						yAddition = 0;
						break;
					case "brownDog":
						xAddition = 288;
						yAddition = 0;
						break;
					case "blackCat":
						xAddition = 0;
						yAddition = 128;
						break;
					case "greyCat":
						xAddition = 96;
						yAddition = 128;
						break;
					case "whiteCat":
						xAddition = 192;
						yAddition = 128;
						break;
					case "brownCat":
						xAddition = 288;
						yAddition = 128;
						break;
					}
					//console.log(animeSequence * 32);
					context.clearRect(0, 0, canvas.width, canvas.height);
					context.drawImage(image, (tempSequence * -32) - xAddition, imagePosY - yAddition);
				}
				setTimeout(function () {
					animate();
				}, speed);
			};
		canvas.width = 32;
		canvas.height = 32;
		image.src = "galleryanimals.png";
		image.onload = function () {
			imageLoaded = true;
		};
		audio.src = "sounds/meow.mp3";
		if (!auto) {
			document.addEventListener("keydown", function (e) {
				console.log("keydown");
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
			document.addEventListener("keyup", function (e) {
				//walking = false;
				//setTimeout(function () {
				//	if (!walking) {
				//console.log("stop");
				//direction = "stop";
				//audio.load();
				//audio.play();
				//	}
				//}, 350);
			});
		} else {
			var calcPosition = function (time) {
					direction = ["e", "w", "n", "s", "stop"][Math.floor(Math.random() * 5)];
					setTimeout(calcPosition, Math.floor(Math.random() * 2000));
				};
			calcPosition();
		}
		animate();
		var getDirection = function () {
				return direction;
			};
		return {
			canvas: canvas,
			getDirection: getDirection,
			speed: speed
		};
	};