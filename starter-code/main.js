// console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];


// 10.7 step 4-10 Note: had to defer js script in html to make this work.  
var createCards = function() {
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = "card";
		
		// Unit 11.6 steps 3 & 4
		newDiv.setAttribute('data-card', cards[i]);
		newDiv.addEventListener('click', isTwoCards);
		
		gameBoard.appendChild(newDiv);
	}
}


// Unit 11.6 step 6
var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute("data-card"));
		// Unit 11.6 step 8
		if (this.getAttribute("data-card") == "king") {
			this.innerHTML = '<img src = "images/king.png" alt = "King of Spades">';
		}
		else {
			this.innerHTML = '<img src = "images/queen.png" alt = "Queen of Clubs">';
		}
			// Unit 11.6 step 6
			if (cardsInPlay.length == 2) {
				isMatch(cardsInPlay);
				cardsInPlay = [];
			}
}

// Unit 11.6 step 5 
var isMatch = function(cards){
	if (card[0] == card[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again");
	}
}

createCards();
