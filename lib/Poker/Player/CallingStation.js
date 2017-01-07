const Poker_Player = require('../Player');

/**
 * Player who always calls
 *
 * @extends Poker_Player
 */
class Poker_Player_CallingStation extends Poker_Player {

    /**
     *
     * @param {Object} state The current situation
     * @param {Array} actions List of action that are possible
     * @returns {Promise} A promise resolving to one of the actions
     */
    act(state, actions) {
        if (actions.indexOf('check') !== -1) {
            return 'check';
        } else {
            return 'call';
        }
    }
}

module.exports = Poker_Player_CallingStation;