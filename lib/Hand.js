var handText = {
    0: 'High card',
    1: 'One pair',
    2: 'Two pair',
    3: 'Three of a kind',
    4: 'Straight',
    5: 'Flush',
    6: 'Full house',
    7: 'Four of a kind',
    8: 'Straight flush'
};

var compare = function (a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
};

var Hand = function (cards) {

    if (cards.length !== 5) {
        throw Error('Hand must contain exactly 5 cards');
    }

    // TODO: check for duplicates

    cards.sort(compare);

    this.cards = cards;
    this.cache = {};

    this.groupPairs();
};

Hand.prototype.groupPairs = function () {

    // TODO: document what is going on here

    var tmp1 = {};

    for (var i = 0; i < 5; i++) {
        var card = this.cards[i];
        if (card.rank in tmp1) {
            tmp1[card.rank].push(card);
        } else {
            tmp1[card.rank] = [card];
        }
    }

    var tmp2 = [];

    for (rank in tmp1) {
        tmp2.push({
            rank: rank,
            value: tmp1[rank][0].valueOf(),
            count: tmp1[rank].length
        });
    }

    tmp2.sort(function (a, b) {
        var comp = compare(a.count, b.count);
        if (comp !== 0) {
            return -comp;
        } else {
            return compare(a.value, b.value);
        }
    });

    this.cache.grouped = tmp2;
}


Hand.prototype.getHandText = function () {
    return handText[this.getHandValue()];
}

Hand.prototype.getHandValue = function () {

    if (this.isStraightFlush()) {
        return 8;
    } else if (this.isFourOfAKind()) {
        return 7;
    } else if (this.isFullHouse()) {
        return 6;
    } else if (this.isStraight()) {
        return 5;
    } else if (this.isFlush()) {
        return 4;
    } else if (this.isThreeOfAKind()) {
        return 3;
    } else if (this.isTwoPair()) {
        return 2;
    } else if (this.isPair()) {
        return 1;
    } else {
        return 0;
    }

}

Hand.prototype.isStraightFlush = function () {
    return this.isFlush() && this.isStraight();
}

Hand.prototype.isFourOfAKind = function () {
    return this.cache.grouped[0].count === 4;
}

Hand.prototype.isFullHouse = function () {
    return this.cache.grouped[0].count === 3 &&
        this.cache.grouped[1].count === 2;
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

Hand.prototype.isThreeOfAKind = function () {
    return this.cache.grouped[0].count === 3;
}

Hand.prototype.isTwoPair = function () {
    return this.cache.grouped[0].count === 2 &&
        this.cache.grouped[1].count === 2;
}

Hand.prototype.isPair = function () {
    return this.cache.grouped[0].count === 2;
}

Hand.prototype.isHighCard = function () {
    return true;
}

module.exports = Hand;



