'use strict';

console.log('functions');

var minus = function (a, b) {
	console.log(a - b);
};

minus(12, 5);
minus(13, 5);
minus(12, 5);
minus(13, 5);

var add = function () {
	console.log(arguments);
	var result = 0;
	for (var i = 0; i < arguments.length; i = i + 1) {
		result = result + arguments[i];
	}
	console.log(result);
	return result;
};

add(13, 45, 66, 7, 78, 3, 8, 4, 8);
var sum = add(3, 4);