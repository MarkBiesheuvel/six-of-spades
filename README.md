# 6♠ - Six of spades  [![Build Status](https://travis-ci.org/MarkBiesheuvel/six-of-spades.svg?branch=master)](https://travis-ci.org/MarkBiesheuvel/six-of-spades)

A fully configurable poker game engine

## Purpose

The purpose of this library is to able to handle all logic behind running a poker game.

It is flexible in terms of ranking system, betting structure and table size.

This library is not optimized for speed.
If you're looking for a fast algorithm to evaluate hand values I would recommend [The Two Plus Two Poker Hand Rank Evaluator](https://github.com/chenosaurus/poker-evaluator).

## Code examples

What would a library be without some code examples.

### Finding best hand out of list of cards

With variants like Hold'Em or Stud it is usefull to find the best hand combination out of a list of cards.

    const Poker = require("six-of-spades");

    let poker = new Poker();

    let hand = poker.findBestHand(["5c", "Td", "4c", "6c", "Js", "7c", "9h", "Qs", "8c", "3c", "2d"]);

    console.log(hand.getShortName());
    //=> "Straight flush"

    console.log(hand.getLongName());
    //=> "Straight flush, Eight high"

### Different ranking systems

Here is an example using Ace-to-five low instead of the traditional ranking.
Allowed values are `Poker.RANKING_TRADITIONAL`, `Poker.RANKING_ACE_TO_FIVE`, and `Poker.RANKING_DEUCE_TO_SEVEN`.

    const Poker = require("six-of-spades");

    let poker = new Poker({
        ranking: Poker.RANKING_ACE_TO_FIVE
    });

    let hand = poker.convertHand(["6c", "2d", "3h", "4s", "5d"]);

    console.log(hand.getShortName());
    //=> "Six low"

    console.log(hand.getLongName());
    //=> "6,5,4,3,2"

