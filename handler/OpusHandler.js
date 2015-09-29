var BaseHandler = require('./BaseHandler');
var OpusHandler = new BaseHandler();

var self = OpusHandler;

// handle methods in customized way
OpusHandler.getOpusPage = function (req, res) {
    var opus = {
        id: req.params.id,
        title: '浏览器的工作原理 - 现代浏览器背后的风景'
    };
    res.render(self.templatePath + 'opus.html', {opus: opus});
};

module.exports = OpusHandler;