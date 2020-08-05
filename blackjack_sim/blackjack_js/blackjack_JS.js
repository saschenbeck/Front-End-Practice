"use strict";
console.log("Welcome to the Casino!");

var deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11];

function drawRandomCard(deck) {
    var randomIndex = Math.floor(deck.length * Math.random());
    return deck[randomIndex];
}

var playerHand = [];
var dealerhand = [];


function startGame() {
    playerHand = [drawRandomCard(deck),drawRandomCard(deck)];
    dealerhand = [drawRandomCard(deck), drawRandomCard(deck)];
}


function getHandValue(hand) {
    var firstHand = 0;
    for(var i = 0; i < hand.length; i++){
        firstHand += hand[i];
    }
    return firstHand;
}

function hitMe() {
    playerHand.push(drawRandomCard(deck));
    console.log("Hit Me!");
    console.log("New Player Hand: " + playerHand);
    console.log("Player Hand Value: " + getHandValue(playerHand));
    if (getHandValue((playerHand)) > 21){
        console.log("BUST! UNLUCKY! Care to try once more?");
    }
}

function stand() {
    while(getHandValue(dealerhand) < 21){
        if(getHandValue(dealerhand) >= 17){
            if(getHandValue(dealerhand) > 21){
                console.log("The Dealer BUSTED! Congrats! Want to try your luck once more?");
                break;
            }else if (getHandValue(dealerhand) > getHandValue(playerHand)){
                console.log("Looks like the Dealer wins! Oh well...try again?");
                break;
            }else if(getHandValue(dealerhand) < getHandValue(playerHand)){
                console.log("Congrats! You beat the Dealer! Care to play again?");
                break;
            }else if (getHandValue(dealerhand) == getHandValue(playerHand)){
                console.log("Looks like a push. Care to try again?");
                break;
            }
        }
        dealerhand.push(drawRandomCard(deck));
        console.log("Dealer Hand: " + dealerhand);
        console.log("Dealer now has " + getHandValue(dealerhand));
    }
    if(getHandValue(dealerhand) > 21){
        console.log("The Dealer BUSTED! Congrats! Want to try your luck once more?");
    }
}



startGame();
console.log("Player Hand: " + playerHand);
console.log("Player Hand Value: " + getHandValue(playerHand));
console.log("Dealer Hand: " + dealerhand);
console.log("Dealer Hand Value: " + getHandValue(dealerhand));
