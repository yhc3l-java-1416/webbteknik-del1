'use strict';
var express = require('express'),
	app = express(),
	jsonParser = require('body-parser').json();

var books = {
	0: {
		title: 'Tom\'s cats ',
		description: 'The best book on cats ever ',
		author: 'Tom Blackmore'
	},
	1: {
		title: 'Tom\'s dogs ',
		description: 'The best book on dogs ever ',
		author: 'Tom Blackmore'
	}
};
var lastId = 1;

app.get('/books', function (req, res) {
	res.json(books);
});

app.get('/books/:id', function (req, res) {
	var book = books[req.params.id];
	if (book === undefined) {
		res.status(404).send('Not found');
	} else {
		res.json(book);
	}
});

app.delete('/books/:id', function (req, res) {
	var book = books[req.params.id];
	if (book === undefined) {
		res.status(404).send('Not found');
	} else {
		delete books[req.params.id];
		res.status(204).send();
	}
});

app.put('/books/:id', jsonParser, function (req, res) {
	var book = books[req.params.id];
	if (book === undefined) {
		res.status(404).send('Not found');
	} else {
		books[req.params.id] = req.body;
		res.status(204).send();
	}
});

app.post('/books', jsonParser, function (req, res) {
	lastId = lastId + 1;
	books[lastId] = req.body;
	res.setHeader('Location', '/books/' + lastId);
	res.status(201).send();
});

app.listen(8001);