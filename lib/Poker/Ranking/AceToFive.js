const Card = require('../Card.js');
const LowCard = require('../Strength/LowCard.js');
const OnePair = require('../Strength/OnePair.js');
const TwoPair = require('../Strength/TwoPair.js');
const ThreeOfAKind = require('../Strength/ThreeOfAKind.js');
const FullHouse = require('../Strength/FullHouse.js');
const FourOfAKind = require('../Strength/FourOfAKind.js');

class AceToFive {

    constructor() {
        this.numberOfCardsInHand = 5;
    }

    getCardValue(card) {
        switch (card.rank) {
            case Card.KING:
                return 0;
            case Card.QUEEN:
                return 1;
            case Card.JACK:
                return 2;
            case Card.TEN:
                return 3;
            case Card.NINE:
                return 4;
            case Card.EIGHT:
                return 5;
            case Card.SEVEN:
                return 6;
            case Card.SIX:
                return 7;
            case Card.FIVE:
                return 8;
            case Card.FOUR:
                return 9;
            case Card.THREE:
                return 10;
            case Card.DEUCE:
                return 11;
            case Card.ACE:
                return 12;
        }
    }

    getStrength(hand) {

        hand.sort();

        let cards = hand.cards;
        let grouped = hand.getGroupedCards();

        if (grouped[0].cards.length === 4) {
            return new FourOfAKind(grouped, 0);

        } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
            return new FullHouse(grouped, 1);

        } else if (grouped[0].cards.length === 3) {
            return new ThreeOfAKind(grouped, 2);

        } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
            return new TwoPair(grouped, 3);

        } else if (grouped[0].cards.length === 2) {
            return new OnePair(grouped, 4);

        } else {
            return new LowCard(cards, 5);
        }
    }
}

module.exports = AceToFive;