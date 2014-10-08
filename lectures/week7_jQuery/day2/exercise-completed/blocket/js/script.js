'use strict';
console.log('script');

var sum = 0;
$(function () {
	// Can you calculate the price of all items on the page?
	$('.list_price').each(function () {
		var text = $(this).text();
		text = text.replace(' ', '');
		var price = parseInt(text, 10);
		//console.log(price);
		var isANumber = (!isNaN(price));
		if (isANumber) {
			sum = sum + price;
			console.log(sum);
		}
	});

	// Can you return the title (link name) of all the posts with multiple images.

	$('.has_multiple_images').each(function () {
		console.log($(this).parent().find('.item_link').text());
	});

	// Can you calculate the price of all animals on the page.

	$('a[title*="Djur"]').parent().parent().find('.list_price').each(function () {
		var text = $(this).text();
		text = text.replace(' ', '');
		var price = parseInt(text, 10);
		//console.log(price);
		var isANumber = (!isNaN(price));
		if (isANumber) {
			sum = sum + price;
			console.log(sum);
		}
	});
});