/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// 1) Create a multiply function that takes 3 parameters and 
// returns the result of multiplying all 3 ie. (a * b * c)
console.log((multiply(3, 4, 5) === 60));
// 2) Change the add function so it sums all parameters sent to it, no matter how many.
// (use the arguments array)
var add = function (a, b) {
    "use strict";
    return a + b;
};
console.log((add(1, 2, 4, 5) === 12));