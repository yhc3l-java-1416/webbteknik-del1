'use strict';
var chart,
	newData = [
		['Count', 'Lightness']
	],
	count = 0,
	options = {
		title: 'Light'
	};
google.load('visualization', '1', {
	packages: ['corechart']
});
google.setOnLoadCallback(init);

function init() {
	chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	drawChart();
}

function drawChart() {
	$.ajax({
		url: 'http://192.168.1.2/a1/',
		type: 'GET',
		dataType: 'json',
		success: function (json) {
			count = count + 1;
			newData.push([count, (1000 - json.A1)]);
			var data = google.visualization.arrayToDataTable(newData);
			chart.draw(data, options);
		},
		error: function (xhr, status, errorThrown) {
			console.log(errorThrown);
		}
	});
	setTimeout(drawChart, 60000);
}