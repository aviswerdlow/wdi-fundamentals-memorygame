
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

var score = 0;

var checkForMatch = function() {
	//check for match
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			score += 1;
			document.getElementById('score').innerHTML = "Score: " + score;
		}
		else {
			alert("Sorry, try again.");
			score -= 1;
			document.getElementById('score').innerHTML = "Score: " + score;
		}
	}
	else if (cardsInPlay.length > 2) {
		resetPage();
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	//let user know what card has been flipped
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//add flipped card to cards played
	cardsInPlay.push(cards[cardId].rank);	
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute("data-id", i);
		cardElement.setAttribute("id", "cardNumber" + i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

var resetPage = function () {
	for (var i = 0; i < cards.length; i++) {
		var parent = document.getElementById('game-board');
		var child = document.getElementById("cardNumber" + i);
		parent.removeChild(child);
		console.log(child);
		console.log(parent);
	}
	cardsInPlay = [];
	createBoard();
};

var resetScore = function () {
	score = 0;
	document.getElementById('score').innerHTML = "Score: " + score;
}

document.getElementById('button1').addEventListener('click', resetPage);
document.getElementById('button2').addEventListener('click', resetScore);
