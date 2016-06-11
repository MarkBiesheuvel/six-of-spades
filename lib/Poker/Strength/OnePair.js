const Poker_Strength = require('../Strength');
const pluralize = require('pluralize');

/**
 * A poker hand that contains two cards of one rank,
 * plus three cards which are not of this rank nor the same as each other
 */
class Poker_Strength_OnePair extends Poker_Strength {

    /**
     *
     * @param {Array} grouped Cards grouped by rank
     * @param {int} strength Numeric representation of strength
     */
    constructor(grouped, strength) {

        let values = grouped.map((group) => group.cards[0].valueOf());

        super(strength, values);

        let groupOfTwo = pluralize(grouped[0].cards[0].getRankText());

        this.shortName = 'One pair';
        this.longName = `Pair of ${groupOfTwo}`;
    }

}

module.exports = Poker_Strength_OnePair;