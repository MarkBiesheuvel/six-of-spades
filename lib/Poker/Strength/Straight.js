const lexo = require('../../Lexicographic/Hand.js');

class Straight {

    constructor(cards, strength) {
        this.cards = cards;
        this.value = lexo(strength, cards[0].valueOf());
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        return 'Straight';
    }

    getLongName() {
        let rank = this.cards[0].getRankText();
        return `Straight, ${rank} high`;
    }
}


module.exports = Straight;