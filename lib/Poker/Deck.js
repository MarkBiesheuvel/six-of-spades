const Poker_Card = require('./Card');
const Poker_Card_Rank = require('./Card/Rank');
const Poker_Card_Suit = require('./Card/Suit');

/**
 * A deck of 52 cards
 */
class Poker_Deck {

    /**
     *
     */
    constructor() {

        let cards = [];

        for (let rank of Poker_Card_Rank.ranks) {
            for (let suit of Poker_Card_Suit.suits) {
                cards.push(new Poker_Card(rank + suit));
            }
        }

        this.length = 52;
        this.cards = cards;
    }

    /**
     *
     * @returns {Poker_Card} A random poker card from this deck (that hasn't been drawn from this deck before)
     */
    drawOne() {

        if (this.length === 0) {
            throw new Error('Empty deck');
        }

        // Pick a random card to return
        let random = Math.floor(Math.random() * this.length);
        let result = this.cards[random];

        // Swap out the last card with the one we are going to return
        this.cards[random] = this.cards[this.length - 1];

        // Move the closer
        this.cards[this.length - 1] = null;
        this.length--;

        return result;
    }

}

module.exports = Poker_Deck;