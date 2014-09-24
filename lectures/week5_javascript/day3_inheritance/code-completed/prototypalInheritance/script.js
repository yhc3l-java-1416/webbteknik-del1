'use strict';
console.log('prototypal inheritance');
var Animal = function (name, legs, sound) {
    this.name = name;
    this.legs = legs;
    this.sound = sound;
};
Animal.prototype.makeSound = function () {
    console.log('I love singing ' + this.sound);
};

Animal.prototype.walk = function () {
    console.log('My name is ' + this.name + ' and I am walking');
};

var Dog = function (name, color, sound) {
    Animal.call(this, name, 4, sound);
    this.color = color;
};
Dog.prototype = new Animal();

Object.prototype.sayHello = function () {
    alert('hello');
};

var snoopy = new Dog('Snoopy', 'black white', 'woof woof');

for (var property in snoopy) {
    if (snoopy.hasOwnProperty(property)) {
        console.log(property + ':' + snoopy[property]);
    }
}


/*
var myList = ['Tom', 'Dick', 'Harry'];

for (var property in myList) {
    console.log(property + ':' + myList[property]);
}*/