'use strict';
console.log('calc');
var output = document.querySelector('#inputField'),
	numberButtons = document.querySelectorAll('.number');

function numberClicked(e) {
	console.log(e.srcElement.innerText);
}

for (var i = 0; i < numberButtons.length; i = i + 1) {
	numberButtons[i].onclick = numberClicked;
}