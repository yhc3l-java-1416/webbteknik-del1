'use strict';
// 3) Can you add a remove button beside each list item that will remove it from the list if clicked?
$(function () {
	$('#button').click(function () {
		var inputText = $('#itemName').val();
		var listItem = $('<li>').text(inputText);

		var removeButton = $('<button>remove</button>');
		listItem.append(removeButton);

		removeButton.click(function () {
			listItem.remove();
		});

		$('ul').prepend(listItem);
	});
});