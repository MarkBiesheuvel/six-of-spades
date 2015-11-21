var Util = require('../../lib/Util.js');
var TraditionalRanking = require('../../lib/Ranking/Traditional.js');

var cases = require('./cases.json');

var ranker = new TraditionalRanking();

// Find best hand
for (var i = 0; i < cases.length; i++) {
    cases[i].hand = Util.findBestHand(cases[i].cards, ranker);
}

// Add test cases for hand comparison and hand short/long name
require('../../lib/Test/Cases.js')(exports, cases);

