var Card = require('../Card.js');
var LowCard = require('../Strength/LowCard.js');
var OnePair = require('../Strength/OnePair.js');
var TwoPair = require('../Strength/TwoPair.js');
var ThreeOfAKind = require('../Strength/ThreeOfAKind.js');
var FullHouse = require('../Strength/FullHouse.js');
var FourOfAKind = require('../Strength/FourOfAKind.js');

var AceToFive = function () {

};

AceToFive.prototype.numberOfCardsInHand = 5;

AceToFive.prototype.getCardValue = function (card) {
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
};

AceToFive.prototype.getStrength = function (hand) {

    hand.sort();

    var cards = hand.cards;
    var grouped = hand.getGroupedCards();

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
};

module.exports = AceToFive;