
var lexo = require('../LexographicalHand.js');

var OnePair = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(1, +grouped[0].cards[0], +grouped[1].cards[0], +grouped[2].cards[0], +grouped[3].cards[0]);
};

OnePair.prototype.valueOf = function () {
    return this.value;
};

OnePair.prototype.getShortName = function () {
    return 'One pair';
};

OnePair.prototype.getLongName = function () {
    return 'Pair of ' + this.grouped[0].cards[0].getRankText() + 's';
};

module.exports = OnePair;