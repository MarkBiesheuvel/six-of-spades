var Hand = require('../../lib/Hand.js');
var TraditionalRanking = require('../../lib/Ranking/Traditional.js');

var cases = require('./cases.json');

var ranker = new TraditionalRanking();

// Convert to Hand objects
for (var i = 0; i < cases.length; i++) {
    cases[i].hand = new Hand(cases[i].cards, ranker);
    if ('ties_with' in cases[i]) {
        cases[i].ties_with = new Hand(cases[i].ties_with, ranker);
    }
}

// Add test cases for hand comparison and hand short/long name
require('../../lib/Test/Cases.js')(exports, cases);