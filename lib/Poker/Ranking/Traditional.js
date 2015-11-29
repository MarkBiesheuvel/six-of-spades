var HighCard = require('./Traditional/HighCard.js');
var OnePair = require('./Traditional/OnePair.js');
var TwoPair = require('./Traditional/TwoPair.js');
var ThreeOfAKind = require('./Traditional/ThreeOfAKind.js');
var Straight = require('./Traditional/Straight.js');
var Flush = require('./Traditional/Flush.js');
var FullHouse = require('./Traditional/FullHouse.js');
var FourOfAKind = require('./Traditional/FourOfAKind.js');
var StraightFlush = require('./Traditional/StraightFlush.js');

var Traditional = function () {

};

Traditional.prototype.rankValue = {
    '2': 0,
    '3': 1,
    '4': 2,
    '5': 3,
    '6': 4,
    '7': 5,
    '8': 6,
    '9': 7,
    'T': 8,
    'J': 9,
    'Q': 10,
    'K': 11,
    'A': 12
};

Traditional.prototype.numberOfCardsInHand = 5;

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
        return new StraightFlush(cards);

    } else if (grouped[0].cards.length === 4) {
        return new FourOfAKind(grouped);

    } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
        return new FullHouse(grouped);

    } else if (isFlush) {
        return new Flush(cards);

    } else if (isStraight) {
        return new Straight(cards);

    } else if (grouped[0].cards.length === 3) {
        return new ThreeOfAKind(grouped);

    } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
        return new TwoPair(grouped);

    } else if (grouped[0].cards.length === 2) {
        return new OnePair(grouped);

    } else {
        return new HighCard(cards);
    }
};

module.exports = Traditional;