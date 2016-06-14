const Poker_Ranking = require('../Ranking');
const Poker_Valuator_DeuceLow = require('../Valuator/DeuceLow');
const Poker_Strength_LowCard = require('../Strength/LowCard');
const Poker_Strength_OnePair = require('../Strength/OnePair');
const Poker_Strength_TwoPair = require('../Strength/TwoPair');
const Poker_Strength_ThreeOfAKind = require('../Strength/ThreeOfAKind');
const Poker_Strength_Straight = require('../Strength/Straight');
const Poker_Strength_Flush = require('../Strength/Flush');
const Poker_Strength_FullHouse = require('../Strength/FullHouse');
const Poker_Strength_FourOfAKind = require('../Strength/FourOfAKind');
const Poker_Strength_StraightFlush = require('../Strength/StraightFlush');

/**
 * Deuce to seven lowball
 *
 * @extends Poker_Ranking
 */
class Poker_Ranking_DeuceToSeven extends Poker_Ranking {

    /**
     *
     */
    constructor() {
        super(new Poker_Valuator_DeuceLow(), 5);
    }

    /**
     *
     * @param {Poker_Hand} hand A hand of poker cards
     * @returns {Poker_Strength} Strength of hand
     */
    getStrength(hand) {

        hand.sort();

        let grouped = hand.getGroupedCards();
        let isFlush = hand.isFlush();
        let isStraight = hand.isStraight();

        let cards = hand.cards;

        if (isStraight && isFlush) {
            return new Poker_Strength_StraightFlush(cards, 0);

        } else if (grouped[0].cards.length === 4) {
            return new Poker_Strength_FourOfAKind(grouped, 1);

        } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
            return new Poker_Strength_FullHouse(grouped, 2);

        } else if (isFlush) {
            return new Poker_Strength_Flush(cards, 3);

        } else if (isStraight) {
            return new Poker_Strength_Straight(cards, 4);

        } else if (grouped[0].cards.length === 3) {
            return new Poker_Strength_ThreeOfAKind(grouped, 5);

        } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
            return new Poker_Strength_TwoPair(grouped, 6);

        } else if (grouped[0].cards.length === 2) {
            return new Poker_Strength_OnePair(grouped, 7);

        } else {
            return new Poker_Strength_LowCard(cards, 8);
        }
    }
}

module.exports = Poker_Ranking_DeuceToSeven;