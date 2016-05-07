const Card = require('./Card.js');

const descending = (a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
};

class Hand {

    constructor(cards, ranker) {

        if (cards.length !== ranker.numberOfCardsInHand) {
            throw Error(`Hand must contain exactly ${ranker.numberOfCardsInHand} cards`);
        }

        // Convert to Card objects if that hasn't been done
        cards = cards.map((card) => {
            if (typeof card === 'string') {
                return new Card(card, ranker);
            } else {
                return card;
            }
        });

        // Check for duplicates
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < cards.length; j++) {

                if (i === j) {
                    continue;
                }

                if (cards[i].rank === cards[j].rank && cards[i].suit === cards[j].suit) {
                    throw Error(`Duplicate cards: ${cards[i].toString()}`);
                }

            }
        }

        this.cards = cards;
        this.strength = ranker.getStrength(this);
    }

    sort() {
        // Order cards from high to low
        this.cards = this.cards.sort(descending);
    }


    getGroupedCards() {

        const cards = this.cards;

        // Create a temporary object in which card witht he same rank are put into the same array
        let tmp = {};
        for (let i = 0; i < 5; i++) {
            let card = cards[i];
            if (!(card.rank in tmp)) {
                tmp[card.rank] = [];
            }

            tmp[card.rank].push(card);
        }

        // Now transform this object of arrays into and array of objects
        let grouped = [];
        for (let rank in tmp) {
            grouped.push({
                rank: rank,
                cards: tmp[rank]
            });
        }

        // Sort the groups of cards based on a big the group is; larger groups to lower groups
        // If groups are even large, sort on the rank of the cards;higher cards to lower cards
        grouped.sort((a, b) => {
            let comp = descending(a.cards.length, b.cards.length);
            if (comp !== 0) {
                return comp;
            } else {
                return descending(+a.cards[0], +b.cards[0]);
            }
        });

        return grouped;
    }

    isFlush() {

        let cards = this.cards;

        return cards[0].suit == cards[1].suit &&
            cards[1].suit == cards[2].suit &&
            cards[2].suit == cards[3].suit &&
            cards[3].suit == cards[4].suit;
    }

    isStraight() {

        let cards = this.cards;

        return +cards[0] == (1 + cards[1]) &&
            +cards[1] == (1 + cards[2]) &&
            +cards[2] == (1 + cards[3]) &&
            +cards[3] == (1 + cards[4]);
    }

    getShortName() {
        return this.strength.getShortName();
    }

    getLongName() {
        return this.strength.getLongName();
    }

    valueOf() {
        return this.strength.valueOf();
    }
}

module.exports = Hand;



