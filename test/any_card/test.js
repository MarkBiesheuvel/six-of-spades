var Util = require('../../lib/Util.js');

var cases = require('./cases.json');

// Find best hand
for (var i = 0; i < cases.length; i++) {
    cases[i].hand = Util.findBestHand(cases[i].cards);
}

// Add test cases for hand comparison and hand short/long name
require('../../lib/Test/Cases.js')(exports, cases);

