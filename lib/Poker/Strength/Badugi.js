// TODO: for Badugi a different config may be used (by default it uses a length of six)
const lexo = require('../../Lexicographic/Hand.js');

class Badugi_Strength {

    constructor(cards) {
        this.cards = cards;

        let values = cards.map((card) => {
            return card.valueOf();
        }).reverse();

        this.value = lexo(cards.length, ...values);
    }

    valueOf() {
        return this.value;
    }

    getShortName() {
        switch (this.cards.length) {
            case 4:
                return 'Badugi';
            case 3:
                return 'Three-card hand';
            case 2:
                return 'Two-card hand';
            case 1:
                return 'One-card hand';
        }
    }

    getLongName() {
        let letters = [];

        for (let i = this.cards.length - 1; 0 <= i; i--) {
            letters.push(this.cards[i].getRankShortText());
        }
        for (let i = letters.length; i < 4; i++) {
            letters.push('x');
        }

        return letters.join('-');
    }
}

module.exports = Badugi_Strength;