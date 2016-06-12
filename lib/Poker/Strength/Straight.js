const Poker_Strength = require('../Strength');

/**
 * A poker hand that contains five cards of sequential rank in at least two different suits
 *
 * @extends Poker_Strength
 */
class Poker_Strength_Straight extends Poker_Strength {

    /**
     *
     * @param {Array} cards List of cards
     * @param {Number} strength Numeric representation of strength
     */
    constructor(cards, strength) {
        let highestCard = cards[0];
        let values = [highestCard.valueOf()];

        super(strength, values);

        this.shortName = 'Straight';
        this.longName = `Straight, ${highestCard.getRankText()} high`;
    }

}


module.exports = Poker_Strength_Straight;