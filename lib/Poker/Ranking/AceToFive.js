const Poker_Ranking = require('../Ranking');
const Poker_Card = require('../Card');
const Poker_Strength_LowCard = require('../Strength/LowCard');
const Poker_Strength_OnePair = require('../Strength/OnePair');
const Poker_Strength_TwoPair = require('../Strength/TwoPair');
const Poker_Strength_ThreeOfAKind = require('../Strength/ThreeOfAKind');
const Poker_Strength_FullHouse = require('../Strength/FullHouse');
const Poker_Strength_FourOfAKind = require('../Strength/FourOfAKind');

/**
 * Ace to five lowball
 */
class Poker_Ranking_AceToFive extends Poker_Ranking {

    /**
     *
     */
    constructor() {
        super();
        this.numberOfCardsInHand = 5;
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