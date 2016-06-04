class CombinationIterator {

    // k choose n
    constructor(list, k) {

        if (list.length < k) {
            throw Error('k should be smaller or equal to the length of the list');
        }

        if (k < 0) {
            throw Error('k should be larger than 0');
        }

        this.list = list;
        this.k = k;
    }

    pick(indexes) {

        const k = this.k;

        let result = new Array(k);

        for (let i = 0; i < k; i++) {
            result[i] = this.list[indexes[i]];
        }

        return result;
    }

    increment(indexes) {

        const k = this.k;
        const n = this.list.length;

        for (let i = 1; i <= k; i++) {

            if (indexes[k - i] < n - i) {

                indexes[k - i]++;

                // Correct remaining indexes
                for (let j = k - i + 1; j < k; j++) {
                    indexes[j] = indexes[j - 1] + 1;
                }

                return true;
            }
        }

        return false;
    }

    *iterator() {

        const k = this.k;

        // Create an array from 0 to k
        let indexes = new Array(k);
        for (let i = 0; i < k; i++) {
            indexes[i] = i;
        }

        // Run generator
        do {
            yield this.pick(indexes);
        } while (this.increment(indexes));
    }

}

CombinationIterator.prototype[Symbol.iterator] = CombinationIterator.prototype.iterator;

module.exports = CombinationIterator;