const Poker_Ranking = require('../Ranking');
const Poker_Card = require('../Card');
const Poker_Strength_HighCard = require('../Strength/HighCard');
const Poker_Strength_OnePair = require('../Strength/OnePair');
const Poker_Strength_TwoPair = require('../Strength/TwoPair');
const Poker_Strength_ThreeOfAKind = require('../Strength/ThreeOfAKind');
const Poker_Strength_Straight = require('../Strength/Straight');
const Poker_Strength_Flush = require('../Strength/Flush');
const Poker_Strength_FullHouse = require('../Strength/FullHouse');
const Poker_Strength_FourOfAKind = require('../Strength/FourOfAKind');
const Poker_Strength_StraightFlush = require('../Strength/StraightFlush');

/**
 * Traditional poker
 */
class Poker_Ranking_Traditional extends Poker_Ranking {

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

        if (!isStraight && // Detect wheel straight
            cards[0].rank == Poker_Card.ACE &&
            cards[1].rank == Poker_Card.FIVE &&
            cards[2].rank == Poker_Card.FOUR &&
            cards[3].rank == Poker_Card.THREE &&
            cards[4].rank == Poker_Card.DEUCE
        ) {
            isStraight = true;

            // Move ace to the back
            let ace = cards[0];
            cards = cards.slice(1);
            cards.push(ace);
        }

        if (isStraight && isFlush) {
            return new Poker_Strength_StraightFlush(cards, 8);

        } else if (grouped[0].cards.length === 4) {
            return new Poker_Strength_FourOfAKind(grouped, 7);

        } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
            return new Poker_Strength_FullHouse(grouped, 6);

        } else if (isFlush) {
            return new Poker_Strength_Flush(cards, 5);

        } else if (isStraight) {
            return new Poker_Strength_Straight(cards, 4);

        } else if (grouped[0].cards.length === 3) {
            return new Poker_Strength_ThreeOfAKind(grouped, 3);

        } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
            return new Poker_Strength_TwoPair(grouped, 2);

        } else if (grouped[0].cards.length === 2) {
            return new Poker_Strength_OnePair(grouped, 1);

        } else {
            return new Poker_Strength_HighCard(cards, 0);
        }
    }
}

module.exports = Poker_Ranking_Traditional;