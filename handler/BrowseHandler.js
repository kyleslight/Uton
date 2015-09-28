var BaseHandler = require('./BaseHandler');
var BrowseHandler = new BaseHandler();

var self = BrowseHandler;

// handle methods in customized way
BrowseHandler.getBrowsePage = function (req, res) {
    var books = [
            {
                title: 'a',
                description: 'about a'
            },{
                title: 'b',
                description: 'about b'
            }
        ];
    res.render(self.templatePath + 'browse.html', {books: books});
};

module.exports = BrowseHandler;