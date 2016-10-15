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
createCards();

// Unit 11.6 step 6
var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute("data-card"));
		if (cardsInPlay.length == 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
}

// Unit 11.6 step 5 
var isMatch = function(choiceOne, choiceTwo){
	if (choiceOne == choiceTwo) {
		alert("You found a match");
	}
	else {
		alert("Sorry, try again");
	}
}


