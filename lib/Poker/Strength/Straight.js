var lexo = require('../../Lexicographic/Hand.js');
var sprintf = require('sprintf-js').sprintf;

var Straight = function (cards, strength) {
    this.cards = cards;
    this.value = lexo(strength, +cards[0]);
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