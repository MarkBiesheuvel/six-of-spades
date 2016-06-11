const Poker_Strength = require('../Strength');

/**
 * A poker hand made of any five cards not meeting any of the orther strength requirements
 */
class Poker_Strength_LowCard extends Poker_Strength {

    /**
     *
     * @param {Array} cards List of cards
     * @param {int} strength Numeric representation of strength
     */
    constructor(cards, strength) {

        let values = cards.map((card) => card.valueOf()).reverse();

        super(strength, values);

        let lowestCard = cards[4].getRankText();

        this.shortName = `${lowestCard} low`;

        lowestCard = cards[4].getRankShortText();
        let secondLowestCard = cards[3].getRankShortText();
        let thirdLowestCard = cards[2].getRankShortText();
        let fourthLowestCard = cards[1].getRankShortText();
        let fifthLowestCard = cards[0].getRankShortText();

        this.longName = `${lowestCard},${secondLowestCard},${thirdLowestCard},${fourthLowestCard},${fifthLowestCard}`;
    }

}

module.exports = Poker_Strength_LowCard;