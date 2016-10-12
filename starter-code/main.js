console.log("JS file is connected to HTML! Woo!")

/* Declaring card variables 
var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";


if (cardOne == cardTwo) {
	alert("You found a match");
}
else if (cardThree == cardFour) {
	alert("You found a match"); 
}
else {
	alert("Sorry, try again")
}
*/

// 10.7 step 4-10 Note: had to defer js script in html to make this work.  
var createCards = function() {
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < 4; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = "card";
		gameBoard.appendChild(newDiv)
	}
}
createCards();


