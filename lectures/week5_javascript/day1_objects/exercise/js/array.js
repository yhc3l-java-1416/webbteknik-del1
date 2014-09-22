/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var textArray = ["Tom", "Dick", "Harry"];
var objectArray = [{
    firstname: "Tom",
    lastname: "Blackmore",
    age: 21
}, {
    firstname: "Lotta",
    lastname: "Svensson",
    age: 17
}, {
    firstname: "Fredrik",
    lastname: "Kahn",
    age: 19
}, {
    firstname: "Lotta",
    lastname: "Blogs",
    age: 23
}];
var numberArray = [1, 4, 5, 78, 9, 10];
var functionArray = [
    function () {
        "use strict";
        console.log("first function fired");
    },
    function () {
        "use strict";
        console.log("second function fired");
    },
    function () {
        "use strict";
        console.log("third function fired");
    }
];
var boolArray = [true, false, true, false, false, true, true];
//Exercises
// 1. Write a loop that logs all names in textArray to the console.
console.log("---------1---------");
/* --------------------------------------------------------------- */
// 2. Write a loop that logs the age of every object in objectArray with a firstname of Lotta to the console.
/* --------------------------------------------------------------- */
console.log("---------2---------");
/* --------------------------------------------------------------- */
// 3. Write code that uses a loop to sum all the numbers in the numberArray togethor and logs the output to console.
console.log("---------3---------");
// 4. Write a loop that executes all the functions in the functionArray
console.log("---------4---------");
// 5. For every true value in the boolArray create an alert with value of the array index,
// for every false value log the array index to the console.
console.log("---------5---------");