const CombinationIterator = require('../lib/Combination/Iterator.js');

exports.AbcdChoose3 = (test) => {

    let it = new CombinationIterator(['A', 'B', 'C', 'D'], 3);
    var obj = it.iterator();

    test.deepEqual(obj.next().value, ['A', 'B', 'C']);
    test.deepEqual(obj.next().value, ['A', 'B', 'D']);
    test.deepEqual(obj.next().value, ['A', 'C', 'D']);
    test.deepEqual(obj.next().value, ['B', 'C', 'D']);
    test.ok(obj.next().done);

    test.done();
};

exports.chooseFruitSalad = (test) => {

    let it = new CombinationIterator(['Banana', 'Pineapple', 'Strawberry', 'Blueberry', 'Mandarin', 'Orange'], 2);
    var obj = it.iterator();

    test.deepEqual(obj.next().value, ['Banana', 'Pineapple']);
    test.deepEqual(obj.next().value, ['Banana', 'Strawberry']);
    test.deepEqual(obj.next().value, ['Banana', 'Blueberry']);
    test.deepEqual(obj.next().value, ['Banana', 'Mandarin']);
    test.deepEqual(obj.next().value, ['Banana', 'Orange']);
    test.deepEqual(obj.next().value, ['Pineapple', 'Strawberry']);
    test.deepEqual(obj.next().value, ['Pineapple', 'Blueberry']);
    test.deepEqual(obj.next().value, ['Pineapple', 'Mandarin']);
    test.deepEqual(obj.next().value, ['Pineapple', 'Orange']);
    test.deepEqual(obj.next().value, ['Strawberry', 'Blueberry']);
    test.deepEqual(obj.next().value, ['Strawberry', 'Mandarin']);
    test.deepEqual(obj.next().value, ['Strawberry', 'Orange']);
    test.deepEqual(obj.next().value, ['Blueberry', 'Mandarin']);
    test.deepEqual(obj.next().value, ['Blueberry', 'Orange']);
    test.deepEqual(obj.next().value, ['Mandarin', 'Orange']);
    test.ok(obj.next().done);

    test.done();
};

exports.choose0 = (test) => {

    let it = new CombinationIterator([], 0);
    var obj = it.iterator();

    test.deepEqual(obj.next().value, []);
    test.ok(obj.next().done);

    test.done();
};

exports.errors = (test) => {

    test.throws(() => {
        let it = new CombinationIterator([1, 2], -1);
    });

    test.throws(() => {
        let it = new CombinationIterator([], 1);
    });


    test.done();
};