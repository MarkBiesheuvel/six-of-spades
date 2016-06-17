let Poker_Card_Rank = {
    DEUCE: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    TEN: 'T',
    JACK: 'J',
    QUEEN: 'Q',
    KING: 'K',
    ACE: 'A'
};

let ranks = [];
for (let key in Poker_Card_Rank) {
    ranks.push(Poker_Card_Rank[key]);
}

Poker_Card_Rank.ranks = ranks;
Poker_Card_Rank.isValid = (rank) => (ranks.indexOf(rank) !== -1);

module.exports = Poker_Card_Rank;
