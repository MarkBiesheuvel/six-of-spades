const Poker_Valuator = require('../Valuator');
const Poker_Card = require('../Card');

/**
 * Lower cards are of more value, ace being the lowest card and thus having the most value
 */
class Poker_Valuator_AceLow extends Poker_Valuator {

    /**
     *
     * @param {Poker_Card} card A poker card
     * @returns {Number} Value of cards
     */
    getCardValue(card) {
        
        switch (card.rank) {
            case Poker_Card.KING:
                return 0;
            case Poker_Card.QUEEN:
                return 1;
            case Poker_Card.JACK:
                return 2;
            case Poker_Card.TEN:
                return 3;
            case Poker_Card.NINE:
                return 4;
            case Poker_Card.EIGHT:
                return 5;
            case Poker_Card.SEVEN:
                return 6;
            case Poker_Card.SIX:
                return 7;
            case Poker_Card.FIVE:
                return 8;
            case Poker_Card.FOUR:
                return 9;
            case Poker_Card.THREE:
                return 10;
            case Poker_Card.DEUCE:
                return 11;
            case Poker_Card.ACE:
                return 12;
            default:
                throw new Error('Invalid card');
        }
    }
}

module.exports = Poker_Valuator_AceLow;