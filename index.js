
var Card = require('./lib/Card.js');
var Hand = require('./lib/Hand.js');

var y = [];
y.push(new Card('As'));
y.push(new Card('Ks'));
y.push(new Card('Qs'));
y.push(new Card('Js'));
y.push(new Card('Ts'));

var x = new Hand(y);

console.log(x.isStraightFlush());
console.log(x.isStraight());
console.log(x.isFlush());
console.log(x);