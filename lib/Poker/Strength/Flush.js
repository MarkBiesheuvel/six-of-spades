const lexo = require('../../Lexicographic/Hand.js');

class Flush {

    constructor(cards, strength) {
        this.cards = cards;

        let values = cards.map((card) => {
            return card.valueOf();
        });

        this.value = lexo(strength, ...values);
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        return 'Flush';
    }

    getLongName() {
        let rank = this.cards[0].getRankText();
        return `Flush, ${rank} high`;
    }
}

module.exports = Flush;