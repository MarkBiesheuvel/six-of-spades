const lexo = require('../../Lexicographic/Hand.js');
const pluralize = require('pluralize');

class ThreeOfAKind {

    constructor(grouped, strength) {
        this.grouped = grouped;
        this.value = lexo(strength, +grouped[0].cards[0], +grouped[1].cards[0], +grouped[2].cards[0]);
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        return 'Three of a kind';
    }

    getLongName() {
        let rank =  pluralize(this.grouped[0].cards[0].getRankText());
        return `Three of a kind, ${rank}`;
    }
}

module.exports = ThreeOfAKind;