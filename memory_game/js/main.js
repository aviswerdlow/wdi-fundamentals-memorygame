
// Array to store cards
var cards = ["queen", "queen", "king", "king"];

// Array to hold the cards that are in play
var cardsInPlay = [];

var checkForMatch = function() {
	//check for match
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
	}
}

var flipCard = function(cardId) {
	//let user know what card has been flipped
	console.log("User flipped " + cards[cardId]);
	//add flipped card to cards played
	cardsInPlay.push(cards[cardId]);	
	checkForMatch();
}

flipCard(0);
flipCard(2);