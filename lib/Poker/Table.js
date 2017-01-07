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
        this.seats = Array(size).fill(null);
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
        if (this.seats[position] !== null) {
            return false;
        }

        this.seats[position] = player;
        player.seat = position;

        return true;
    }

    /**
     *
     * @param {Number} position The seat the player is leaving
     */
    removePlayer(position) {
        // Check to see if the position is in range
        if (position < 0 || this.size <= position) {
            throw Error('Invalid position');
        }

        // Update player
        if (this.seats[position] !== null) {
            this.seats[position].seat = null;
        }

        this.seats[position] = null;
    }

    /**
     *
     * @param {Array} players Players who are still in action
     * @param {Number} perspective Index of player from whom we see the perspective
     * @param {Number} pot Amount of chips in the pot
     * @param {Array} communityCards Cards that are shared amongst everyone
     */
    getState(players, perspective, pot, communityCards) {

        const state = {
            pot: pot,
            communityCards: communityCards.map((card) => card.toString()),
            players: players.map((player, index) => player.getState(index === perspective))
        };

        process.stdout.write(JSON.stringify(state));
        process.stdout.write('\n');
    }

    /**
     *
     */
    play() {

        // Get a new deck of cards
        this.deck = new Poker_Deck();

        // Remove community cards
        let communityCards = [];

        // Determine which seats are filled with players
        const players = this.seats.filter((player) => (player !== null));

        // Cannot play the game with less than two players
        if (players.length < 2) {
            return;
        }

        // Empty pot
        let pot = 0;

        // Small blind
        pot += players[0].placeBet(25);

        // Big blind
        pot += players[1].placeBet(50);

        // Give each player their hole cards
        players.forEach((player) => {
            player.cards = [this.deck.drawOne(), this.deck.drawOne()];
        });

        // First betting round?
        players.forEach((player, index) => {
            this.getState(players, index, pot, communityCards);
        });
    }
}

module.exports = Poker_Table;