var express = require('express');
var route = require('./route');

var app = express();
app.use('/common', express.static(__dirname + '/public/static/common'));

route(app);

var server = app.listen(1200, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Uton listening at http://%s:%d', host, port);
});