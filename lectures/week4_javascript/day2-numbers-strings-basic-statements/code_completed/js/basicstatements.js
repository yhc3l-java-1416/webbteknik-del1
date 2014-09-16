console.log('basic statements');
var b = 7;
if (b === 5) {
	console.log('b is 5 in if');
} else if (b < 5) {
	console.log('b is less than 5');
} else {
	console.log('b is greater than 5');
}

switch (b) {
case 4:
	console.log('b is 4');
	break;
case 5:
	console.log('b is 5');
	break;
default:
	console.log('b is nothing I understand');
	break;
}

for (var i = 0; i < 10; i = i + 1) {
	console.log(i);
}

console.log(i);
i = 0;

while (i < 10) {
	console.log(i);
	i = i + 1;
}

var d = 5;
do {
	console.log(d);
	d = d + 1;
} while (d < 3);