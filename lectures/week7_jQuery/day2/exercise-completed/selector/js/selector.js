'use strict';
// Dom content ready
$(function () {
	// Step 1. Get the css buttons to work.
	$('input[name="toggleButton"]').click(function () {
		$('img[src^="http://www.catsthatlooklikehitler.com"]').toggle();
	});
	$('input[name="addClass"]').click(function () {
		$('img[alt="catLion"]').addClass('green');
	});
	$('input[name="removeClass"]').click(function () {
		$('img[alt="catLion"]').removeClass('green');
	});
	$('input[name="toggleClass"]').click(function () {
		$('img[src^="http://www.catsthatlooklikehitler.com"]').toggleClass('big-border');
	});

	// Step 2. When you click on an image of a kittler toggle the green
	// class on the bottom div (the one with the text 'you clicked on').
	// Use the tree structure of the page to locate the div. You will need $(this), parent and children.

	$('img[src^="http://www.catsthatlooklikehitler.com"]').click(function () {
		var lastElement = $(this).parent().children().last().toggleClass('green');
		console.log(lastElement);
	});


	// Step 3. When you click on either of the animals dressed as other animals change the 
	// text in the bottom div to have the value of the attribute alt of the image you clicked on.
	$('img[src*="tumblr.com"]').click(function () {
		var altText = $(this).attr('alt');
		$(this).parent().children().last().text(altText);
	});


});