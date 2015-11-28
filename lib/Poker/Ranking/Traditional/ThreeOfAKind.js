var lexo = require('../../../Lexicographic/Hand.js');
var sprintf = require('sprintf-js').sprintf;
var pluralize = require('pluralize');

var ThreeOfAKind = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(3, +grouped[0].cards[0], +grouped[1].cards[0], +grouped[2].cards[0]);
};

ThreeOfAKind.prototype.valueOf = function () {
    return this.value;
};

ThreeOfAKind.prototype.getShortName = function () {
    return 'Three of a kind';
};

ThreeOfAKind.prototype.getLongName = function () {
    return sprintf('Three of a kind, %s',
        pluralize(this.grouped[0].cards[0].getRankText())
    );
};

module.exports = ThreeOfAKind;