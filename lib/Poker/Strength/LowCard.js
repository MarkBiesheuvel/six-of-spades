const lexo = require('../../Lexicographic/Hand.js');

class LowCard {

    constructor(cards, strength) {
        this.cards = cards;
        this.value = lexo(strength, +cards[4], +cards[3], +cards[2], +cards[1], +cards[0]);
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        let rank = this.cards[4].getRankText();
        return `${rank} low`;
    }

    getLongName() {
        let rank1 = this.cards[4].getRankShortText();
        let rank2 = this.cards[3].getRankShortText();
        let rank3 = this.cards[2].getRankShortText();
        let rank4 = this.cards[1].getRankShortText();
        let rank5 = this.cards[0].getRankShortText();

        return `${rank1},${rank2},${rank3},${rank4},${rank5}`;
    }
}

module.exports = LowCard;