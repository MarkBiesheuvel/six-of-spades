// require('nodeunit').reporters.default.run(['test']);

const Poker_Ranking_Traditional = require('./lib/Poker/Ranking/Traditional');
const Poker_Table = require('./lib/Poker/Table');
const Poker_Player_IO = require('./lib/Poker/Player/IO');
const Poker_Player_CallingStation = require('./lib/Poker/Player/CallingStation');
const Poker_Player_Nit = require('./lib/Poker/Player/Nit');

const ranking = new Poker_Ranking_Traditional();
const table = new Poker_Table(ranking, 4);

const me = new Poker_Player_IO('Mark');
const cs = new Poker_Player_CallingStation('Player 1');
const nt = new Poker_Player_Nit('Player 2');

table.addPlayer(0, me);
table.addPlayer(2, cs);
table.addPlayer(3, nt);

table.play();