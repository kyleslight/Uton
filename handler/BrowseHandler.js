var BaseHandler = require('./BaseHandler');
var BrowseHandler = new BaseHandler();

var self = BrowseHandler;

// handle methods in custiom way
BrowseHandler.getBrowsePage = function (req, res) {
    res.sendFile(self.templatePath + 'browse.html');
};

module.exports = BrowseHandler;