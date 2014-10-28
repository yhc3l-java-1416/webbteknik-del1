'use strict';
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    jsonParser = require('body-parser').json(),
    request = require('request'),
    port = 8080;

// All requests are decorated with cors headers
app.use(function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.options('*', function (req, res) {
    res.header('Access-Control-Allow-Methods', 'POST');
    res.status(204)
        .send();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(jsonParser);

app.post('/sms', function (req, res) {
    var url = 'https://rest.nexmo.com/sms/json?api_key=16dd6721&api_secret=a005bb61&from=' + encodeURIComponent(req.body.from) + '&to=' + req.body.to + '&text=' + encodeURIComponent(req.body.text);
    console.log(url);
    request(url, function (error, response, body) {
        res.status(response.statusCode).json(body);
    });
});
app.listen(port);
console.log('Server started on port ' + port);