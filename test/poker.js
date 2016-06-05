const Poker = require('../lib/Poker.js');

[Poker.RANKING_TRADITIONAL, Poker.RANKING_ACE_TO_FIVE, Poker.RANKING_DEUCE_TO_SEVEN, Poker.RANKING_BADUGI].forEach((ranking) => {

    let poker = new Poker({ranking});

    let cases = require(`./cases/${ranking}.json`);

    // Find best hand for each of the cases
    cases.forEach((c) => {
        c.hand = poker.findBestHand(c.cards);
        if ('ties_with' in c) {
            c.ties_with = poker.findBestHand(c.ties_with);
        }
    });

    exports[`${ranking}-comparisons`] = (test) => {

        cases.forEach(({hand, ties_with}, i) => {

            cases.forEach(({hand: other}, j) => {

                if (i === j) {
                    // No test
                } else if (i < j) {
                    test.ok(+hand < +other, `Hand #${i} is weaker than hand #${j}`);
                } else {
                    test.ok(+hand > +other, `Hand #${i} is stronger than hand #${j}`);
                }
            });

            if (ties_with) {
                test.ok(+hand === +ties_with, `Hand #${i}a is equal to hand #${i}b`);
            }
        });

        test.done();
    };

    exports[`${ranking}-short_names`] = (test) => {

        cases.forEach(({hand, short_name}, i) => {
            test.equal(hand.getShortName(), short_name, `Hand #${i} is a ${short_name}`);
        });

        test.done();
    };

    exports[`${ranking}-long_names`] = (test) => {

        cases.forEach(({hand, long_name}, i) => {
            test.equal(hand.getLongName(), long_name, `Hand #${i} is a ${long_name}`);
        });

        test.done();
    };

});