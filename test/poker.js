const Poker = require('../lib/Poker.js');
const fs = require('fs');

[Poker.RANKING_TRADITIONAL, Poker.RANKING_ACE_TO_FIVE, Poker.RANKING_DEUCE_TO_SEVEN, Poker.RANKING_BADUGI].forEach((ranking) => {

    exports[ranking] = (test) => {

        let poker = new Poker({ranking});

        fs.readFile(`./test/cases/${ranking}.json`, 'utf8', (err, data) => {

            if (err) {
                throw err;
            }

            let cases = JSON.parse(data);

            // Find best hand for each of the cases
            cases.forEach((c) => {
                c.hand = poker.findBestHand(c.cards);
                if ('tiesWith' in c) {
                    c.tiesWith = poker.findBestHand(c.tiesWith);
                }
            });

            // Test short names
            cases.forEach(({hand, shortName}, i) => {
                test.equal(hand.getShortName(), shortName, `Hand #${i} is a ${shortName}`);
            });

            // Test long names
            cases.forEach(({hand, longName}, i) => {
                test.equal(hand.getLongName(), longName, `Hand #${i} is a ${longName}`);
            });

            // Test comparisons
            cases.forEach(({hand, tiesWith}, i) => {

                cases.forEach(({hand: other}, j) => {

                    if (i === j) {
                        // No test
                    } else if (i < j) {
                        test.ok(hand.valueOf() < other.valueOf(), `Hand #${i} is weaker than hand #${j}`);
                    } else {
                        test.ok(hand.valueOf() > other.valueOf(), `Hand #${i} is stronger than hand #${j}`);
                    }
                });

                if (tiesWith) {
                    test.ok(hand.valueOf() === tiesWith.valueOf(), `Hand #${i}a is equal to hand #${i}b`);
                }
            });

            test.done();
        });
    };
});