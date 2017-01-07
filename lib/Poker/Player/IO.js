const Poker_Player = require('../Player');


/**
 * Controls players action from stdin/stdout
 *
 * @extends Poker_Player
 */
class Poker_Player_IO extends Poker_Player {

    /**
     *
     * @param {Object} state The current situation
     * @param {Array} actions List of action that are possible
     * @returns {Promise} A promise resolving to one of the actions
     */
    act(state, actions) {
        return new Promise((resolve) => {

            process.stdout.write(`${this}, it is your turn to act\n`);
            process.stdout.write('You can either:\n');
            actions.forEach((action) => {
                process.stdout.write(`- ${action}\n`);
            });

            process.stdin.resume();

            let handler = (input) => {
                input = input.trim();
                if (actions.indexOf(input) !== -1) {
                    resolve(input);
                    process.stdin.removeListener('data', handler);
                    process.stdin.pause();
                }
            };

            process.stdin.on('data', handler);
        });
    }
}

module.exports = Poker_Player_IO;