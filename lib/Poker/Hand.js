var Card = require('./Card.js');

var descending = function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
};

var Hand = function (cards, ranker) {

    if (cards.length !== ranker.numberOfCardsInHand) {
        throw Error('Hand must contain exactly ' + ranker.numberOfCardsInHand + ' cards');
    }

    // Convert to Card objects if that hasn't been done
    cards = cards.map(function (card) {
        if (typeof card === 'string') {
            return new Card(card, ranker);
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

    this.cards = cards;
    this.strength = ranker.getStrength(this);
};

Hand.prototype.sort = function () {
    // Order cards from high to low
    this.cards = this.cards.sort(descending);
};

Hand.prototype.getGroupedCards = function () {

    var cards = this.cards;

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

    return grouped;
};

Hand.prototype.isFlush = function () {

    var cards = this.cards;

    return cards[0].suit == cards[1].suit &&
        cards[1].suit == cards[2].suit &&
        cards[2].suit == cards[3].suit &&
        cards[3].suit == cards[4].suit;
};

Hand.prototype.isStraight = function () {

    var cards = this.cards;

    return +cards[0] == (1 + cards[1]) &&
        +cards[1] == (1 + cards[2]) &&
        +cards[2] == (1 + cards[3]) &&
        +cards[3] == (1 + cards[4]);
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



