
// Array to store cards
var cards = ["queen", "queen", "king", "king"];

// Array to hold the cards that are in play
var cardsInPlay = [];

// First card the user has flipped
var cardOne = cards[0];
// Second card the user has flipped
var cardTwo = cards[2];

// Adding first card to the cardsInPlay array
cardsInPlay.push(cardOne);
// Adding second card to the cardsInPlay array
cardsInPlay.push(cardTwo);

// For testing, displaying the first card that was just flipped
console.log("User has flipped " + cardOne);
// For testing, displaying the secibd card that was just flipped
console.log("User has flipped " + cardTwo);

/*logic to check to see if two cards have been played, 
because in our final game we will not want to check for 
a match until the user has selected two cards.*/

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}