var lexo = require('../LexographicalHand.js');
var sprintf = require('sprintf-js').sprintf;
var pluralize = require('pluralize');

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
    return sprintf('Two pair, %s and %s',
        pluralize(this.grouped[0].cards[0].getRankText()),
        pluralize(this.grouped[1].cards[0].getRankText())
    );
};

module.exports = TwoPair;