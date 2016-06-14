/**
 * An abstract class that describe a value for poker cards
 */
class Poker_Valuator {

    /**
     *
     * @param {Poker_Card} card A poker card
     * @returns {Number} Value of cards
     */
    getCardValue(card) {
        card; // Getting around ESLint
        throw new Error('Unimplemented function');
    }

}

module.exports = Poker_Valuator;