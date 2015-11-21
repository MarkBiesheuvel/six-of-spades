var lexo = require('../../LexographicalHand.js');
var sprintf = require('sprintf-js').sprintf;
var pluralize = require('pluralize');

var FullHouse = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(6, +grouped[0].cards[0], +grouped[1].cards[0]);
};

FullHouse.prototype.valueOf = function () {
    return this.value;
};

FullHouse.prototype.getShortName = function () {
    return 'Full house';
};

FullHouse.prototype.getLongName = function () {
    return sprintf('Full house, %s over %s',
        pluralize(this.grouped[0].cards[0].getRankText()),
        pluralize(this.grouped[1].cards[0].getRankText())
    );
};

module.exports = FullHouse;