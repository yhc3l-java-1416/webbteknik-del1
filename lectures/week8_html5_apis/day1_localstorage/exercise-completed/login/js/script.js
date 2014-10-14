'use strict';
$(function () {
    // 1) Using two localStorage variables save the username
    // and password when you click on loginButton
    $('#loginButton').click(function () {
        localStorage.username = $('#username').val();
        localStorage.password = $('#pass').val();
        showWelcome();
    });
    // 2) Also hide the login div and show the welcome div.
    // 3) Collect the username from localstorage and display it in the user span
    // Check that it works using chrome dev tools -- resources tab
    // Delete the localstorage using dev tools
    // 4) Make it so that if you haven't already visited 
    // the site you hide the welcome div and show the login div 
    // when the page loads 
    // If you have already logged in hide the login div and
    // show the welcome div with the users name dispalyed in the span

    function showWelcome() {
        $('#login').hide();
        $('#welcome').show();
        $('.user').text(localStorage.username);
    }

    function showLogin() {
        $('#login').show();
        $('#welcome').hide();
    }

    if (localStorage.username === undefined || localStorage.password === undefined) {
        showLogin();
    } else {
        showWelcome();
    }

});