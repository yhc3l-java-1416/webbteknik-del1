window.addEventListener("DOMContentLoaded", function () {
	var p = document.querySelector("p"),
		blob = document.querySelector("#blob"),
		currentTop = 0,
		currentLeft = 0;

	var moveBlob = function (top, left){
		currentTop = (currentTop + top);
		currentLeft = (currentLeft + left);
		blob.style.top = currentTop + "px";
		blob.style.left = currentLeft + "px";
	};


	window.addEventListener("keydown", function (e) {
		switch (e.keyCode) {
		case 37:
			moveBlob(0, -10);
			break;
		case 38:
			moveBlob(-10, 0);
			break;
		case 39:
			moveBlob(0, 10);
			break;
		case 40:
			moveBlob(10, 0);
			break;
		}
	}, false);
}, false);