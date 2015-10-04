
var lexo = require('../LexographicalHand.js');

var ThreeOfAKind = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(3, +grouped[0].cards[0], +grouped[1].cards[0], +grouped[2].cards[0]);
};

ThreeOfAKind.prototype.valueOf = function () {
    return this.value;
};

ThreeOfAKind.prototype.getShortName = function () {
    return 'Three of a kind';
};

ThreeOfAKind.prototype.getLongName = function () {
    return 'Three of a kind, ' + this.grouped[0].cards[0].getRankText() + 's';
};

module.exports = ThreeOfAKind;