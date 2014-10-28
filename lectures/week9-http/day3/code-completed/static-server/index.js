var express = require('express'),
	app = express(),
	port = 8002;

// Create a static web server to serve our html, css and javascript that is in the public directory
app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Server running on port ' + port);