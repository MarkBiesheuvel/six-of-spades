var Hand = require('../lib/Hand.js');

exports.flushBeatsOnePair = function (test) {

    var hand1 = new Hand(['4c', '5d', 'Td', '4s', 'Ah']);
    var hand2 = new Hand(['4h', '3h', '9h', 'Jh', '6h']);

    test.equal(hand1.getHandText(), 'One pair', 'First hand is one pair');
    test.equal(hand2.getHandText(), 'Flush', 'Second hand is a flush');
    test.ok(hand1.getHandValue() < hand2.getHandValue(), 'Second hand is stronger than first hand');
    test.done();
};

exports.aceHighFlushBeatsLowerFlush = function (test) {

    var hand1 = new Hand(['Ac', 'Tc', '4c', 'Kc', '9c']);
    var hand2 = new Hand(['9d', '4d', '8d', '3d', 'Jd']);

    test.equal(hand1.getHandText(), 'Flush', 'First hand is a flush');
    test.equal(hand2.getHandText(), 'Flush', 'Second hand is a flush');

    // TODO: implement comparison of hand strength with equal type (e.g. higher flushes or higher full houses)
    test.ok(hand1.getHandValue() > hand2.getHandValue(), 'First hand is stronger than second hand');

    test.done();
};