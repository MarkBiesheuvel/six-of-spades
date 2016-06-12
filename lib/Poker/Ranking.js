/**
 * An abstract class that describe a ranking system in poker
 */
class Poker_Ranking {

    /**
     *
     * @param {Poker_Card} card A poker card
     * @returns {Number} Value of cards
     */
    getCardValue(card) {
        card; // Getting around ESLint
        throw new Error('Unimplemented function');
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