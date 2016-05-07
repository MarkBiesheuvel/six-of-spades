const Hand = require('../lib/Poker/Hand.js');
const Card = require('../lib/Poker/Card.js');

// Test for exceptions

exports.hand = (test) => {

    test.throws(() => new Hand([]), /*                                   */ 'No cards');
    test.throws(() => new Hand(['As', 'Ad', 'Ks', 'Kd']), /*             */ 'Too little cards');
    test.throws(() => new Hand(['As', 'Ad', 'Ks', 'Kd', 'Qs', 'Qd']), /* */ 'Too many cards');
    test.throws(() => new Hand(), /*                                     */ 'No argument');
    test.throws(() => new Hand('Hello'), /*                              */ 'Invalid argument');
    test.throws(() => new Hand(['As', 'Ad', 'Ks', 'Kd', 'Kd']), /*       */ 'Duplicate cards');

    test.done();
};

exports.card = (test) => {

    test.throws(() => new Card('1s'), 'Invalid rank');
    test.throws(() => new Card('Av'), 'Invalid suit');
    test.throws(() => new Card(''), 'No argument');
    test.throws(() => new Card(), 'No argument');

    test.done();
};