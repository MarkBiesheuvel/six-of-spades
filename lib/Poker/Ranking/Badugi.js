const Poker_Ranking = require('../Ranking');
const Poker_Valuator_AceLow = require('../Valuator/AceLow');
const Poker_Strength_Badugi = require('../Strength/Badugi');
const Combination_Iterator = require('../../Combination/Iterator');

/**
 * Badugi
 *
 * @extends Poker_Ranking
 */
class Poker_Ranking_Badugi extends Poker_Ranking {

    /**
     *
     */
    constructor() {
        super(new Poker_Valuator_AceLow(), 4);
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