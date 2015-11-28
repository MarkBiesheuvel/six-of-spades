var Poker = require('../lib/Poker.js');

[Poker.RANKING_TRADITIONAL].forEach(function (ranking) {

    var poker = new Poker({
        ranking: ranking
    });

    var cases = require('./cases/' + ranking + '.json');

    // Find best hand for each of the cases
    for (var i = 0; i < cases.length; i++) {
        cases[i].hand = poker.findBestHand(cases[i].cards);
        if ('ties_with' in cases[i]) {
            cases[i].ties_with = poker.findBestHand(cases[i].ties_with);
        }
    }

    exports[ranking + '-comparisons'] = function (test) {

        for (var i = 0; i < cases.length; i++) {
            for (var j = 0; j < cases.length; j++) {

                if (i === j) {
                    continue;
                }

                if (i < j) {
                    test.ok(+cases[i].hand < +cases[j].hand, 'Hand #' + i + ' is weaker than hand #' + j);
                } else {
                    test.ok(+cases[i].hand > +cases[j].hand, 'Hand #' + i + ' is stronger than hand #' + j);
                }
            }

            if ('ties_with' in cases[i]) {
                test.ok(+cases[i].hand === +cases[i].ties_with, 'Hand #' + i + 'a is equal to hand #' + i + 'b');
            }
        }

        test.done();
    };

    exports[ranking + '-short_names'] = function (test) {

        for (var i = 0; i < cases.length; i++) {
            test.equal(cases[i].hand.getShortName(), cases[i].short_name, 'Hand #' + i + ' is a ' + cases[i].short_name);
        }

        test.done();
    };

    exports[ranking + '-long_names'] = function (test) {

        for (var i = 0; i < cases.length; i++) {
            test.equal(cases[i].hand.getLongName(), cases[i].long_name, 'Hand #' + i + ' is a ' + cases[i].long_name);
        }

        test.done();
    };

});