// This example shoes javascripts non-blocking nature and
// how we can use callbacks to achieve this type of behaviour
// Check out and compare the blocking python script and compare the patterns
// To run this code you can do one of two things copy it into chrome console.
// Run it with node from the terminal "node nonblocking.js"
// We define a function as a variable.
// This will beour callback function
var writeToConsole = function () {
    console.log("world");
};
console.log("hello");
setTimeout(writeToConsole, 2000);
// setTimeout is triggered but the program continues
// once 2000 milliseconds is up (2 secs) the callback is triggered.
// triggering the callback interupts whatever our process is doing.
//Blocking code
console.log("starting loop");
for (var i = 0; i < 5000000000; i = i + 1) {};
console.log("finished loop"); * /
console.log("end");