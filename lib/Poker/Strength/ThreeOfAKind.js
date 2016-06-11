const Poker_Strength = require('../Strength');
const pluralize = require('pluralize');

/**
 * A poker hand that contains three cards of the same rank,
 * plus two cards which are not of this rank nor the same as each other
 */
class Poker_Strength_ThreeOfAKind extends Poker_Strength {

    /**
     *
     * @param {Array} grouped Cards grouped by rank
     * @param {int} strength Numeric representation of strength
     */
    constructor(grouped, strength) {

        let values = grouped.map((group) => group.cards[0].valueOf());

        super(strength, values);

        let groupOfThree = pluralize(grouped[0].cards[0].getRankText());

        this.shortName = 'Three of a kind';
        this.longName = `Three of a kind, ${groupOfThree}`;
    }

}

module.exports = Poker_Strength_ThreeOfAKind;