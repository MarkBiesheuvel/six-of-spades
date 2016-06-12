const Poker_Strength = require('../Strength');

/**
 * A poker hand where all five cards are of the same suit, but not in sequence
 * 
 * @extends Poker_Strength
 */
class Poker_Strength_Flush extends Poker_Strength {

    /**
     *
     * @param {Array} cards List of cards
     * @param {Number} strength Numeric representation of strength
     */
    constructor(cards, strength) {

        let values = cards.map((card) => card.valueOf());

        super(strength, values);

        let highestCard = cards[0].getRankText();

        this.shortName = 'Flush';
        this.longName = `Flush, ${highestCard} high`;
    }

}

module.exports = Poker_Strength_Flush;