
var lexo = require('../LexographicalHand.js');

var TwoPair = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(2, +grouped[0].cards[0], +grouped[1].cards[0], +grouped[2].cards[0]);
};

TwoPair.prototype.valueOf = function () {
    return this.value;
};

TwoPair.prototype.getShortName = function () {
    return 'Two pair';
};

TwoPair.prototype.getLongName = function () {
    return 'Two pair, ' + this.grouped[0].cards[0].getRankText() + 's and ' +
        this.grouped[1].cards[0].getRankText() + 's';
};

module.exports = TwoPair;