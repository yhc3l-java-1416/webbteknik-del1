var canvas = document.querySelector('canvas'),
	context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(20, 20, 50, 50);

context.strokeStyle = 'blue';
context.lineWidth = 4;

context.beginPath();
context.moveTo(50, 50);
context.lineTo(95, 95);
context.stroke();