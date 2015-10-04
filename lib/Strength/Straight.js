
var lexo = require('../LexographicalHand.js');

var Straight = function (cards) {
    this.cards = cards;
    this.value = lexo(4, +cards[0]);
};

Straight.prototype.valueOf = function () {
    return this.value;
};

Straight.prototype.getShortName = function () {
    return 'Straight';
};

Straight.prototype.getLongName = function () {
    return 'Straight, ' + this.cards[0].getRankText() + ' high';
};

module.exports = Straight;