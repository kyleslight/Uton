// Created for most common use
// Handle data and basic request&response

var BaseHandler = function () {
    // public modules
    var path = require('path');
    
    this.templatePath = path.normalize(__dirname + '/../public/template/');
}

module.exports = BaseHandler;