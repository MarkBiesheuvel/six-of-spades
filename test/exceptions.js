var Hand = require('../lib/Poker/Hand.js');
var Card = require('../lib/Poker/Card.js');

// Test for exceptions
exports.hand = function (test) {

    test.throws(function () {
        new Hand([]);
    }, 'No cards');

    test.throws(function () {
        new Hand(['As', 'Ad', 'Ks', 'Kd']);
    }, 'Too little cards');

    test.throws(function () {
        new Hand(['As', 'Ad', 'Ks', 'Kd', 'Qs', 'Qd']);
    }, 'Too many cards');

    test.throws(function () {
        new Hand();
    }, 'No argument');

    test.throws(function () {
        new Hand('Hello'); // 5 character string (could be confused with array of 5 elements)
    }, 'Invalid argument');

    test.throws(function (){
        new Hand(['As', 'Ad', 'Ks', 'Kd', 'Kd']);
    }, 'Duplicate cards');

    test.done();
};

exports.card = function (test) {

    test.throws(function (){
        new Card('1s');
    }, 'Invalid rank');

    test.throws(function (){
        new Card('Av');
    }, 'Invalid suit');

    test.throws(function (){
        new Card();
    }, 'No argument');

    test.done();
};