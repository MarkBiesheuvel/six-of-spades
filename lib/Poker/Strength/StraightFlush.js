var lexo = require('../../Lexicographic/Hand.js');
var sprintf = require('sprintf-js').sprintf;

var StraightFlush = function (cards, strength) {
    this.cards = cards;
    this.value = lexo(strength, +cards[0]);
};

StraightFlush.prototype.valueOf = function () {
    return this.value;
};

StraightFlush.prototype.getShortName = function () {
    return 'Straight flush';
};

StraightFlush.prototype.getLongName = function () {
    return sprintf('Straight flush, %s high',
        this.cards[0].getRankText()
    );
};

module.exports = StraightFlush;