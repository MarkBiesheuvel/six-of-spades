/**
 * An abstract class that describe a value for poker cards
 */
class Poker_Valuator {

    /**
     * Function needs to be implemented in extensions
     */
    getCardValue() {
        throw new Error('Unimplemented function');
    }

}

module.exports = Poker_Valuator;