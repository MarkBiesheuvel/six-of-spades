
var Card = require('./lib/Card.js');
var Hand = require('./lib/Hand.js');

var y = [];
y.push(new Card('Th'));
y.push(new Card('4c'));
y.push(new Card('Ad'));
y.push(new Card('Td'));
y.push(new Card('4s'));

var x = new Hand(y);

console.log(x.getHandText());