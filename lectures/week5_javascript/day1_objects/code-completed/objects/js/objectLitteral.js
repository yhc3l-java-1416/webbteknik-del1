'use strict';
console.log('object literals');
var jesperCat = {
    color: 'red',
    age: 200,
    favFood: 'tuna',
    weight: {
        value: 200,
        unit: 'kg'
    },
    makeSound: function () {
        console.log('MEoowWWE Mwoo');
    }
};

var tomCat = {
    color: 'blue',
    age: 0.5,
    favFood: 'humans',
    weight: {
        value: 2,
        unit: 'kg'
    },
    makeSound: function () {
        console.log('Grwweweewr nFNBK');
    }
};

var catFactory = function (color, weightValue, weightUnit, favFood, sound) {
    var that = {};
    that.fur = {};
    that.fur.color = color;
    that.fur.type = 'plain';
    that.favFood = favFood;
    that.weight = {};
    that.weight.value = weightValue;
    that.weight.unit = weightUnit;
    that.makeSound = function () {
        console.log(sound);
    };
    that.moveLeft = function () {

    };
    return that;
};