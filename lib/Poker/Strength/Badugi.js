const Poker_Strength = require('../Strength');

/**
 * A poker hand that contains cards from different ranks and suits
 */
class Poker_Strength_Badugi extends Poker_Strength {

    /**
     *
     * @param {Array} cards List of cards
     */
    constructor(cards) {

        let strength = cards.length;
        let values = cards.map((card) => card.valueOf()).reverse();

        super(strength, values);

        switch (cards.length) {
            case 4:
                this.shortName = 'Badugi';
                break;
            case 3:
                this.shortName = 'Three-card hand';
                break;
            case 2:
                this.shortName = 'Two-card hand';
                break;
            case 1:
                this.shortName = 'One-card hand';
                break;
        }

        let letters = [];

        for (let i = cards.length - 1; 0 <= i; i--) {
            letters.push(cards[i].getRankShortText());
        }
        for (let i = letters.length; i < 4; i++) {
            letters.push('x');
        }

        this.longName = letters.join('-');
    }

}

module.exports = Poker_Strength_Badugi;