'user strict';

localStorage.userName = 'Tom';
var userName = localStorage.userName;

localStorage.setItem('age', 19);
var age = localStorage.getItem('age');

if (localStorage.password === undefined) {
	console.log('password not set');
} else {
	console.log(localStorage.password);
}
/*
// remove age
localStorage.removeItem('age');
// remove all items from localstorage.
localStorage.clear();
*/

var myArray = [1, 4, 8, 34];
var myObject = {
	q: 'What is the capital of London?',
	a: 'London'
};

localStorage.myArray = JSON.stringify(myArray);
localStorage.myObject = JSON.stringify(myObject);

var myNewArray = JSON.parse(localStorage.myArray);
var myNewObject = JSON.parse(localStorage.myObject);