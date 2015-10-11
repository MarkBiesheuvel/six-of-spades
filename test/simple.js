var Hand = require('../lib/Hand.js');
var Card = require('../lib/Card.js');

var cases = require('./cases.json');
var hands = [];

// Convert to Hand objects
for (var i = 0; i < cases.length; i++) {
    hands[i] = new Hand(cases[i].cards);
}

exports.comparisons = function (test) {

    for (var i = 0; i < hands.length; i++) {
        for (var j = 0; j < hands.length; j++) {

            if (i === j) {
                continue;
            }

            if (i < j) {
                test.ok(+hands[i] < +hands[j], 'Hand #' + i + ' is weaker than hand #' + j);
            } else {
                test.ok(+hands[i] > +hands[j], 'Hand #' + i + ' is stronger than hand #' + j);
            }

        }

        if ('ties_with' in cases[i]) {
            var ties_with = hands[i] = new Hand(cases[i].ties_with);
            test.ok(+hands[i] === +ties_with, 'Hand #' + i + 'a is equal to hand #' + i + 'b');
        }
    }

    test.done();
};

exports.short_names = function (test) {

    for (var i = 0; i < hands.length; i++) {
        test.equal(hands[i].getShortName(), cases[i].short_name, 'Hand #' + i + ' is a ' + cases[i].short_name);
    }

    test.done();
};

exports.long_names = function (test) {

    for (var i = 0; i < hands.length; i++) {
        test.equal(hands[i].getLongName(), cases[i].long_name, 'Hand #' + i + ' is a ' + cases[i].long_name);
    }

    test.done();
};

exports.exceptions = function (test) {

    test.throws(function (){
        new Hand([]);
    }, 'No cards');

    test.throws(function (){
        new Hand(['As', 'Ad', 'Ks', 'Kd']);
    }, 'Too little cards');

    test.throws(function (){
        new Hand(['As', 'Ad', 'Ks', 'Kd', 'Qs', 'Qd']);
    }, 'Too many cards');

    test.throws(function (){
        new Hand();
    }, 'No argument');

    test.throws(function (){
        new Hand('Hello'); // 5 character string (could be confused with array of 5 elements)
    }, 'Invalid argument');

    test.throws(function (){
        new Card('1s');
    }, 'Invalid rank');

    test.throws(function (){
        new Card('Av');
    }, 'Invalid suit');

    test.throws(function (){
        new Card();
    }, 'No argument');

    test.throws(function (){
        new Hand(['As', 'Ad', 'Ks', 'Kd', 'Kd']);
    }, 'Duplicate cards');

    test.done();
};