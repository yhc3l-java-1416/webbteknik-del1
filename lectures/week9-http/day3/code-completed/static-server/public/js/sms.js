'use strict';
$(function () {
	$('button').click(function () {
		console.log('click');
		var from = $('#from').val();
		var to = $('#to').val();
		var text = $('#text').val();
		$.ajax({
			url: 'http://37.196.106.157/sms',
			type: 'POST',
			data: {
				from: from,
				to: to,
				text: text
			},
			dataType: 'json',
			success: function (json) {
				$('#result').text(JSON.stringify(json));
			},
			error: function (xhr, status, errorThrown) {
				$('#result').text(JSON.stringify(errorThrown));
			}
		});
	});
});