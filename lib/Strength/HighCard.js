
var lexo = require('../LexographicalHand.js');

var HighCard = function (cards) {
    this.cards = cards;
    this.value = lexo(0, +cards[0], +cards[1], +cards[2], +cards[3], +cards[4]);
};

HighCard.prototype.valueOf = function () {
    return this.value;
};

HighCard.prototype.getShortName = function () {
    return 'High card';
};

HighCard.prototype.getLongName = function () {
    return this.cards[0].getRankText() + ' high';
};

module.exports = HighCard;