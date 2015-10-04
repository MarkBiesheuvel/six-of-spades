var lexo = require('../LexographicalHand.js');

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
    return 'Full house, ' + this.grouped[0].cards[0].getRankText() + 's over ' +
        this.grouped[1].cards[0].getRankText() + 's';
};

module.exports = FullHouse;