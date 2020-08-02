"use strict";

console.log("Welcome to the higher tier Casino");



class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck(suits, values){
        for(let suit of suits){
            for(let value of values){
                this.deck.push(new Card(suit, value))
            }
        }
        return this.deck;
    }
    shuffle(){
        let counter = this.deck.length, temp, i;

        while(counter){
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }
    deal(){
        let hand = [];
        while(hand.length < 2){
            hand.push(this.deck.pop());
        }
        return hand;
    }
}

var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

let deck = new Deck(suits,values);
deck.createDeck(suits,values);
deck.shuffle();
console.log(deck.deal());