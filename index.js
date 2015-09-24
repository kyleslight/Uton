var express = require('express');
var route = require('./route');

var app = express();
app.use('/static', express.static('public/static'));

route(app);

var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Uton listening at http://%s:%d', host, port);
});
