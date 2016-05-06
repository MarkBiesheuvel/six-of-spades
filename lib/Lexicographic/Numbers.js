/*
 * TODO: document which abstract problem this solves (comparing arrays)
 */
module.exports = (max_value_element, max_array_length) => {

    // Inverse of:
    //   max_value_element = 2 ^ bits_per_element - 1
    const bits_per_element = Math.ceil(Math.log(max_value_element + 1) / Math.LN2);

    if (max_array_length * bits_per_element > 32) {
        throw Error('These settings exceed the maximum size of a 32-bit integer');
    }

    const starting_bit_shift = (max_array_length - 1) * bits_per_element;

    return (...args) => {

        if (args.length > max_array_length) {
            throw Error('Array should contain at most ' + max_array_length + ' elements');
        }

        let bit_shift = starting_bit_shift;

        return args.reduce((accumulator, element) => {

            if (element < 0) {
                throw Error('Elements should be positive');
            }

            if (element > max_value_element) {
                throw Error('Elements should not be greater than ' + max_value_element);
            }

            accumulator |= (element << bit_shift);
            bit_shift -= bits_per_element;

            return accumulator;
        }, 0);
    };
};
