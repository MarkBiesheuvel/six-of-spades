const Poker_Hand = require('./Poker/Hand');
const Poker_Ranking_Traditional = require('./Poker/Ranking/Traditional');
const Poker_Ranking_AceToFive = require('./Poker/Ranking/AceToFive');
const Poker_Ranking_DeuceToSeven = require('./Poker/Ranking/DeuceToSeven');
const Poker_Ranking_Badugi = require('./Poker/Ranking/Badugi');
const Combination_Iterator = require('./Combination/Iterator');

/**
 * Poker base class
 */
class Poker {

    /**
     *
     * @param {Object} options Settings for this poker object
     * @param {string} option.ranking Which ranking system to use
     */
    constructor(options = {ranking: Poker.RANKING_TRADITIONAL}) {

        switch (options.ranking) {
            default:
            /* falls through */
            case Poker.RANKING_TRADITIONAL:
                this.ranker = new Poker_Ranking_Traditional();
                break;
            case Poker.RANKING_ACE_TO_FIVE:
                this.ranker = new Poker_Ranking_AceToFive();
                break;
            case Poker.RANKING_DEUCE_TO_SEVEN:
                this.ranker = new Poker_Ranking_DeuceToSeven();
                break;
            case Poker.RANKING_BADUGI:
                this.ranker = new Poker_Ranking_Badugi();
                break;
        }
    }

    /**
     *
     * @param {Array} cards An array of cards
     * @returns {Poker_Hand} A hand of poker
     */
    convertHand(cards) {
        return new Poker_Hand(cards, this.ranker);
    }

    /**
     *
     * @param {Array} cards An array of cards
     * @returns {Poker_Hand} The best possible hand of poker contained in the input array
     */
    findBestHand(cards) {

        const n = cards.length;
        const numberOfCardsInHand = this.ranker.numberOfCardsInHand;

        if (n < numberOfCardsInHand) {
            throw new Error(`Hand must contain ${numberOfCardsInHand} or more cards`);
        }

        let best = {
            hand: null,
            value: 0
        };

        for (let combination of new Combination_Iterator(cards, numberOfCardsInHand)) {

            let hand = this.convertHand(combination);
            let value = hand.valueOf();

            if (value > best.value) {
                best = {
                    hand,
                    value
                };
            }
        }

        // This shouldn't happen
        if (best.hand === null) {
            throw new Error('Unable to find best hand.');
        }

        return best.hand;
    }

}

Poker.RANKING_TRADITIONAL = 'traditional';
Poker.RANKING_ACE_TO_FIVE = 'ace_to_five';
Poker.RANKING_DEUCE_TO_SEVEN = 'deuce_to_seven';
Poker.RANKING_BADUGI = 'badugi';

module.exports = Poker;