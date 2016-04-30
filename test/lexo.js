var LexographicalNumber = require('../lib/Lexicographic/Numbers.js');

exports.powersOfSixteen = function (test) {

    var f = LexographicalNumber(10, 3); // 10 doesn't fit in 3 bits (0-7), so we need 4 bits (0-15)

    test.equal(f(), /*        */ 0);
    test.equal(f(0), /*       */ 0);
    test.equal(f(0, 0), /*    */ 0);
    test.equal(f(0, 0, 0), /* */ 0);
    test.equal(f(0, 0, 1), /* */ 1);
    test.equal(f(0, 1, 0), /* */ 16);
    test.equal(f(1, 0, 0), /* */ 256);
    test.equal(f(1, 0), /*    */ 256);
    test.equal(f(1), /*       */ 256);

    test.done();
};

exports.edgeCases = function (test) {

    var f = LexographicalNumber(0, 0);
    var g = LexographicalNumber(1, 1);
    var h = LexographicalNumber(1, 3);

    test.equal(f(), 0);
    test.equal(g(0), 0);
    test.equal(h(1, 0, 1), 5);

    test.done();
};

exports.exceptions = function (test) {

    var f = LexographicalNumber(7, 2);

    test.throws(function () {
        f(8, 4);
    }, 'Elements should not be greater than 7');

    test.throws(function () {
        f(1, 0, 1);
    }, 'Array should contain at most 2 elements');

    test.throws(function () {
        f(-1, 2);
    }, 'Elements should be positive');

    test.throws(function () {
        LexographicalNumber(1, 64); // 1 bit * 64 elements = 64 bits
    }, 'These settings exceed the maximum size of a 32-bit integer');

    test.throws(function () {
        LexographicalNumber(7, 11); // 3 bits * 11 elements = 33 bit
    }, 'These settings exceed the maximum size of a 32-bit integer');

    test.done();
};

exports.comparisons = function (test) {

    var f = LexographicalNumber(7, 4);

    var cases = [
        [],
        [0, 0, 1],
        [0, 1],
        [0, 7],
        [0, 7, 7, 7],
        [1],
        [1, 1, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 2, 0],
        [7, 7, 7, 7]
    ];

    for (var i = 0; i < cases.length; i++) {
        for (var j = (i + 1); j < cases.length; j++) {
            test.ok(
                f.apply(null, cases[i]) < f.apply(null, cases[j]),
                'Case #' + i + ' is smaller than case #' + j
            );
        }
    }

    test.done();
};
