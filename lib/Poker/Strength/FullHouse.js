const Poker_Strength = require('../Strength');
const pluralize = require('pluralize');

/**
 * A poker hand that contains three matching cards of one rank and two matching cards of another rank
 */
class Poker_Strength_FullHouse extends Poker_Strength {

    /**
     *
     * @param {Array} grouped Cards grouped by rank
     * @param {Number} strength Numeric representation of strength
     */
    constructor(grouped, strength) {

        let values = grouped.map((group) => group.cards[0].valueOf());

        super(strength, values);

        let groupOfThree = pluralize(grouped[0].cards[0].getRankText());
        let groupOfTwo = pluralize(grouped[1].cards[0].getRankText());

        this.shortName = 'Full house';
        this.longName = `Full house, ${groupOfThree} over ${groupOfTwo}`;
    }

}

module.exports = Poker_Strength_FullHouse;