/**
 * TODO: document which abstract problem this solves (comparing arrays)
 *
 * @param {Number} maxValue Highest number to expect from input
 * @param {Number} numberOfArguments Most number of arguments to expect
 * @returns {function()} A function that takes numberOfArguments arguments and returns a number
 * @constructor
 */
const Lexicographic_Numbers = (maxValue, numberOfArguments) => {

    const bitsPerElement = Math.ceil(Math.log(maxValue + 1) / Math.LN2);

    if (numberOfArguments * bitsPerElement > 32) {
        throw new Error('These settings exceed the maximum size of a 32-bit integer');
    }

    const startingBitShift = (numberOfArguments - 1) * bitsPerElement;

    /**
     * @returns {Number} Number representing the lexicographic value of the arguments
     */
    return (...args) => {

        if (args.length > numberOfArguments) {
            throw new Error(`Array should contain at most ${numberOfArguments} elements`);
        }

        let bitShift = startingBitShift;

        return args.reduce((accumulator, element) => {

            if (element < 0) {
                throw new Error('Elements should be positive');
            }

            if (element > maxValue) {
                throw new Error(`Elements should not be greater than ${maxValue}`);
            }

            accumulator |= (element << bitShift);
            bitShift -= bitsPerElement;

            return accumulator;
        }, 0);
    };
};

module.exports = Lexicographic_Numbers;
