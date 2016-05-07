const LexographicalNumber = require('../lib/Lexicographic/Numbers.js');

exports.powersOfSixteen = (test) => {

    const f = LexographicalNumber(10, 3); // 10 doesn't fit in 3 bits (0-7), so we need 4 bits (0-15)

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

exports.edgeCases = (test) => {

    const f = LexographicalNumber(0, 0);
    const g = LexographicalNumber(1, 1);
    const h = LexographicalNumber(1, 3);

    test.equal(f(), 0);
    test.equal(g(0), 0);
    test.equal(h(1, 0, 1), 5);

    test.done();
};

exports.exceptions = (test) => {

    const f = LexographicalNumber(7, 2);

    test.throws(() => f(8, 4), 'Elements should not be greater than 7');
    test.throws(() => f(1, 0, 1), 'Array should contain at most 2 elements');
    test.throws(() => f(-1, 2), 'Elements should be positive');
    test.throws(() => LexographicalNumber(1, 64), 'These settings exceed the maximum size of a 32-bit integer');
    test.throws(() => LexographicalNumber(7, 11), 'These settings exceed the maximum size of a 32-bit integer');

    test.done();
};

exports.comparisons = (test) => {

    const f = LexographicalNumber(7, 4);

    let cases = [
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

    for (let i = 0; i < cases.length; i++) {
        for (let j = (i + 1); j < cases.length; j++) {
            test.ok(f(...cases[i]) < f(...cases[j]), `Case #${i} is smaller than case #${j}`);
        }
    }

    test.done();
};
