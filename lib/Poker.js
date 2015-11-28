var Hand = require('./Poker/Hand');

var Poker = function (options) {

    options = options || {};

    switch (options.ranking) {
        default:
            /* falls through */
        case Poker.RANKING_TRADITIONAL:
            this.ranker = new (require('./Poker/Ranking/Traditional'))();
            break;
        case Poker.RANKING_ACE_TO_FIVE:
            this.ranker = new (require('./Poker/Ranking/AceToFive'))();
            break;
        case Poker.RANKING_DEUCE_TO_SEVEN:
            this.ranker = new (require('./Poker/Ranking/DeuceToSeven'))();
            break;
        case Poker.RANKING_BADUGI:
            this.ranker = new (require('./Poker/Ranking/Badugi'))();
            break;
    }
};

Poker.RANKING_TRADITIONAL = 'traditional';
Poker.RANKING_ACE_TO_FIVE = 'ace-to-five';
Poker.RANKING_DEUCE_TO_SEVEN = 'deuce-to-seven';
Poker.RANKING_BADUGI = 'badugi';

Poker.prototype.convertHand = function(cards) {
    return new Hand(cards, this.ranker);
};

Poker.prototype.findBestHand = function (cards) {

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

                        hand = this.convertHand([
                            cards[i],
                            cards[j],
                            cards[k],
                            cards[l],
                            cards[m]
                        ]);
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

module.exports = Poker;