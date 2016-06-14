const Poker_Ranking = require('../Ranking');
const Poker_Valuator_AceLow = require('../Valuator/AceLow');
const Poker_Strength_LowCard = require('../Strength/LowCard');
const Poker_Strength_OnePair = require('../Strength/OnePair');
const Poker_Strength_TwoPair = require('../Strength/TwoPair');
const Poker_Strength_ThreeOfAKind = require('../Strength/ThreeOfAKind');
const Poker_Strength_FullHouse = require('../Strength/FullHouse');
const Poker_Strength_FourOfAKind = require('../Strength/FourOfAKind');

/**
 * Ace to five lowball
 *
 * @extends Poker_Ranking
 */
class Poker_Ranking_AceToFive extends Poker_Ranking {

    /**
     *
     */
    constructor() {
        super(new Poker_Valuator_AceLow(), 5);
    }

    /**
     *
     * @param {Poker_Hand} hand A hand of poker cards
     * @returns {Poker_Strength} Strength of hand
     */
    getStrength(hand) {

        hand.sort();

        let cards = hand.cards;
        let grouped = hand.getGroupedCards();

        if (grouped[0].cards.length === 4) {
            return new Poker_Strength_FourOfAKind(grouped, 0);

        } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
            return new Poker_Strength_FullHouse(grouped, 1);

        } else if (grouped[0].cards.length === 3) {
            return new Poker_Strength_ThreeOfAKind(grouped, 2);

        } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
            return new Poker_Strength_TwoPair(grouped, 3);

        } else if (grouped[0].cards.length === 2) {
            return new Poker_Strength_OnePair(grouped, 4);

        } else {
            return new Poker_Strength_LowCard(cards, 5);
        }
    }
}

module.exports = Poker_Ranking_AceToFive;