var lexo = require('../../LexographicalHand.js');
var sprintf = require('sprintf-js').sprintf;

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
    return sprintf('Straight, %s high',
        this.cards[0].getRankText()
    );
};

module.exports = Straight;