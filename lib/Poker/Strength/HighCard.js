const lexo = require('../../Lexicographic/Hand.js');

class HighCard {

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
        return 'High card';
    }

    getLongName() {
        let rank = this.cards[0].getRankText();
        return `${rank} high`;
    }
}

module.exports = HighCard;