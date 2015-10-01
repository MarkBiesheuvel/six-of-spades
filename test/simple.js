var Hand = require('../lib/Hand.js');

var hands = [
    ['2d', '3s', '4c', '5c', '7d'], // High card, seven
    ['4c', '5d', 'Td', '4s', 'Ah'], // One pair fours, ace, ten, five kicker
    ['6s', '6h', '5d', '5h', 'Ks'], // Two pair, sixes and fives, king kicker
    ['6s', '6h', '5d', '5h', 'As'], // Two pair, sixes and fives, ace kicker
    ['7s', '7h', '2d', '2h', '3s'], // Two pair, sevens and deuces, three kicker
    ['7s', '2h', '2d', '7h', '3s'], // Two pair, sevens and deuces, three kicker (different order)
    ['7s', '7h', '2d', '3h', '3s'], // Two pair, sevens and threes, deuce kicker
    ['7s', '7h', '2d', '7h', '3s'], // Three of a kind sevens, three, deuce kicker
    ['2c', '4d', '3c', '5s', 'Ad'], // Straight, five high
    ['Jd', 'Tc', '7c', '8s', '9c'], // Straight, jack high
    ['4h', '3h', '9h', 'Jh', '6h'], // Flush jack, nine, six, four, three
    ['9d', '4d', '8d', '3d', 'Jd'], // Flush jack, nine, eight, four, three
    ['Ac', 'Tc', '4c', 'Kc', '9c'], // Flush ace, king, ten, nine, four
    ['9s', '4s', 'Ts', 'As', 'Ks'], // Flush ace, king, ten, nine, four (different suit)
    ['4d', '4h', 'Ad', '4s', 'As'], // Full house, fours over aces
    ['5s', '5d', '5c', 'Js', 'Jh'], // Full house, fives over jacks
    ['4d', 'Ah', 'Ad', '4s', 'As'], // Full house, aces over fours
    ['4d', '4h', '4c', '4s', '2d'], // Four of a kind, fours (deuce kicker)
    ['4d', '4h', '4c', '4s', 'Ac'], // Four of a kind, fours (ace kicker)
    ['Ad', 'Ah', 'As', 'Ks', 'Ac'], // Four of a kind, aces (king kicker)
    ['Ad', '2d', '3d', '4d', '5d'], // Straight flush, five high
    ['4h', '5h', '6h', '7h', '8h'], // Straight flush, eight high
    ['As', 'Ks', 'Qs', 'Js', 'Ts'], // Straight flush, ace high (royal flush)
];

// Convert to Hand objects
hands = hands.map(function (hand) {
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