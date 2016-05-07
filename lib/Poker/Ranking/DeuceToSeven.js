const Card = require('../Card.js');
const LowCard = require('../Strength/LowCard.js');
const OnePair = require('../Strength/OnePair.js');
const TwoPair = require('../Strength/TwoPair.js');
const ThreeOfAKind = require('../Strength/ThreeOfAKind.js');
const Straight = require('../Strength/Straight.js');
const Flush = require('../Strength/Flush.js');
const FullHouse = require('../Strength/FullHouse.js');
const FourOfAKind = require('../Strength/FourOfAKind.js');
const StraightFlush = require('../Strength/StraightFlush.js');

class DeuceToSeven {

    constructor() {
        this.numberOfCardsInHand = 5;
    }

    getCardValue(card) {
        switch (card.rank) {
            case Card.ACE:
                return 0;
            case Card.KING:
                return 1;
            case Card.QUEEN:
                return 2;
            case Card.JACK:
                return 3;
            case Card.TEN:
                return 4;
            case Card.NINE:
                return 5;
            case Card.EIGHT:
                return 6;
            case Card.SEVEN:
                return 7;
            case Card.SIX:
                return 8;
            case Card.FIVE:
                return 9;
            case Card.FOUR:
                return 10;
            case Card.THREE:
                return 11;
            case Card.DEUCE:
                return 12;
        }
    }

    getStrength(hand) {

        hand.sort();

        let grouped = hand.getGroupedCards();
        let isFlush = hand.isFlush();
        let isStraight = hand.isStraight();

        let cards = hand.cards;

        if (isStraight && isFlush) {
            return new StraightFlush(cards, 0);

        } else if (grouped[0].cards.length === 4) {
            return new FourOfAKind(grouped, 1);

        } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
            return new FullHouse(grouped, 2);

        } else if (isFlush) {
            return new Flush(cards, 3);

        } else if (isStraight) {
            return new Straight(cards, 4);

        } else if (grouped[0].cards.length === 3) {
            return new ThreeOfAKind(grouped, 5);

        } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
            return new TwoPair(grouped, 6);

        } else if (grouped[0].cards.length === 2) {
            return new OnePair(grouped, 7);

        } else {
            return new LowCard(cards, 8);
        }
    }
}

module.exports = DeuceToSeven;