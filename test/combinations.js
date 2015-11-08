var Util = require('../lib/Util.js');

exports.comparisons = function (test) {

    var bestHand = Util.findBestHand(["6s", "6h", "5d", "5h", "Ks", "Kc", "6d"]);

    test.equal(bestHand.getLongName(), "Full house, Sixes over Kings", 'Find the best Full House');
    test.done();
};