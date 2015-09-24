var BaseHandler = require('./BaseHandler');
var IndexHandler = new BaseHandler();

var self = IndexHandler;

// handle methods in custiom way
IndexHandler.getIndexPage = function (req, res) {
    res.sendFile(self.templatePath + 'index.html');
};

module.exports = IndexHandler;