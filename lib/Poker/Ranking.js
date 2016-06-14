/**
 * An abstract class that describe a ranking system for poker hands
 */
class Poker_Ranking {

    /**
     *
     * @param {Poker_Valuator} valuator Card valuator corresponding to this ranking system
     * @param {Number} numberOfCardsInHand Number of cards a hand must have in this ranking system
     */
    constructor(valuator, numberOfCardsInHand = 5) {
        this.valuator = valuator;
        this.numberOfCardsInHand = numberOfCardsInHand;
    }

    /**
     *
     * @param {Poker_Hand} hand A hand of poker cards
     * @returns {Poker_Strength} Strength of hand
     */
    getStrength(hand) {
        hand;  // Getting around ESLint
        throw new Error('Unimplemented function');
    }
}

module.exports = Poker_Ranking;