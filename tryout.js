(function () {

    const Poker_Player = require('./lib/Poker/Player');

    let players = [];

    players.push(new Poker_Player('Player 1'));
    players.push(new Poker_Player('Player 2'));
    players.push(new Poker_Player('Player 3'));
    players.push(new Poker_Player('Player 4'));
    players.push(new Poker_Player('Player 5'));

    let state = {};
    let actions = ['call', 'fold', 'raise'];


    let go = (i) => {

        if (i >= players.length) {
            process.stdout.write(`Everyone is done\n`);
            return;
        }

        players[i].act(state, actions)
        .then((action) => {

            process.stdout.write(`${players[i]} did ${action}\n\n`);

            go(i + 1);

        }, () => {

            // TODO: default action?
            process.stdout.write(`${players[i]} failed to act\n`);

            go(i + 1);

        });
    };

    go(0);

})();