var Hand = require('../lib/Hand.js');

var hands = [];
hands[0] = new Hand(['4c', '5d', 'Td', '4s', 'Ah']); // One pair 4s, ace, ten, 5 kicker
hands[1] = new Hand(['4h', '3h', '9h', 'Jh', '6h']); // Flush jack, nine, six, four, three
hands[2] = new Hand(['9d', '4d', '8d', '3d', 'Jd']); // Flush jack, nine, eight, four, three
hands[3] = new Hand(['Ac', 'Tc', '4c', 'Kc', '9c']); // Flush ace, king, ten, nine, four
hands[4] = new Hand(['Jd', 'Tc', '7c', '8s', '9c']); // Straight, Jack high

exports.flushBeatsOnePair = function (test) {

    test.equal(hands[0].getHandText(), 'One pair', 'Hand #0 is one pair');

    test.ok(hands[1].getHandValue() > hands[0].getHandValue(), 'Hand #1 is stronger than hand #0');
    test.ok(hands[2].getHandValue() > hands[0].getHandValue(), 'Hand #2 is stronger than hand #0');
    test.ok(hands[3].getHandValue() > hands[0].getHandValue(), 'Hand #3 is stronger than hand #0');

    test.ok(hands[0].getHandValue() < hands[1].getHandValue(), 'Hand #0 is weaker than hand #1');
    test.ok(hands[0].getHandValue() < hands[2].getHandValue(), 'Hand #0 is weaker than hand #2');
    test.ok(hands[0].getHandValue() < hands[3].getHandValue(), 'Hand #0 is weaker than hand #3');

    test.done();
};

exports.flushBeatsStraight = function (test) {

    test.equal(hands[4].getHandText(), 'Straight', 'Hand #4 is a straight');

    test.ok(hands[1].getHandValue() > hands[4].getHandValue(), 'Hand #1 is stronger than hand #4');
    test.ok(hands[2].getHandValue() > hands[4].getHandValue(), 'Hand #2 is stronger than hand #4');
    test.ok(hands[3].getHandValue() > hands[4].getHandValue(), 'Hand #3 is stronger than hand #4');

    test.ok(hands[4].getHandValue() < hands[1].getHandValue(), 'Hand #4 is weaker than hand #1');
    test.ok(hands[4].getHandValue() < hands[2].getHandValue(), 'Hand #4 is weaker than hand #2');
    test.ok(hands[4].getHandValue() < hands[3].getHandValue(), 'Hand #4 is weaker than hand #3');

    test.done();
};

exports.aceHighFlushBeatsLowerFlush = function (test) {

    test.equal(hands[1].getHandText(), 'Flush', 'Hand #1 is a flush');
    test.equal(hands[2].getHandText(), 'Flush', 'Hand #2 is a flush');
    test.equal(hands[3].getHandText(), 'Flush', 'Hand #3 is a flush');

    // TODO: implement comparison of hand strength with equal type (e.g. higher flushes or higher full houses)
    test.ok(hands[3].getHandValue() > hands[2].getHandValue(), 'Hand #2 is stronger than hand #3');
    test.ok(hands[2].getHandValue() > hands[1].getHandValue(), 'Hand #3 is stronger than hand #1');
    test.ok(hands[3].getHandValue() > hands[1].getHandValue(), 'Hand #2 is stronger than hand #1');

    test.ok(hands[2].getHandValue() < hands[3].getHandValue(), 'Hand #2 is weaker than hand #3');
    test.ok(hands[1].getHandValue() < hands[2].getHandValue(), 'Hand #1 is weaker than hand #2');
    test.ok(hands[1].getHandValue() < hands[3].getHandValue(), 'Hand #1 is weaker than hand #3');

    test.done();
};