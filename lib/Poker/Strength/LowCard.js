var lexo = require('../../Lexicographic/Hand.js');
var sprintf = require('sprintf-js').sprintf;

var LowCard = function (cards, strength) {
    this.cards = cards;
    this.value = lexo(strength, +cards[4], +cards[3], +cards[2], +cards[1], +cards[0]);
};

LowCard.prototype.valueOf = function () {
    return this.value;
};

LowCard.prototype.getShortName = function () {
    return sprintf('%s low',
        this.cards[4].getRankText()
    );
};

LowCard.prototype.getLongName = function () {
    return sprintf('%s,%s,%s,%s,%s',
        this.cards[4].rank,
        this.cards[3].rank,
        this.cards[2].rank,
        this.cards[1].rank,
        this.cards[0].rank
    );
};

module.exports = LowCard;