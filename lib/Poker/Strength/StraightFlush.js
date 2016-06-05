const lexo = require('../../Lexicographic/Hand.js');

class StraightFlush {

    constructor(cards, strength) {
        this.cards = cards;
        this.value = lexo(strength, cards[0].valueOf());
    }

    valueOf  () {
        return this.value;
    }

    getShortName  () {
        return 'Straight flush';
    }

    getLongName () {
        let rank = this.cards[0].getRankText();
        return  `Straight flush, ${rank} high`;
    }
}

module.exports = StraightFlush;