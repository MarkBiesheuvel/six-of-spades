var handText = {
    0: 'High card',
    1: 'One pair',
    2: 'Two pair',
    3: 'Three of a kind',
    4: 'Straight',
    5: 'Flush',
    6: 'Full house',
    7: 'Four of a kind',
    8: 'Straight flush',
    9: 'Royal flush'
};

var Hand = function (cards) {

    if (cards.length !== 5) {
        throw Error('Hand must contain exactly 5 cards');
    }

    // TODO: check for duplicates

    cards.sort(function (a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });

    this.cards = cards;
    this.cache = {};
};

Hand.prototype.isStraightFlush = function () {
    return this.isFlush() && this.isStraight();
}

Hand.prototype.isFlush = function () {

    if (!('isFlush' in this.cache)) {

        var isFlush = true;

        for (var i = 1; i < 5; i++) {
            isFlush = isFlush &&
                (this.cards[i - 1].suit == this.cards[i].suit);
        }

        this.cache.isFlush = isFlush;
    }

    return this.cache.isFlush;
}

Hand.prototype.isStraight = function () {

    if (!('isStraight' in this.cache)) {

        var isStraight = true;

        for (var i = 1; i < 5; i++) {
            isStraight = isStraight &&
                (this.cards[i - 1].valueOf() == (this.cards[i].valueOf() - 1));
        }

        this.cache.isStraight = isStraight;
    }

    return this.cache.isStraight;
}

module.exports = Hand;



