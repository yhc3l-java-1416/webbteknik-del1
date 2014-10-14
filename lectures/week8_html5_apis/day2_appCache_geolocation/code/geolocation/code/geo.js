'use strict'
navigator.geolocation.getCurrentPosition(function (position) {
	var text = '';
	text = text + 'accuracy: ' + position.coords.accuracy + '<br/>';
	text = text + 'altitude: ' + position.coords.altitude + '<br/>';
	text = text + 'altitudeAccuracy: ' + position.coords.altitudeAccuracy + '<br/>';
	text = text + 'heading: ' + position.coords.heading + '<br/>';
	text = text + 'latitude: ' + position.coords.latitude + '<br/>';
	text = text + 'longitude: ' + position.coords.longitude + '<br/>';
	text = text + 'speed: ' + position.coords.speed + '<br/>';
	document.querySelector('p').innerHTML = text;
});