/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(function () {
    "use strict";
    $("td").click(function () {
        alert($(this).text());
    });
});