console.log('exercise');
var userSelection = prompt('Please select: \n a) Start page \n b) About page \n c) Another page');
userSelection = userSelection.trim();
userSelection = userSelection.toLowerCase();
console.log(userSelection);
switch (userSelection) {
case 'a':
	console.log('Start page');
	break;
case 'b':
	console.log('About page');
	break;
case 'c':
	console.log('Another page');
	break;
default:
	console.log('Didn\'t recognise selection');
	break;
}