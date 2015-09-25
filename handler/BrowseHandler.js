var BaseHandler = require('./BaseHandler');
var BrowseHandler = new BaseHandler();

var self = BrowseHandler;

// handle methods in custiom way
BrowseHandler.getBrowsePage = function (req, res) {
    var books = [
            {
                title: 'a',
                discribtion: 'about a'
            },{
                title: 'b',
                discribtion: 'about b'
            }
        ];
    res.render(self.templatePath + 'browse.html', {books: books});
};

module.exports = BrowseHandler;