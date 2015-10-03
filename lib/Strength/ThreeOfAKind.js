
var lexo = require('../LexographicalHand.js');

var ThreeOfAKind = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(3, grouped[0].value, grouped[1].value, grouped[2].value);
};

ThreeOfAKind.prototype.valueOf = function () {
    return this.value;
};

ThreeOfAKind.prototype.getShortName = function () {
    return 'Three of a kind';
};

module.exports = ThreeOfAKind;