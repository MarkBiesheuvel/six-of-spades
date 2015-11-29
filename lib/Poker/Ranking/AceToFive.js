var LowCard = require('./AceToFive/LowCard.js');
var OnePair = require('./AceToFive/OnePair.js');

var AceToFive = function () {

};

AceToFive.prototype.rankValue = {
    'K': 0,
    'Q': 1,
    'J': 2,
    'T': 3,
    '9': 4,
    '8': 5,
    '7': 6,
    '6': 7,
    '5': 8,
    '4': 9,
    '3': 10,
    '2': 11,
    'A': 12
};

AceToFive.prototype.numberOfCardsInHand = 5;

AceToFive.prototype.getStrength = function (hand) {

    hand.sort();

    var cards = hand.cards;
    var grouped = hand.getGroupedCards();

    if (grouped[0].cards.length === 4) {
        //return new FourOfAKind(grouped);

    } else if (grouped[0].cards.length === 3 && grouped[1].cards.length === 2) {
        //return new FullHouse(grouped);

    } else if (grouped[0].cards.length === 3) {
        //return new ThreeOfAKind(grouped);

    } else if (grouped[0].cards.length === 2 && grouped[1].cards.length === 2) {
        //return new TwoPair(grouped);

    } else if (grouped[0].cards.length === 2) {
        return new OnePair(grouped);

    } else {
        return new LowCard(cards);
    }
};

module.exports = AceToFive;