(async() => {

    const Poker_Player = require('./lib/Poker/Player');

    let players = [];

    players.push(new Poker_Player('Player 1'));
    players.push(new Poker_Player('Player 2'));
    players.push(new Poker_Player('Player 3'));
    players.push(new Poker_Player('Player 4'));
    players.push(new Poker_Player('Player 5'));

    let state = {};
    let actions = ['call', 'fold', 'raise'];

    for (let i = 0; i < players.length; i++) {

        const action = await players[i].act(state, actions);
        process.stdout.write(`${players[i]} did ${action}\n\n`);
    }

    process.stdout.write(`Everyone is done\n`);

})();