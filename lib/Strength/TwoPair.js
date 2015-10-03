
var lexo = require('../LexographicalHand.js');

var TwoPair = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(2, grouped[0].value, grouped[1].value, grouped[2].value);
};

TwoPair.prototype.valueOf = function () {
    return this.value;
};

TwoPair.prototype.getShortName = function () {
    return 'Two pair';
};

module.exports = TwoPair;