const Hand = require('./Poker/Hand');
const CombinationIterator = require('./Combination/Iterator');

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

        for (let combination of new CombinationIterator(cards, 5)) {

            let hand = this.convertHand(combination);
            let value = +hand;

            if (value > best.value) {
                best = {
                    hand,
                    value
                };
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