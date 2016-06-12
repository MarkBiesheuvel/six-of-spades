const Poker_Ranking = require('../Ranking');
const Poker_Card = require('../Card');
const Poker_Strength_Badugi = require('../Strength/Badugi');
const Combination_Iterator = require('../../Combination/Iterator');

/**
 * Badugi
 */
class Poker_Ranking_Badugi extends Poker_Ranking {

    /**
     *
     */
    constructor() {
        super();
        this.numberOfCardsInHand = 4;
    }

    /**
     *
     * @param {Poker_Card} card A poker card
     * @returns {int} Value of cards
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

    /**
     *
     * @param {Array} cards An array of poker cards (can be shorter than 4)
     * @returns {boolean} Whether the array contains cards from all different suit and rank
     */
    isBadugi(cards) {

        let rankMap = {};
        let suitMap = {};

        for (let card of cards) {
            if (card.rank in rankMap) {
                return false;
            } else {
                rankMap[card.rank] = true;
            }

            if (card.suit in suitMap) {
                return false;
            } else {
                suitMap[card.suit] = true;
            }
        }

        return true;
    }

    /**
     *
     * @param {Poker_Hand} hand A hand of poker cards
     * @returns {Poker_Strength} Strength of hand
     */
    getStrength(hand) {

        hand.sort();

        let best = {
            strength: null,
            value: 0
        };

        for (let i = hand.cards.length; 0 < i; i--) {

            for (let cards of new Combination_Iterator(hand.cards, i)) {

                if (this.isBadugi(cards)) {

                    let strength = new Poker_Strength_Badugi(cards);
                    let val = strength.valueOf();

                    if (best.value < val) {
                        best.strength = strength;
                        best.value = val;
                    }
                }
            }

            if (best.strength !== null) {
                return best.strength;
            }

        }

        // This should not happen
        throw new Error('Unable to find valid hand');
    }

}

module.exports = Poker_Ranking_Badugi;