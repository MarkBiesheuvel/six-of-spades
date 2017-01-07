const Poker_Player = require('../Player');

/**
 * Player who always folds
 *
 * @extends Poker_Player
 */
class Poker_Player_Nit extends Poker_Player {

    /**
     *
     * @returns {string} Action to take
     */
    act() {
        return 'fold';
    }
}

module.exports = Poker_Player_Nit;