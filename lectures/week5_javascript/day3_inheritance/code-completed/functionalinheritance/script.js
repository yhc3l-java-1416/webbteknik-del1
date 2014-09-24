'use strict';
console.log('functional inheritance');
var createAnimal = function (name, legs, sound) {
	var that = {};
	that.name = name;
	that.legs = legs;
	that.sound = sound;
	that.makeSound = function () {
		console.log('I love singing ' + that.sound);
	};
	return that;
};

var createCat = function (name, sound, hairType) {
	var that = createAnimal(name, 4, sound);
	that.hairType = hairType;
	that.makeSound = function () {
		console.log('I hate singing. I roar ' + that.sound);
	};
	return that;
};

var createTiger = function (name, sound, eatsHumans) {
	var that = createCat(name, sound, 'orange black');
	that.eatsHumans = eatsHumans;
	that.makeSound = function () {
		console.log('I roar ' + that.sound);
	};
	return that;
};

var createFish = function (name, sound, fins) {
	var that = createAnimal(name, 0, sound);
	that.fins = fins;
	return that;
};

var buster = createCat('Buster', 'Graweer', 'Curly');
var nemo = createFish('Nemo', 'Blob blob blob', 4);
var snoppy = createAnimal('Snoppy', 4, 'Woof woof');
var hobbe = createTiger('Hobbe', 'GRAWWWR', true);