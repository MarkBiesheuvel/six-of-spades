const Poker_Valuator = require('../Valuator');
const Poker_Card_Rank = require('../Card/Rank');

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
            case Poker_Card_Rank.ACE:
                return 0;
            case Poker_Card_Rank.KING:
                return 1;
            case Poker_Card_Rank.QUEEN:
                return 2;
            case Poker_Card_Rank.JACK:
                return 3;
            case Poker_Card_Rank.TEN:
                return 4;
            case Poker_Card_Rank.NINE:
                return 5;
            case Poker_Card_Rank.EIGHT:
                return 6;
            case Poker_Card_Rank.SEVEN:
                return 7;
            case Poker_Card_Rank.SIX:
                return 8;
            case Poker_Card_Rank.FIVE:
                return 9;
            case Poker_Card_Rank.FOUR:
                return 10;
            case Poker_Card_Rank.THREE:
                return 11;
            case Poker_Card_Rank.DEUCE:
                return 12;
            default:
                throw new Error('Invalid card');
        }
    }
}

module.exports = Poker_Valuator_DeuceLow;