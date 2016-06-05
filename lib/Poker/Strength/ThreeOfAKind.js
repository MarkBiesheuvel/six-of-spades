const lexo = require('../../Lexicographic/Hand.js');
const pluralize = require('pluralize');

class ThreeOfAKind {

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
        return 'Three of a kind';
    }

    getLongName() {
        let rank =  pluralize(this.grouped[0].cards[0].getRankText());
        return `Three of a kind, ${rank}`;
    }
}

module.exports = ThreeOfAKind;