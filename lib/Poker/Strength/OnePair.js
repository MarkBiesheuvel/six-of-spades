const lexo = require('../../Lexicographic/Hand.js');
const pluralize = require('pluralize');

class OnePair {
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
        return 'One pair';
    }

    getLongName() {
        let rank = pluralize(this.grouped[0].cards[0].getRankText());
        return `Pair of ${rank}`;
    }
}

module.exports = OnePair;