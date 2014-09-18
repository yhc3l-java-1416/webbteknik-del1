console.log('arrays');
var aList = [];
// We can add items to the end of an array with the push function
aList.push(2);
aList.push(5);
aList.push(7);
aList.push(9);

console.log(aList);

// We can retrieve items from an array by their index
// Index is the number given to the position of an item in an array.
// We start at 0 NOT 1

console.log(aList[0]);

// To update an item we can also use the same syntax
aList[2] = 100;

// To retrieve an arrays length we look at it's property length

console.log(aList.length);

// To add new items at the beginning of an array we use the unshift function
aList.unshift(49.3);

// To retrieve and remove items from an array we can use the pop or shift functions
var num = aList.pop(); // remove from end -stack
var num2 = aList.shift(); // remove from start -queue

var anotherList = [3, 4, 99, 500, 'Hello', {},
	true,
	function () {}
];

for (var i = 0; i < anotherList.length; i = i + 1) {
	var item = anotherList[i];
	console.log(item);
}

var board = [
	['r1c1', 'r1c2', 'r1c3'],
	['r2c1', 'r2c2', 'r2c3'],
	['r3c1', 'r3c2', 'r3c3']
];

board[2][0]; // returns 'r3c1'