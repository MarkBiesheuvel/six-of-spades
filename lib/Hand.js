var Card = require('./Card.js');
var lexo = require('./LexographicalNumber.js')(12, 6);

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

var ascending = function (a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
};
var descending = function () {
    return -ascending.apply(null, arguments);
};

var Hand = function (cards) {

    if (cards.length !== 5) {
        throw Error('Hand must contain exactly 5 cards');
    }

    cards = cards.map(function (card) {
        if (typeof card === 'string') {
            return new Card(card);
        } else {
            return card;
        }
    });

    // TODO: check for duplicates

    cards.sort(descending);

    this.cards = cards;
    this.cache = {};

    this.calculateHandStrength();
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

    for (var rank in tmp1) {
        tmp2.push({
            rank: rank,
            value: +tmp1[rank][0],
            count: tmp1[rank].length
        });
    }

    tmp2.sort(function (a, b) {
        var comp = ascending(a.count, b.count);
        if (comp !== 0) {
            return -comp;
        } else {
            return descending(a.value, b.value);
        }
    });

    this.cache.grouped = tmp2;
};


Hand.prototype.getHandText = function () {
    return handText[this.strength[0]];
};

Hand.prototype.calculateHandStrength = function () {

    // Calculate some stuff
    this.groupPairs();
    this.isFlush();
    this.isStraight();

    var cards = this.cards;
    var grouped = this.cache.grouped;

    if (this.isStraightFlush()) {
        this.strength = [8, +cards[0]];
    } else if (this.isFourOfAKind()) {
        this.strength = [7, grouped[0].value, grouped[1].value];
    } else if (this.isFullHouse()) {
        this.strength = [6, grouped[0].value, grouped[1].value];
    } else if (this.isFlush()) {
        this.strength = [5, +cards[0], +cards[1], +cards[2], +cards[3], +cards[4]];
    } else if (this.isStraight()) {
        this.strength = [4, +cards[0]];
    } else if (this.isThreeOfAKind()) {
        this.strength = [3, grouped[0].value, grouped[1].value, grouped[2].value];
    } else if (this.isTwoPair()) {
        this.strength = [2, grouped[0].value, grouped[1].value, grouped[2].value];
    } else if (this.isPair()) {
        this.strength = [1, grouped[0].value, grouped[1].value, grouped[2].value, grouped[3].value];
    } else {
        this.strength = [0, +cards[0], +cards[1], +cards[2], +cards[3], +cards[4]];
    }

};

Hand.prototype.isStraightFlush = function () {
    return this.isFlush() && this.isStraight();
};

Hand.prototype.isFourOfAKind = function () {
    return this.cache.grouped[0].count === 4;
};

Hand.prototype.isFullHouse = function () {
    return this.cache.grouped[0].count === 3 &&
        this.cache.grouped[1].count === 2;
};

Hand.prototype.isFlush = function () {

    if (!('isFlush' in this.cache)) {

        // Detect flushes
        this.cache.isFlush = true &&
            this.cards[0].suit == this.cards[1].suit &&
            this.cards[1].suit == this.cards[2].suit &&
            this.cards[2].suit == this.cards[3].suit &&
            this.cards[3].suit == this.cards[4].suit;
    }

    return this.cache.isFlush;
};

Hand.prototype.isStraight = function () {

    if (!('isStraight' in this.cache)) {

        // Detect normal straights
        this.cache.isStraight = true &&
            +this.cards[0] == (1 + this.cards[1]) &&
            +this.cards[1] == (1 + this.cards[2]) &&
            +this.cards[2] == (1 + this.cards[3]) &&
            +this.cards[3] == (1 + this.cards[4]);

        // Detect wheel straight
        if (!this.cache.isStraight &&
            this.cards[0].rank == 'A' &&
            this.cards[1].rank == '5' &&
            this.cards[2].rank == '4' &&
            this.cards[3].rank == '3' &&
            this.cards[4].rank == '2'
            ) {
            this.cache.isStraight = true;

            // Move ace to the back
            var ace = this.cards[0];
            this.cards = this.cards.slice(1);
            this.cards.push(ace);
        }
    }

    return this.cache.isStraight;
};

Hand.prototype.isThreeOfAKind = function () {
    return this.cache.grouped[0].count === 3;
};

Hand.prototype.isTwoPair = function () {
    return this.cache.grouped[0].count === 2 &&
        this.cache.grouped[1].count === 2;
};

Hand.prototype.isPair = function () {
    return this.cache.grouped[0].count === 2;
};

Hand.prototype.isHighCard = function () {
    return true;
};

Hand.prototype.valueOf = function () {
    return lexo.apply(null, this.strength);
};

module.exports = Hand;



