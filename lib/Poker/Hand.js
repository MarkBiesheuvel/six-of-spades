var Card = require('./Card.js');

var Hand = function (cards, ranker) {

    if (cards.length !== 5) {
        throw Error('Hand must contain exactly 5 cards');
    }

    // Convert to Card objects if that hasn't been done
    cards = cards.map(function (card) {
        if (typeof card === 'string') {
            return new Card(card, ranker.rankValue);
        } else {
            return card;
        }
    });

    // Check for duplicates
    for (var i = 0; i < cards.length; i++) {
        for (var j = 0; j < cards.length; j++) {

            if (i === j) {
                continue;
            }

            if (cards[i].rank === cards[j].rank && cards[i].suit === cards[j].suit) {
                throw Error('Duplicate cards: ' + cards[i].toString());
            }

        }
    }

    this.strength = ranker.evaluate(cards);
};

Hand.prototype.getShortName = function () {
    return this.strength.getShortName();
};

Hand.prototype.getLongName = function () {
    return this.strength.getLongName();
};

Hand.prototype.valueOf = function () {
    return this.strength.valueOf();
};

module.exports = Hand;



