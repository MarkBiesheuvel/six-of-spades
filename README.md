# Poker hand evaluator in JavaScript [![Build Status](https://travis-ci.org/MarkBiesheuvel/poker-hand-evaluator.svg?branch=master)](https://travis-ci.org/MarkBiesheuvel/poker-hand-evaluator)

This poker library can be used to compare different hands with eachother and output a text value representing the strength of a hand.
For example "Four of a kind, Eights".

Currently this library is only able to identify and compare poker hands from games such as Hold 'em, Omaha high and Stud high.
The goal of this project is to be able to also evaluate hands from Razz, Badugi and other variants.

This library is not optimaized for speed.
If you're looking for a fast algorithm I would recommend [The Two Plus Two Poker Hand Rank Evaluator](https://github.com/chenosaurus/poker-evaluator).
However this algorithm does not provide full details of the hand, only a rank.

