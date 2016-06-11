const Poker_Strength = require('../Strength');

/**
 * A hand that contains five cards in sequence, all of the same suit
 */
class Poker_Strength_StraightFlush extends Poker_Strength {

    /**
     *
     * @param {Array} cards List of cards
     * @param {int} strength Numeric representation of strength
     */
    constructor(cards, strength) {
        let highestCard = cards[0];
        let values = [highestCard.valueOf()];

        super(strength, values);

        this.shortName = 'Straight flush';
        this.longName = `Straight flush, ${highestCard.getRankText()} high`;
    }

}

module.exports = Poker_Strength_StraightFlush;