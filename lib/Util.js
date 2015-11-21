var Hand = require('./Hand');

var Util = {};

Util.findBestHand = function (cards, ranker) {

    var n = cards.length;

    if (n < 5) {
        throw Error('Hand must contain 5 or more cards');
    }

    var i, j, k, l, m, hand, value;
    var best = {
        hand: null,
        value: 0
    };

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            for (k = j + 1; k < n; k++) {
                for (l = k + 1; l < n; l++) {
                    for (m = l + 1; m < n; m++) {

                        hand = new Hand([
                            cards[i],
                            cards[j],
                            cards[k],
                            cards[l],
                            cards[m]
                        ], ranker);
                        value = +hand;

                        if (value > best.value) {
                            best.hand = hand;
                            best.value = value;
                        }
                    }
                }
            }
        }
    }

    return best.hand;
};

module.exports = Util;