
var lexo = require('../LexographicalHand.js');

var FullHouse = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(6, grouped[0].value, grouped[1].value);
};

FullHouse.prototype.valueOf = function () {
    return this.value;
};

FullHouse.prototype.getShortName = function () {
    return 'Full house';
};

module.exports = FullHouse;