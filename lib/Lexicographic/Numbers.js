/**
 * TODO: document which abstract problem this solves (comparing arrays)
 *
 * @param {int} maxValue Highest number to expect from input
 * @param {int} numberOfArguments Most number of arguments to expect
 * @returns {function()} A function that takes numberOfArguments arguments and returns a number
 * @constructor
 */
const Lexicographic_Numbers = (maxValue, numberOfArguments) => {

    const bitsPerElement = Math.ceil(Math.log(maxValue + 1) / Math.LN2);

    if (numberOfArguments * bitsPerElement > 32) {
        throw Error('These settings exceed the maximum size of a 32-bit integer');
    }

    const startingBitShift = (numberOfArguments - 1) * bitsPerElement;

    /**
     * @returns {int} Number representing the lexicographic value of the arguments
     */
    return (...args) => {

        if (args.length > numberOfArguments) {
            throw Error(`Array should contain at most ${numberOfArguments} elements`);
        }

        let bitShift = startingBitShift;

        return args.reduce((accumulator, element) => {

            if (element < 0) {
                throw Error('Elements should be positive');
            }

            if (element > maxValue) {
                throw Error(`Elements should not be greater than ${maxValue}`);
            }

            accumulator |= (element << bitShift);
            bitShift -= bitsPerElement;

            return accumulator;
        }, 0);
    };
};

module.exports = Lexicographic_Numbers;
