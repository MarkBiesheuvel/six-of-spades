const lexo = require('../../Lexicographic/Hand.js');
const pluralize = require('pluralize');

class TwoPair {

    constructor(grouped, strength) {
        this.grouped = grouped;

        let values = grouped.map((group) => {
            return group.cards[0].valueOf();
        });

        this.value = lexo(strength, ...values);
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        return 'Two pair';
    }

    getLongName() {
        let rank1 = pluralize(this.grouped[0].cards[0].getRankText());
        let rank2 = pluralize(this.grouped[1].cards[0].getRankText());
        return `Two pair, ${rank1} and ${rank2}`;
    }
}

module.exports = TwoPair;