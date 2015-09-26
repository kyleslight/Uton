var IndexHandler = require('./handler/IndexHandler');
var BrowseHandler = require('./handler/BrowseHandler');

module.exports = function (app) {
    var nunjucks = require('nunjucks');
    
    nunjucks.configure('public', {
        autoescape: true,
        express: app,
        watch: true
    });
    
    var urlMap = {
        'get': {
            '/': IndexHandler.getIndexPage,
            '/browse': BrowseHandler.getBrowsePage
        }
    };
    
    for (var method in urlMap) {
        for (var url in urlMap[method]) {
            if (urlMap[method].hasOwnProperty(url)) {
                app[method](url, urlMap[method][url]);
                console.log('here');
            }
        }
    }
};