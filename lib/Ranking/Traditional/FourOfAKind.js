var lexo = require('../../LexographicalHand.js');
var sprintf = require('sprintf-js').sprintf;
var pluralize = require('pluralize');

var FourOfAKind = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(7, +grouped[0].cards[0], +grouped[1].cards[0]);
};

FourOfAKind.prototype.valueOf = function () {
    return this.value;
};

FourOfAKind.prototype.getShortName = function () {
    return 'Four of a kind';
};

FourOfAKind.prototype.getLongName = function () {
    return sprintf('Four of a kind, %s',
        pluralize(this.grouped[0].cards[0].getRankText())
    );
};

module.exports = FourOfAKind;