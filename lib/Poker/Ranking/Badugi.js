const Card = require('../Card');
const CombinationIterator = require('../../Combination/Iterator');
const Strength_Badugi = require('../Strength/Badugi');

class Badugi {

    constructor() {
        this.numberOfCardsInHand = 4;
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

    getStrength(hand) {

        hand.sort();

        let best = {
            strength: null,
            value: 0
        };

        for (let i = hand.cards.length; 0 < i; i--) {

            for (let cards of new CombinationIterator(hand.cards, i)) {

                if (this.isBadugi(cards)) {

                    let strength = new Strength_Badugi(cards);
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
        throw Error('Unable to find valid hand');
    }

}

module.exports = Badugi;