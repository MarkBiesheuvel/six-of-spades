const Poker_Card_Suit = {
    HEARTS: 'h',
    SPADES: 's',
    DIAMONDS: 'd',
    CLUBS: 'c'
};

let suits = [];
for (let key in  Poker_Card_Suit) {
    suits.push(Poker_Card_Suit[key]);
}

Poker_Card_Suit.suits = suits;
Poker_Card_Suit.isValid = (suit) => (suits.indexOf(suit) !== -1);

module.exports = Poker_Card_Suit;