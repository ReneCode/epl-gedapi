


var GedStorage = function()
{
    this._items = [];

    this.add = function(item) {
        this._items.push(item);
    };

    this.getAll = function() {
        return this._items;
    };

    this.deleteAll = function() {
        this._items = [];
    }
};

var gedStorage = new GedStorage();

module.exports = gedStorage;
