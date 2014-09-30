/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var blob = document.querySelector("#blob");
    blob.style.top = "0px";
    blob.style.left = "0px";
    console.dir(blob);
    window.addEventListener("click", function () {
        alert("event triggered");
    });
});