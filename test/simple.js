var Hand = require('../lib/Hand.js');

var hands = [
['4c', '5d', 'Td', '4s', 'Ah'], // One pair 4s, ace, ten, 5 kicker
['2c', '4d', '3c', '5s', 'Ad'], // Straight, five high
['Jd', 'Tc', '7c', '8s', '9c'], // Straight, jack high
['4h', '3h', '9h', 'Jh', '6h'], // Flush jack, nine, six, four, three
['9d', '4d', '8d', '3d', 'Jd'], // Flush jack, nine, eight, four, three
['Ac', 'Tc', '4c', 'Kc', '9c'], // Flush ace, king, ten, nine, four
['9s', '4s', 'Ts', 'As', 'Ks'], // Flush ace, king, ten, nine, four (different suit)
['4d', '4h', 'Ad', '4s', 'As'], // Full fouse, fours over aces
['5s', '5d', '5c', 'Js', 'Jh'], // Full fouse, fives over jacks
['4d', 'Ah', 'Ad', '4s', 'As'], // Full fouse, aces over fours
['4d', '4h', '4c', '4s', '2d'], // Four of a kind, fours (deuce kicker)
['4d', '4h', '4c', '4s', 'Ac'], // Four of a kind, fours (ace kicker)
['4h', '5h', '6h', '7h', '8h'], // Straight flush, eight high
];

// Convert to Hand objects
hands = hands.map(function(hand){
    return new Hand(hand);
});

exports.comparisons = function (test) {

    for (var i = 0; i < hands.length; i++) {
        for (var j = 0; j < hands.length; j++) {

            if (i === j) {
                continue;
            }

            if (i < j) {
                test.ok(+hands[i] <= +hands[j], 'Hand #' + i + ' (' + hands[i].getHandText() + ') is weaker than hand #' + j + ' (' + hands[j].getHandText() + ')');
            } else {
                test.ok(+hands[i] >= +hands[j], 'Hand #' + i + ' (' + hands[i].getHandText() + ') is stronger than hand #' + j + ' (' + hands[j].getHandText() + ')');
            }
        }
    }

    test.done();
};