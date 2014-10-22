var http = require('http');
http.createServer(function (req, res) {
	console.log(req.url);
	console.log(req.method);
	res.writeHead(418, {
		'Content-Type': 'text/plain',
		'Tom-Custom': 'helllo'
	});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');