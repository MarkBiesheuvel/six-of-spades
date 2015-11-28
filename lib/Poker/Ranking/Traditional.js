var HighCard = require('./Traditional/HighCard.js');
var OnePair = require('./Traditional/OnePair.js');
var TwoPair = require('./Traditional/TwoPair.js');
var ThreeOfAKind = require('./Traditional/ThreeOfAKind.js');
var Straight = require('./Traditional/Straight.js');
var Flush = require('./Traditional/Flush.js');
var FullHouse = require('./Traditional/FullHouse.js');
var FourOfAKind = require('./Traditional/FourOfAKind.js');
var StraightFlush = require('./Traditional/StraightFlush.js');

var descending = function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
};

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

Traditional.prototype.evaluate = function(cards){

    // Order cards from high to low
    cards = cards.sort(descending);

    // Create a temporary object in which card witht he same rank are put into the same array
    var tmp = {};
    for (var i = 0; i < 5; i++) {
        var card = cards[i];
        if (card.rank in tmp) {
            tmp[card.rank].push(card);
        } else {
            tmp[card.rank] = [card];
        }
    }

    // Now transform this object of arrays into and array of objects
    var grouped = [];
    for (var rank in tmp) {
        grouped.push({
            rank: rank,
            cards: tmp[rank]
        });
    }

    // Sort the groups of cards based on a big the group is; larger groups to lower groups
    // If groups are even large, sort on the rank of the cards;higher cards to lower cards
    grouped.sort(function (a, b) {
        var comp = descending(a.cards.length, b.cards.length);
        if (comp !== 0) {
            return comp;
        } else {
            return descending(+a.cards[0], +b.cards[0]);
        }
    });

    var isFlush = // Detect flushes
        cards[0].suit == cards[1].suit &&
        cards[1].suit == cards[2].suit &&
        cards[2].suit == cards[3].suit &&
        cards[3].suit == cards[4].suit;

    var isStraight = // Detect normal straights
        +cards[0] == (1 + cards[1]) &&
        +cards[1] == (1 + cards[2]) &&
        +cards[2] == (1 + cards[3]) &&
        +cards[3] == (1 + cards[4]);

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