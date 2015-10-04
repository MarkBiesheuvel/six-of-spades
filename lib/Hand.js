var Card = require('./Card.js');

var HighCard = require('./Strength/HighCard.js');
var OnePair = require('./Strength/OnePair.js');
var TwoPair = require('./Strength/TwoPair.js');
var ThreeOfAKind = require('./Strength/ThreeOfAKind.js');
var Straight = require('./Strength/Straight.js');
var Flush = require('./Strength/Flush.js');
var FullHouse = require('./Strength/FullHouse.js');
var FourOfAKind = require('./Strength/FourOfAKind.js');
var StraightFlush = require('./Strength/StraightFlush.js');

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
            cards: tmp1[rank]
        });
    }

    tmp2.sort(function (a, b) {
        var comp = ascending(a.cards.length, b.cards.length);
        if (comp !== 0) {
            return -comp;
        } else {
            return descending(+a.cards[0], +b.cards[0]);
        }
    });

    this.cache.grouped = tmp2;
};

Hand.prototype.calculateHandStrength = function () {

    // Calculate some stuff
    this.groupPairs();
    this.isFlush();
    this.isStraight();

    var cards = this.cards;
    var grouped = this.cache.grouped;

    if (this.isStraightFlush()) {
        this.strength = new StraightFlush(cards);
    } else if (this.isFourOfAKind()) {
        this.strength = new FourOfAKind(grouped);
    } else if (this.isFullHouse()) {
        this.strength = new FullHouse(grouped);
    } else if (this.isFlush()) {
        this.strength = new Flush(cards);
    } else if (this.isStraight()) {
        this.strength = new Straight(cards);
    } else if (this.isThreeOfAKind()) {
        this.strength = new ThreeOfAKind(grouped);
    } else if (this.isTwoPair()) {
        this.strength = new TwoPair(grouped);
    } else if (this.isPair()) {
        this.strength = new OnePair(grouped);
    } else {
        this.strength = new HighCard(cards);
    }

};

Hand.prototype.isStraightFlush = function () {
    return this.isFlush() && this.isStraight();
};

Hand.prototype.isFourOfAKind = function () {
    return this.cache.grouped[0].cards.length === 4;
};

Hand.prototype.isFullHouse = function () {
    return this.cache.grouped[0].cards.length === 3 &&
        this.cache.grouped[1].cards.length === 2;
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
    return this.cache.grouped[0].cards.length === 3;
};

Hand.prototype.isTwoPair = function () {
    return this.cache.grouped[0].cards.length === 2 &&
        this.cache.grouped[1].cards.length === 2;
};

Hand.prototype.isPair = function () {
    return this.cache.grouped[0].cards.length === 2;
};

Hand.prototype.isHighCard = function () {
    return true;
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



