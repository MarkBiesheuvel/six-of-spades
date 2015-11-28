// Mapping from string value to integer value
// Used to compare different ranks

var Card = function (string_value, rankValue) {

    this.rank = string_value[0];
    this.suit = string_value[1];

    if (!(this.rank  in this.rankText)) {
        throw Error('Invalid rank');
    }

    if (!(this.suit in this.suitText)) {
        throw Error('Invalid suit');
    }

    this.rankValue = rankValue;
};

Card.prototype.rankText = {
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

Card.prototype.suitText = {
    'h': 'Hearts',
    's': 'Spades',
    'd': 'Diamonds',
    'c': 'Clubs'
};

Card.prototype.toString = function () {
    return this.getRankText() + ' of ' + this.getSuitText();
};

Card.prototype.valueOf = function () {
    return this.rankValue[this.rank];
};

Card.prototype.getRankText = function () {
    return this.rankText[this.rank];
};

Card.prototype.getSuitText = function () {
    return this.suitText[this.suit];
};

module.exports = Card;