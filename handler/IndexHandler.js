var BaseHandler = require('./BaseHandler');
var IndexHandler = new BaseHandler();

var self = IndexHandler;

// handle methods in custiom way
IndexHandler.getIndexPage = function (req, res) {
    res.render(self.templatePath + 'index.html');
};

module.exports = IndexHandler;