var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	jsonParser = bodyParser.json(),
	items = {
		0: 'bread',
		1: 'eggs'
	},
	lastId = 1,
	port = 8001;

// Create a static web server to serve our html, css and javascript that is in the public directory
app.use(express.static(__dirname + '/public'));

// The following code also pulls out form encoded data, not just json. This is the default that jQuery sends.
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/items', function (req, res) {
	var itemsArray = [];
	for (var key in items) {
		itemsArray.push({
			id: key,
			item: items[key]
		});
	}
	res.json(itemsArray);
});

app.get('/items/:id', function (req, res) {
	res.send('get item with id ' + req.params.id);
});

app.listen(port);
console.log('server started on port ' + port);