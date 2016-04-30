var Card = require('../Card.js');
var HighCard = require('../Strength/HighCard.js');
var OnePair = require('../Strength/OnePair.js');
var TwoPair = require('../Strength/TwoPair.js');
var ThreeOfAKind = require('../Strength/ThreeOfAKind.js');
var Straight = require('../Strength/Straight.js');
var Flush = require('../Strength/Flush.js');
var FullHouse = require('../Strength/FullHouse.js');
var FourOfAKind = require('../Strength/FourOfAKind.js');
var StraightFlush = require('../Strength/StraightFlush.js');

var Traditional = function () {

};

Traditional.prototype.numberOfCardsInHand = 5;

Traditional.prototype.getCardValue = function (card) {

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
};

Traditional.prototype.getStrength = function (hand) {

    hand.sort();

    var grouped = hand.getGroupedCards();
    var isFlush = hand.isFlush();
    var isStraight = hand.isStraight();

    var cards = hand.cards;

    if (!isStraight && // Detect wheel straight
        cards[0].rank == 'A' &&
        cards[1].rank == '5' &&
        cards[2].rank == '4' &&
        cards[3].rank == '3' &&
        cards[4].rank == '2'
    ) {
        isStraight = true;

        // Move ace to the back
        var ace = cards[0];
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
};

module.exports = Traditional;