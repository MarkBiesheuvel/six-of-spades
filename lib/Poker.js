const Hand = require('./Poker/Hand.js');

class Poker {

    constructor(options = {ranking: Poker.RANKING_TRADITIONAL}) {

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
    }

    convertHand(cards) {
        return new Hand(cards, this.ranker);
    }

    findBestHand(cards) {

        let n = cards.length;

        if (n < 5) {
            throw Error('Hand must contain 5 or more cards');
        }

        let best = {
            hand: null,
            value: 0
        };

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    for (let l = k + 1; l < n; l++) {
                        for (let m = l + 1; m < n; m++) {

                            let hand = this.convertHand([
                                cards[i],
                                cards[j],
                                cards[k],
                                cards[l],
                                cards[m]
                            ]);
                            let value = +hand;

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
    }

}

Poker.RANKING_TRADITIONAL = 'traditional';
Poker.RANKING_ACE_TO_FIVE = 'ace_to_five';
Poker.RANKING_DEUCE_TO_SEVEN = 'deuce_to_seven';
Poker.RANKING_BADUGI = 'badugi';

module.exports = Poker;