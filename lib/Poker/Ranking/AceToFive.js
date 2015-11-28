var LowCard = require('./AceToFive/LowCard.js');

var descending = function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
};

var AceToFive = function () {

};

AceToFive.prototype.rankValue = {
    'K': 0,
    'Q': 1,
    'J': 2,
    'T': 3,
    '9': 4,
    '8': 5,
    '7': 6,
    '6': 7,
    '5': 8,
    '4': 9,
    '3': 10,
    '2': 11,
    'A': 12
};

AceToFive.prototype.evaluate = function (cards) {

    // Order cards from high to low
    cards = cards.sort(descending);

    return new LowCard(cards);
};

module.exports = AceToFive;