'use strict';
$(function () {
	$('button').click(function () {
		console.log('click');
		var from = $('#from').val();
		var to = $('#to').val();
		var text = $('#text').val();
		// post http://37.196.106.201/sms
		//{"from":"The King","to":"46738413456","text":"testing"}

		$.ajax({

		});
	});
});