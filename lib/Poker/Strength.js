const lexo = require('../Lexicographic/Hand');

/**
 * An abstract class that describe certain strength of a poker hand
 */
class Poker_Strength {

    /**
     *
     * @param {Number} strength Numeric representation of strength
     * @param {Array} values Values of cards in order of importance
     */
    constructor(strength, values) {
        this.value = lexo(strength, ...values);
        this.shortName = '';
        this.longName = '';
    }

    /**
     *
     * @returns {int} Value of strength
     */
    valueOf() {
        return this.value;
    }

    /**
     *
     * @returns {string} Short description of hand strength
     */
    getShortName() {
        return this.shortName;
    }

    /**
     *
     * @returns {string} Long description of hand strength
     */
    getLongName() {
        return this.longName;
    }
}

module.exports = Poker_Strength;