const Poker_Valuator = require('../Valuator');
const Poker_Card = require('../Card');

/**
 * Higher cards are of more value, ace being the highest card and thus having the most value
 */
class Poker_Valuator_AceHigh extends Poker_Valuator {

    /**
     *
     * @param {Poker_Card} card A poker card
     * @returns {Number} Value of cards
     */
    getCardValue(card) {

        switch (card.rank) {
            case Poker_Card.DEUCE:
                return 0;
            case Poker_Card.THREE:
                return 1;
            case Poker_Card.FOUR:
                return 2;
            case Poker_Card.FIVE:
                return 3;
            case Poker_Card.SIX:
                return 4;
            case Poker_Card.SEVEN:
                return 5;
            case Poker_Card.EIGHT:
                return 6;
            case Poker_Card.NINE:
                return 7;
            case Poker_Card.TEN:
                return 8;
            case Poker_Card.JACK:
                return 9;
            case Poker_Card.QUEEN:
                return 10;
            case Poker_Card.KING:
                return 11;
            case Poker_Card.ACE:
                return 12;
            default:
                throw new Error('Invalid card');
        }
    }
}

module.exports = Poker_Valuator_AceHigh;