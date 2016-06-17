const Poker_Card_Rank = require('./Card/Rank');
const Poker_Card_Suit = require('./Card/Suit');

/**
 * A poker card
 */
class Poker_Card {

    /**
     *
     * @param {string} string_value String representation of card
     * @param {Poker_Valuator} valuator Valuator for cards
     */
    constructor(string_value, valuator) {

        let rank = string_value[0];
        let suit = string_value[1];

        if (!Poker_Card_Rank.isValid(rank)) {
            throw Error('Invalid rank');
        }

        if (!Poker_Card_Suit.isValid(suit)) {
            throw Error('Invalid suit');
        }

        this.rank = rank;
        this.suit = suit;

        if (valuator) {
            this.value = valuator.getCardValue(this);
        } else {
            this.value = null;
        }
    }

    /**
     *
     * @returns {string} A nice string representation of this poker card
     */
    toString() {
        let rank = this.getRankText();
        let suit = this.getSuitText();
        return `${rank} of ${suit}`;
    }

    /**
     *
     * @returns {Number} The value of this poker card according to the ranking system
     */
    valueOf() {
        return this.value;
    }

    /**
     *
     * @returns {string} A string representation of the rank of this poker card
     */
    getRankText() {
        switch (this.rank) {
            case Poker_Card_Rank.DEUCE:
                return 'Deuces';
            case Poker_Card_Rank.THREE:
                return 'Three';
            case Poker_Card_Rank.FOUR:
                return 'Four';
            case Poker_Card_Rank.FIVE:
                return 'Five';
            case Poker_Card_Rank.SIX:
                return 'Six';
            case Poker_Card_Rank.SEVEN:
                return 'Seven';
            case Poker_Card_Rank.EIGHT:
                return 'Eight';
            case Poker_Card_Rank.NINE:
                return 'Nine';
            case Poker_Card_Rank.TEN:
                return 'Ten';
            case Poker_Card_Rank.JACK:
                return 'Jack';
            case Poker_Card_Rank.QUEEN:
                return 'Queen';
            case Poker_Card_Rank.KING:
                return 'King';
            case Poker_Card_Rank.ACE:
                return 'Ace';
            default:
                throw new Error('Invalid card');
        }
    }

    /**
     *
     * @returns {string} A short string representation of the rank of this poker card
     */
    getRankShortText() {
        // The rank constant matches the short text :)
        return this.rank;
    }

    /**
     *
     * @returns {string} A string representation of the suit of this poker card
     */
    getSuitText() {
        switch (this.suit) {
            case Poker_Card_Suit.HEARTS:
                return 'Hearts';
            case Poker_Card_Suit.SPADES:
                return 'Spades';
            case Poker_Card_Suit.DIAMONDS:
                return 'Diamonds';
            case Poker_Card_Suit.CLUBS:
                return 'Clubs';
            default:
                throw new Error('Invalid card');
        }
    }
}

module.exports = Poker_Card;