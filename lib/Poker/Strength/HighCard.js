const Poker_Strength = require('../Strength');

/**
 * A poker hand made of any five cards not meeting any of the orther strength requirements
 * 
 * @extends Poker_Strength
 */
class Poker_Strength_HighCard extends Poker_Strength {

    /**
     *
     * @param {Array} cards List of cards
     * @param {Number} strength Numeric representation of strength
     */
    constructor(cards, strength) {

        let values = cards.map((card) => card.valueOf()).reverse();

        super(strength, values);

        let highestCard = cards[0].getRankText();

        this.shortName = 'High card';
        this.longName = `${highestCard} high`;
    }

}

module.exports = Poker_Strength_HighCard;