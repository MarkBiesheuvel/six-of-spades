var lexo = require('../../../Lexicographic/Hand.js');
var sprintf = require('sprintf-js').sprintf;

var LowCard = function (cards) {
    this.cards = cards;
    this.value = lexo(6, +cards[0], +cards[1], +cards[2], +cards[3], +cards[4]);
};

LowCard.prototype.valueOf = function () {
    return this.value;
};

LowCard.prototype.getShortName = function () {
    return '';
};

LowCard.prototype.getLongName = function () {
    return sprintf('%s-%s',
        this.cards[4].getRankText(),
        this.cards[3].getRankText()
    );
};

module.exports = LowCard;