var Card = require('../Card.js');
var LowCard = require('../Strength/LowCard.js');
var OnePair = require('../Strength/OnePair.js');
var TwoPair = require('../Strength/TwoPair.js');
var ThreeOfAKind = require('../Strength/ThreeOfAKind.js');
var Straight = require('../Strength/Straight.js');
var Flush = require('../Strength/Flush.js');
var FullHouse = require('../Strength/FullHouse.js');
var FourOfAKind = require('../Strength/FourOfAKind.js');
var StraightFlush = require('../Strength/StraightFlush.js');

var DeuceToSeven = function () {

};

DeuceToSeven.prototype.numberOfCardsInHand = 5;

DeuceToSeven.prototype.getCardValue = function (card) {
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
};

DeuceToSeven.prototype.getStrength = function (hand) {

    hand.sort();

    var grouped = hand.getGroupedCards();
    var isFlush = hand.isFlush();
    var isStraight = hand.isStraight();

    var cards = hand.cards;

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
};

module.exports = DeuceToSeven;