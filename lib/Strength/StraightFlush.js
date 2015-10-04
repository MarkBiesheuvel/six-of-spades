
var lexo = require('../LexographicalHand.js');

var StraightFlush = function (cards) {
    this.cards = cards;
    this.value = lexo(8, +cards[0]);
};

StraightFlush.prototype.valueOf = function () {
    return this.value;
};

StraightFlush.prototype.getShortName = function () {
    return 'Straight flush';
};

StraightFlush.prototype.getLongName = function () {
    return 'Straight flush, ' + this.cards[0].getRankText() + ' high';
};

module.exports = StraightFlush;