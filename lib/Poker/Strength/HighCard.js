const lexo = require('../../Lexicographic/Hand.js');

class HighCard {

    constructor(cards, strength) {
        this.cards = cards;
        this.value = lexo(strength, +cards[0], +cards[1], +cards[2], +cards[3], +cards[4]);
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