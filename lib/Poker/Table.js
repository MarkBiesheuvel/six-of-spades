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
            players: players.map((player, index) => {
                if (index === perspective) {
                    return {
                        name: player.player.toString(),
                        chips: player.chips,
                        bet: player.bet,
                        cards: player.cards.map((card) => card.toString())
                    };
                } else {
                    return {
                        name: player.player.toString(),
                        chips: player.chips,
                        bet: player.bet
                    };
                }
            })
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

        // Determine which seats are filled with players and give them cards
        const players = this.seats
            .map((player, seat) => {
                if (player === null) {
                    return null;
                }
                return {
                    seat: seat,
                    player: player,
                    chips: 1000,
                    bet: 0,
                    cards: [this.deck.drawOne(), this.deck.drawOne()]
                };
            })
            .filter((a) => (a !== null));

        if (players.length < 2) {
            return;
        }

        let pot = 0;

        // Small blind
        pot += 25;
        players[0].chips -= 25;
        players[0].bet += 25;

        // Big blind
        pot += 50;
        players[1].chips -= 50;
        players[1].bet += 50;

        players.forEach((player, index) => {
            this.getState(players, index, pot, communityCards);
        });
    }
}

module.exports = Poker_Table;