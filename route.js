module.exports = function (app) {
    var urlMap = {
        'get': {
        '/': ['IndexHandler', 'getIndexPage'],
        '/browse': ['BrowseHandler', 'getBrowsePage']
        }
    };
    
    for (var method in urlMap) {
        for (var url in urlMap[method]) {
            if (urlMap[method].hasOwnProperty(url)) {
                var handlerObject = urlMap[method][url][0];
                var handlerFunction = urlMap[method][url][1];
                app[method](url, require('./handler/' + handlerObject)[handlerFunction]);
            }
        }
    }
    
};