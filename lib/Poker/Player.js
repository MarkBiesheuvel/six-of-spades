process.stdin.setEncoding('utf8');

/**
 * A poker player
 */
class Poker_Player {

    /**
     *
     * @param {String} name Name of player
     * @param {Number} chips Amount of chips
     */
    constructor(name, chips) {
        this.name = name;
        this.chips = chips;
        this.seat = null;
        this.cards = [];
        this.bet = 0;
    }

    /**
     *
     */
    act() {
        throw new Error('Not implemented');
    }

    /**
     *
     * @param {Number} amount Amount of chips player wants to bet
     * @returns {Number} Amount of chips that are eventually bet
     */
    placeBet(amount) {
        amount = Math.min(amount, this.chips);
        this.chips -= amount;
        this.bet += amount;
        return amount;
    }

    /**
     *
     * @param {boolean} showCard Whether to include cards in state
     * @returns {{name: (String), chips: (Number), bet: (Number)}} An object representing the state of the player
     */
    getState(showCard = false) {
        let state = {
            name: this.name,
            chips: this.chips,
            bet: this.bet,
            seat: this.seat
        };

        if (showCard) {
            state.cards = this.cards.map((card) => card.toString());
        }

        return state;
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