var lexo = require('../LexographicalHand.js');
var sprintf = require('sprintf-js').sprintf;

var Flush = function (cards) {
    this.cards = cards;
    this.value = lexo(5, +cards[0], +cards[1], +cards[2], +cards[3], +cards[4]);
};

Flush.prototype.valueOf = function () {
    return this.value;
};

Flush.prototype.getShortName = function () {
    return 'Flush';
};

Flush.prototype.getLongName = function () {
    return sprintf('Flush, %s high',
        this.cards[0].getRankText()
    );
};

module.exports = Flush;