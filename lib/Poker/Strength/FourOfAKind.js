const Poker_Strength = require('../Strength');
const pluralize = require('pluralize');

/**
 * A poker hand that contains all four cards of one rank and any other (unmatched) card
 */
class Poker_Strength_FourOfAKind extends Poker_Strength {

    /**
     *
     * @param {Array} grouped Cards grouped by rank
     * @param {int} strength Numeric representation of strength
     */
    constructor(grouped, strength) {

        let values = grouped.map((group) => group.cards[0].valueOf());

        super(strength, values);

        let groupOfFour = pluralize(grouped[0].cards[0].getRankText());

        this.shortName = 'Four of a kind';
        this.longName = `Four of a kind, ${groupOfFour}`;
    }

}

module.exports = Poker_Strength_FourOfAKind;