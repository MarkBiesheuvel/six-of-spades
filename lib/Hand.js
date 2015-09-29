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

    this.groupPairs();

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
            value: tmp1[rank][0].valueOf(),
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

    var grouped = this.cache.grouped;

    if (this.isStraightFlush()) {
        this.strength = [8, grouped[0].value];
    } else if (this.isFourOfAKind()) {
        this.strength = [7, grouped[0].value, grouped[1].value];
    } else if (this.isFullHouse()) {
        this.strength = [6, grouped[0].value, grouped[1].value];
    } else if (this.isFlush()) {
        this.strength = [5, grouped[0].value, grouped[1].value, grouped[2].value, grouped[3].value, grouped[4].value];
    } else if (this.isStraight()) {
        this.strength = [4, grouped[0].value];
    } else if (this.isThreeOfAKind()) {
        this.strength = [3, grouped[0].value, grouped[1].value, grouped[2].value];
    } else if (this.isTwoPair()) {
        this.strength = [2, grouped[0].value, grouped[1].value, grouped[2].value];
    } else if (this.isPair()) {
        this.strength = [1, grouped[0].value, grouped[1].value, grouped[2].value, grouped[3].value];
    } else {
        this.strength = [0, grouped[0].value, grouped[1].value, grouped[2].value, grouped[3].value, grouped[4].value];
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

        var isFlush = true;

        for (var i = 1; i < 5; i++) {
            isFlush = isFlush &&
                (this.cards[i - 1].suit == this.cards[i].suit);
        }

        this.cache.isFlush = isFlush;
    }

    return this.cache.isFlush;
};

Hand.prototype.isStraight = function () {

    if (!('isStraight' in this.cache)) {

        var isStraight = true;

        // Detect normal straights
        for (var i = 1; i < 5; i++) {
            isStraight = isStraight &&
                (this.cards[i - 1].valueOf() == (this.cards[i].valueOf() + 1));
        }
        
        // Detect wheel straight
        if (!isStraight &&
                this.cards[0].rank == 'A' &&
                this.cards[1].rank == '5' &&
                this.cards[2].rank == '4' &&
                this.cards[3].rank == '3' &&
                this.cards[4].rank == '2'
            ) {
            isStraight = true;
            
            // Move ace to the back
            var ace = this.cards[0];
            this.cards = this.cards.slice(1);
            this.cards.push(ace);            
        }

        this.cache.isStraight = isStraight;
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



