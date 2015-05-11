var BowlingGame = function(){
	this.totalScore = 0;
	this.bowls = [];
}


BowlingGame.prototype.bowl = function(input){
	if (input > 0 && input < 11) {
		this.totalScore += input;
		this.bowls.push(input);
	} else {
		throw new Error("It should not be greater than 10!");
	}
	
	if(this.bowls.length > 20){
		throw new Error("Bowl should have a maximum of 20 bowls");
	}
}
BowlingGame.prototype.getScore = function(){
	return this.totalScore;
}




var bowlingGame = new BowlingGame();