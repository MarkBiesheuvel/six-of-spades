const Poker_Strength = require('../Strength');
const pluralize = require('pluralize');

/**
 * A poker hand that contains two cards of the same rank,
 * plus two cards of another rank  plus any card not of either rank
 *
 * @extends Poker_Strength
 */
class Poker_Strength_TwoPair extends Poker_Strength {

    /**
     *
     * @param {Array} grouped Cards grouped by rank
     * @param {Number} strength Numeric representation of strength
     */
    constructor(grouped, strength) {

        let values = grouped.map((group) => group.cards[0].valueOf());

        super(strength, values);

        let highestPair = pluralize(grouped[0].cards[0].getRankText());
        let lowestPair = pluralize(grouped[1].cards[0].getRankText());

        this.shortName = 'Two pair';
        this.longName = `Two pair, ${highestPair} and ${lowestPair}`;
    }

}

module.exports = Poker_Strength_TwoPair;