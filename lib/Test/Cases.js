module.exports = function(exports, cases) {

    exports.comparisons = function (test) {

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

    exports.short_names = function (test) {

        for (var i = 0; i < cases.length; i++) {
            test.equal(cases[i].hand.getShortName(), cases[i].short_name, 'Hand #' + i + ' is a ' + cases[i].short_name);
        }

        test.done();
    };

    exports.long_names = function (test) {

        for (var i = 0; i < cases.length; i++) {
            test.equal(cases[i].hand.getLongName(), cases[i].long_name, 'Hand #' + i + ' is a ' + cases[i].long_name);
        }

        test.done();
    };

};