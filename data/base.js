var BaseDataHandler = function (name) {
    return {
        name: name,
        print: function () {
            console.log(this.name);
        }
    }
}

module.exports = BaseDataHandler; 