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

        this.rank = string_value[0];
        this.suit = string_value[1];

        if (this.rank !== Poker_Card.DEUCE &&
            this.rank !== Poker_Card.THREE &&
            this.rank !== Poker_Card.FOUR &&
            this.rank !== Poker_Card.FIVE &&
            this.rank !== Poker_Card.SIX &&
            this.rank !== Poker_Card.SEVEN &&
            this.rank !== Poker_Card.EIGHT &&
            this.rank !== Poker_Card.NINE &&
            this.rank !== Poker_Card.TEN &&
            this.rank !== Poker_Card.JACK &&
            this.rank !== Poker_Card.QUEEN &&
            this.rank !== Poker_Card.KING &&
            this.rank !== Poker_Card.ACE) {
            throw Error('Invalid rank');
        }

        if (this.suit !== Poker_Card.HEARTS &&
            this.suit !== Poker_Card.SPADES &&
            this.suit !== Poker_Card.DIAMONDS &&
            this.suit !== Poker_Card.CLUBS) {
            throw Error('Invalid suit');
        }

        this.value = valuator.getCardValue(this);
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
            case Poker_Card.DEUCE:
                return 'Deuces';
            case Poker_Card.THREE:
                return 'Three';
            case Poker_Card.FOUR:
                return 'Four';
            case Poker_Card.FIVE:
                return 'Five';
            case Poker_Card.SIX:
                return 'Six';
            case Poker_Card.SEVEN:
                return 'Seven';
            case Poker_Card.EIGHT:
                return 'Eight';
            case Poker_Card.NINE:
                return 'Nine';
            case Poker_Card.TEN:
                return 'Ten';
            case Poker_Card.JACK:
                return 'Jack';
            case Poker_Card.QUEEN:
                return 'Queen';
            case Poker_Card.KING:
                return 'King';
            case Poker_Card.ACE:
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
            case Poker_Card.HEARTS:
                return 'Hearts';
            case Poker_Card.SPADES:
                return 'Spades';
            case Poker_Card.DIAMONDS:
                return 'Diamonds';
            case Poker_Card.CLUBS:
                return 'Clubs';
            default:
                throw new Error('Invalid card');
        }
    }
}

// Ranks
Poker_Card.DEUCE = '2';
Poker_Card.THREE = '3';
Poker_Card.FOUR = '4';
Poker_Card.FIVE = '5';
Poker_Card.SIX = '6';
Poker_Card.SEVEN = '7';
Poker_Card.EIGHT = '8';
Poker_Card.NINE = '9';
Poker_Card.TEN = 'T';
Poker_Card.JACK = 'J';
Poker_Card.QUEEN = 'Q';
Poker_Card.KING = 'K';
Poker_Card.ACE = 'A';

// Suits
Poker_Card.HEARTS = 'h';
Poker_Card.SPADES = 's';
Poker_Card.DIAMONDS = 'd';
Poker_Card.CLUBS = 'c';

module.exports = Poker_Card;