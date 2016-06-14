const Poker_Valuator = require('../Valuator');
const Poker_Card = require('../Card');

/**
 * Lower cards are of more value, deuce being the lowest card and thus having the most value
 */
class Poker_Valuator_DeuceLow extends Poker_Valuator {

    /**
     *
     * @param {Poker_Card} card A poker card
     * @returns {Number} Value of cards
     */
    getCardValue(card) {

        switch (card.rank) {
            case Poker_Card.ACE:
                return 0;
            case Poker_Card.KING:
                return 1;
            case Poker_Card.QUEEN:
                return 2;
            case Poker_Card.JACK:
                return 3;
            case Poker_Card.TEN:
                return 4;
            case Poker_Card.NINE:
                return 5;
            case Poker_Card.EIGHT:
                return 6;
            case Poker_Card.SEVEN:
                return 7;
            case Poker_Card.SIX:
                return 8;
            case Poker_Card.FIVE:
                return 9;
            case Poker_Card.FOUR:
                return 10;
            case Poker_Card.THREE:
                return 11;
            case Poker_Card.DEUCE:
                return 12;
            default:
                throw new Error('Invalid card');
        }
    }
}

module.exports = Poker_Valuator_DeuceLow;