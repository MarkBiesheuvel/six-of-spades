/**
 * A poker card
 */
class Card {

    /**
     *
     * @param {string} string_value String representation of card
     * @param {Poker_Ranking} ranker Ranking system
     */
    constructor(string_value, ranker) {

        this.rank = string_value[0];
        this.suit = string_value[1];

        if (this.rank !== Card.DEUCE &&
            this.rank !== Card.THREE &&
            this.rank !== Card.FOUR &&
            this.rank !== Card.FIVE &&
            this.rank !== Card.SIX &&
            this.rank !== Card.SEVEN &&
            this.rank !== Card.EIGHT &&
            this.rank !== Card.NINE &&
            this.rank !== Card.TEN &&
            this.rank !== Card.JACK &&
            this.rank !== Card.QUEEN &&
            this.rank !== Card.KING &&
            this.rank !== Card.ACE) {
            throw Error('Invalid rank');
        }

        if (this.suit !== Card.HEARTS &&
            this.suit !== Card.SPADES &&
            this.suit !== Card.DIAMONDS &&
            this.suit !== Card.CLUBS) {
            throw Error('Invalid suit');
        }

        this.ranker = ranker;
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
        return this.ranker.getCardValue(this);
    }

    /**
     *
     * @returns {string} A string representation of the rank of this poker card
     */
    getRankText() {
        switch (this.rank) {
            case Card.DEUCE:
                return 'Deuces';
            case Card.THREE:
                return 'Three';
            case Card.FOUR:
                return 'Four';
            case Card.FIVE:
                return 'Five';
            case Card.SIX:
                return 'Six';
            case Card.SEVEN:
                return 'Seven';
            case Card.EIGHT:
                return 'Eight';
            case Card.NINE:
                return 'Nine';
            case Card.TEN:
                return 'Ten';
            case Card.JACK:
                return 'Jack';
            case Card.QUEEN:
                return 'Queen';
            case Card.KING:
                return 'King';
            case Card.ACE:
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
            case Card.HEARTS:
                return 'Hearts';
            case Card.SPADES:
                return 'Spades';
            case Card.DIAMONDS:
                return 'Diamonds';
            case Card.CLUBS:
                return 'Clubs';
            default:
                throw new Error('Invalid card');
        }
    }
}

// Ranks
Card.DEUCE = '2';
Card.THREE = '3';
Card.FOUR = '4';
Card.FIVE = '5';
Card.SIX = '6';
Card.SEVEN = '7';
Card.EIGHT = '8';
Card.NINE = '9';
Card.TEN = 'T';
Card.JACK = 'J';
Card.QUEEN = 'Q';
Card.KING = 'K';
Card.ACE = 'A';

// Suits
Card.HEARTS = 'h';
Card.SPADES = 's';
Card.DIAMONDS = 'd';
Card.CLUBS = 'c';

module.exports = Card;