'use strict';
var $ = function (selector) {
	var domElement = document.querySelector(selector);
	var that = {
		show: function () {
			domElement.style.display = 'block';
			console.log('showing');
			return that;
		},
		hide: function () {
			domElement.style.display = 'none';
			console.log('hiding');
			return that;
		},
		text: function (newText) {
			console.log('text');
			if (newText === undefined) {
				return domElement.innerText;
			} else {
				domElement.innerText = newText;
				return that;
			}
		}
	};
	return that;
};