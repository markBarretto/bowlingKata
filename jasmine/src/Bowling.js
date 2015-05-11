var BowlingGame = function(){
	this.totalScore = 0;
	this.bowls = [];
}

var Game = function (){
	this.ball1;
	this.ball2;
	this.bonus = 0;
}


BowlingGame.prototype.bowl = function(input){
	if(this.bowls.length > 20){
		throw new Error("Bowl should have a maximum of 20 bowls");
	} else {

		if (input > 0 && input < 11) {
		currentPosition = this.bowls[this.bowls.length];
		
		if (bowlingGame.bowls[currentPosition].ball2 === undefined) {
			bowlingGame.bowls[currentPosition].ball2 = input;
		} else {
			this.bowls.push(new Game());	
		}
		
		
/* 			previousBowl = this.bowls[this.bowls.length -1];
			
			if(input + previousBowl === 10) {
				
				
			} */
			
			if (this.bowls.length > 0 && previousBowl == 10){
				input = input*2;
			}
			
			
			this.totalScore += input;
			
		} else {
			throw new Error("It should not be greater than 10!");
		}	
	}
}
BowlingGame.prototype.getScore = function(){
	return this.totalScore;
}

var bowlingGame = new BowlingGame();