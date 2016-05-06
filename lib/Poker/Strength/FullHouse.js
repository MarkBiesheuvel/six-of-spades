const lexo = require('../../Lexicographic/Hand.js');
const pluralize = require('pluralize');

class FullHouse {
    
    constructor(grouped, strength) {
        this.grouped = grouped;
        this.value = lexo(strength, +grouped[0].cards[0], +grouped[1].cards[0]);
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        return 'Full house';
    }

    getLongName() {
        let rank1 = pluralize(this.grouped[0].cards[0].getRankText());
        let rank2 = pluralize(this.grouped[1].cards[0].getRankText());
        return `Full house, ${rank1} over ${rank2}`;
    }
}

module.exports = FullHouse;