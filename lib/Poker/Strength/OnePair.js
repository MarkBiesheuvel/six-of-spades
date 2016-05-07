const lexo = require('../../Lexicographic/Hand.js');
const pluralize = require('pluralize');

class OnePair {
    constructor(grouped, strength) {
        this.grouped = grouped;
        this.value = lexo(strength, +grouped[0].cards[0], +grouped[1].cards[0], +grouped[2].cards[0], +grouped[3].cards[0]);
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        return 'One pair';
    }

    getLongName() {
        let rank = pluralize(this.grouped[0].cards[0].getRankText());
        return `Pair of ${rank}`;
    }
}

module.exports = OnePair;