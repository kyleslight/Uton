var BaseDataHandler = require('./base');

var UserDataHandler = function (name) {
    var tempInstance = BaseDataHandler(name);
    tempInstance.print = function () {
        console.log('haha');
    }
    
    return tempInstance;
}

module.exports = UserDataHandler;