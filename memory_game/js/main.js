
// Array to store cards
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];

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
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//add flipped card to cards played
	cardsInPlay.push(cards[cardId].rank);	
	checkForMatch();
}

flipCard(0);
flipCard(2);