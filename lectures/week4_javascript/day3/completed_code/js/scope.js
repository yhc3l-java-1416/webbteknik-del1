console.log('scope');
var a = 1;
var b;
var c;
var aFunc = function () {
	var d,
		b = 2;
	c = b * 5;
	if (b < 5) {
		d = true;
	}
	console.log(d);
};