'use strict';
window.addEventListener('DOMContentLoaded', function () {
	console.log('loaded js');
	var bodyEl = document.querySelector('body'),
		h1El = document.createElement('h1'),
		pEl = document.createElement('p'),
		p2El = document.createElement('p'),
		aEl = document.createElement('a'),
		catText = '<script> alert(""
	hello); </script>';

	h1El.innerText = 'Welcome to my page';
	console.log(h1El);
	console.dir(h1El);
	bodyEl.appendChild(h1El);

	pEl.innerText = 'What a great page. To find other pages ';
	bodyEl.appendChild(pEl);

	aEl.innerText = 'click here';
	aEl.setAttribute('href', 'http://www.google.com');
	pEl.appendChild(aEl);

	p2El.innerHTML = 'Another great page is <a href="http://www.jsforcats.com"> js for cats </a>';
	bodyEl.appendChild(p2El);


});