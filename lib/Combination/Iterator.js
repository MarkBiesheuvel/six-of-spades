class CombinationIterator {

    // k choose n
    constructor(list, k) {

        if (list.length < k) {
            throw Error(`k (${k}) cannot be greater than the length of the input (${list.length})`);
        }

        if (k < 0) {
            throw Error('k cannot be negative');
        }

        this.list = list;
        this.k = k;
    }

    pick(indexes) {

        const k = this.k;

        let result = new Array(k);

        // For every index in the indexes array
        //  pick the element in this.list that is at that index
        for (let i = 0; i < k; i++) {
            result[i] = this.list[indexes[i]];
        }

        return result;
    }

    increment(indexes) {

        const k = this.k;
        const n = this.list.length;

        // Start from back to front
        for (let i = k - 1; 0 <= i; i--) {

            // Check if we can increment this index without it causing
            //  the last index to be out of bound
            if (indexes[i] + (k - i) < n) {

                indexes[i]++;

                // Reset remaining indexes
                for (; i < k - 1; i++) {
                    indexes[i + 1] = indexes[i] + 1;
                }

                // We were able to increment
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