var inverseCanvas = function(can) {
	var ctx = can.getContext("2d"), 
		pixels = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height), 
		invCanvas = document.createElement("canvas"), 
		ctx2 = invCanvas.getContext("2d");
			
	invCanvas.width = ctx.canvas.width;
	invCanvas.height = ctx.canvas.height;
	
	for(var i = 0, n = pixels.data.length; i < n; i = i + 4) {
		pixels.data[i + 0] = 255 - pixels.data[i + 0];
		pixels.data[i + 1] = 255 - pixels.data[i + 1];
		pixels.data[i + 2] = 255 - pixels.data[i + 2];
	}

	
	ctx2.putImageData(pixels, 0, 0);
	return invCanvas;
};
