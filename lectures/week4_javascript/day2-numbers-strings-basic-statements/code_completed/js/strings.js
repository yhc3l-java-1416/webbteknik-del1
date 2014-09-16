console.log('strings');

var greeting = 'Hello';

console.log(greeting);
/*
	Hello I'm a block comment
 */
console.log(greeting.toUpperCase());

console.log(greeting);

greeting = greeting.toUpperCase();

console.log(greeting);

// To get the first character in a string we can do the following
// where [0] is the charcter index.
console.log(greeting[0]);

// The length of a string
console.log(greeting.length);

// Cuts our string and returns a value substring(start index, end index)
console.log(greeting.substring(2, 4));

// Cuts a string from an index position to a certain length 
// substr(start index, number of charaters)
console.log(greeting.substr(1, 3));

var someText = '#hello #main .article';

// indexOf returns the first index position of the character in the string.
console.log(someText.indexOf('#'));

// indexOf returns the first index position of the character in the string 
// from the given index.
console.log(someText.indexOf('#', 3));


var someMoreText = '   Tom Blackmore    ';
// Remove whitespaces from beginning and end of string
someMoreText = someMoreText.trim();

console.log(someMoreText);