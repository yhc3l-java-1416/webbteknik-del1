/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var canvas = document.querySelector("canvas"),
        ctx = canvas.getContext('2d');
    // Step 2 
    // Create a variable called drawing set it to false
    canvas.width = 500;
    canvas.height = 500;
    ctx.moveTo(100, 100);
    ctx.lineTo(20, 150);
    ctx.lineTo(20, 400);
    ctx.lineTo(480, 400);
    ctx.lineTo(480, 150);
    ctx.lineTo(400, 100);
    ctx.lineTo(100, 100);
    // Step 1 continue drawing
    // Can you draw a house?
    ctx.stroke();
    canvas.addEventListener("mousedown", function (e) {
        console.log("mousedown", e.offsetX, e.offsetY);
        // Step 3
        // 
        // a) using the moveTo function move the pen to where the user clicked
        // b) set the variable drawing to true
        // c) start a new path with ctx.beginPath function
    }, false);
    canvas.addEventListener("mousemove", function (e) {
        console.log("mousemove", e.offsetX, e.offsetY);
        // Step 4
        // if the drawing variable is true draw a line to the current point with
        // lineTo, call the stroke command to visualise the line too.
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        console.log("mouseup", e.offsetX, e.offsetY);
        // Step 5
        // Set the drawing variable to false
    }, false);
    // Step 6 can you wire up the table with colors so you can change color?
    // Step 7 can you add a html control
});