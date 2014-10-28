var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	jsonParser = bodyParser.json(),
	items = {
		0: 'bread',
		1: 'fish'
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
			name: items[key]
		});
	}
	res.json(itemsArray);
});

app.get('/items/:id', function (req, res) {
	var item = items[req.params.id];
	if (item === undefined) {
		res.status(404).send('Not found');
	} else {
		res.json(items[req.params.id]);
	}
});

app.delete('/items/:id', function (req, res) {
	var item = items[req.params.id];
	if (item === undefined) {
		res.status(404).send('Not found');
	} else {
		delete items[req.params.id];
		res.status(204).send();
	}
});

app.post('/items', function (req, res) {
	var newItem = req.body;
	lastId = lastId + 1;
	items[lastId] = newItem.name;
	res.setHeader('Location', '/items/' + lastId);
	res.status(201).send();
});

app.listen(port);
console.log('server started on port ' + port);