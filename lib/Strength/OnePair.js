
var lexo = require('../LexographicalHand.js');

var OnePair = function (grouped) {
    this.grouped = grouped;
    this.value = lexo(1, grouped[0].value, grouped[1].value, grouped[2].value, grouped[3].value);
};

OnePair.prototype.valueOf = function () {
    return this.value;
};

OnePair.prototype.getShortName = function () {
    return 'One pair';
};

module.exports = OnePair;