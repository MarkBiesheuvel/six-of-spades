const Card = require('../Card.js');
const HighCard = require('../Strength/HighCard.js');
const OnePair = require('../Strength/OnePair.js');
const TwoPair = require('../Strength/TwoPair.js');
const ThreeOfAKind = require('../Strength/ThreeOfAKind.js');
const Straight = require('../Strength/Straight.js');
const Flush = require('../Strength/Flush.js');
const FullHouse = require('../Strength/FullHouse.js');
const FourOfAKind = require('../Strength/FourOfAKind.js');
const StraightFlush = require('../Strength/StraightFlush.js');

class Traditional {

    constructor() {
        this.numberOfCardsInHand = 5;
    }

    getCardValue(card) {

        switch (card.rank) {
            case Card.DEUCE:
                return 0;
            case Card.THREE:
                return 1;
            case Card.FOUR:
                return 2;
            case Card.FIVE:
                return 3;
            case Card.SIX:
                return 4;
            case Card.SEVEN:
                return 5;
            case Card.EIGHT:
                return 6;
            case Card.NINE:
                return 7;
            case Card.TEN:
                return 8;
            case Card.JACK:
                return 9;
            case Card.QUEEN:
                return 10;
            case Card.KING:
                return 11;
            case Card.ACE:
                return 12;
        }
    }

    getStrength(hand) {

        hand.sort();

        let grouped = hand.getGroupedCards();
        let isFlush = hand.isFlush();
        let isStraight = hand.isStraight();

        let cards = hand.cards;

        if (!isStraight && // Detect wheel straight
            cards[0].rank == Card.ACE &&
            cards[1].rank == Card.FIVE &&
            cards[2].rank == Card.FOUR &&
            cards[3].rank == Card.THREE &&
            cards[4].rank == Card.DEUCE
        ) {
            isStraight = true;

            // Move ace to the back
            let ace = cards[0];
            cards = cards.slice(1);
            cards.push(ace);
        }

        if (isStraight && isFlush) {
            return new StraightFlush(cards, 8);

        } else if (grouped[0].cards.length === 4) {
            return new FourOfAKind(grouped, 7);

        } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
            return new FullHouse(grouped, 6);

        } else if (isFlush) {
            return new Flush(cards, 5);

        } else if (isStraight) {
            return new Straight(cards, 4);

        } else if (grouped[0].cards.length === 3) {
            return new ThreeOfAKind(grouped, 3);

        } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
            return new TwoPair(grouped, 2);

        } else if (grouped[0].cards.length === 2) {
            return new OnePair(grouped, 1);

        } else {
            return new HighCard(cards, 0);
        }
    }
}

module.exports = Traditional;