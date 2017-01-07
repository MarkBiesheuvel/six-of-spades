process.stdin.setEncoding('utf8');

/**
 * A poker player
 */
class Poker_Player {

    /**
     *
     * @param {String} name Name of player
     */
    constructor(name) {
        this.name = name;
    }

    /**
     *
     */
    act() {
        throw new Error('Not implemented');
    }

    /**
     *
     * @returns {String} Name of player
     */
    toString() {
        return this.name;
    }

}

module.exports = Poker_Player;