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
    this.rank = string_value[0];
    this.suit = string_value[1];
};

//Card.prototype.toString = function () {
//    return rankText[this.rank] + ' of ' + suitText[this.suit];
//};

Card.prototype.valueOf = function () {
    return rankValue[this.rank];
};

module.exports = Card;