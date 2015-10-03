
var lexo = require('../LexographicalHand.js');

var FourOfAKind = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(7, grouped[0].value, grouped[1].value);
};

FourOfAKind.prototype.valueOf = function () {
    return this.value;
};

FourOfAKind.prototype.getShortName = function () {
    return 'Four of a kind';
};

module.exports = FourOfAKind;