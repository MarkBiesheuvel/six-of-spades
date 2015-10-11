// Mapping from string value to integer value
// Used to compare different ranks
var rankValue = {
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

var rankText = {
    '2': 'Deuce',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    'T': 'Ten',
    'J': 'Jack',
    'Q': 'Queen',
    'K': 'King',
    'A': 'Ace'
};

var suitText = {
    'h': 'Hearts',
    's': 'Spades',
    'd': 'Diamonds',
    'c': 'Clubs'
};

var Card = function (string_value) {

    if (!(string_value[0] in rankText)) {
        throw Error('Invalid rank');
    }

    if (!(string_value[1] in suitText)) {
        throw Error('Invalid suit');
    }

    this.rank = string_value[0];
    this.suit = string_value[1];
};

Card.prototype.toString = function () {
    return this.getRankText() + ' of ' + this.getSuitText();
};

Card.prototype.valueOf = function () {
    return rankValue[this.rank];
};

Card.prototype.getRankText = function () {
    return rankText[this.rank];
};

Card.prototype.getSuitText = function () {
    return suitText[this.suit];
};

module.exports = Card;