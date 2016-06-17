const Poker_Deck = require('../lib/Poker/Deck');
const Poker_Card = require('../lib/Poker/Card');

exports.has52Cards = (test) => {

    let deck = new Poker_Deck();
    
    for (let i = 0; i < 52; i++) {
        test.ok(deck.drawOne() instanceof Poker_Card);
    }

    test.throws(() => {
        deck.drawOne();
    });

    test.done();
};