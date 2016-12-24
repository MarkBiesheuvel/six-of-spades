const Poker_Deck = require('./Deck');

/**
 * A poker table
 */
class Poker_Table {

    /**
     *
     * @param {Poker_Ranking} ranking Ranking system
     * @param {Number} size Maximum number of players that can be seated at this table
     */
    constructor(ranking, size = 9) {
        this.ranking = ranking;
        this.size = size;
        this.players = Array(size).fill(null);
        this.dealerButton = null;

        this.reset();
    }

    /**
     * Remove community cards, hole cards and create fresh deck
     */
    reset() {
        this.deck = new Poker_Deck();
        this.holeCards = Array(this.size).fill(null);
        this.communityCards = [];
    }

    /**
     *
     * @param {Number} position The seat the player is going to sit on
     * @param {Poker_Player} player The poker player that is joining the table
     * @returns {boolean} Whether the player is now sitting at the table
     */
    addPlayer(position, player) {

        // Check to see if the position is in range
        if (position < 0 || this.size <= position) {
            throw Error('Invalid position');
        }

        // Check whether the seat is already taken
        if (this.players[position] !== null) {
            return false;
        }

        this.players[position] = player;

        // Give the first player the button
        if (this.dealerButton === null) {
            this.dealerButton = position;
        }

        return true;
    }

    /**
     *
     */
    play() {

        this._goRound(this._getPositionOfNextPlayer());

    }

    /**
     *
     * @param {Number} start The postion at the table to start from
     * @private
     */
    _goRound(start) {
        let i = start;

        do {
            i = this._getPositionOfNextPlayer(i);
        } while (i !== start);
    }

    /**
     *
     * @param {Number} start The position at the table to start from
     * @param {boolean} needsToHaveHoleCards Whether we are looking for a player with hole cards
     * @returns {Number} The position of the next player
     * @private
     */
    _getPositionOfNextPlayer(start = this.dealerButton, needsToHaveHoleCards = false) {
        let i = (start + 1) % this.size;
        while (i !== start) {

            let hasPlayerInSeat = this.players[i] !== null;
            let hasHoleCards = this.holeCards[i] !== null;

            if (needsToHaveHoleCards) {
                if (hasPlayerInSeat && hasHoleCards) {
                    break;
                }
            } else {
                if (hasPlayerInSeat) {
                    break;
                }
            }

            i = (i + 1) % this.size;
        }

        // No other players
        if (i === start) {
            return null;
        }

        return i;
    }
}

module.exports = Poker_Table;