var BowlingGame = function (){
	this.totalScore = 0;
	this.frames = [];
}

BowlingGame.prototype.getScore = function(){
	return this.totalScore;
}

BowlingGame.prototype.bowl = function(input){
	var temp = this.totalScore + input;
	this.totalScore = temp;
	if(input > 10){
		throw new Error("Error must be less than or equal to 10!");
	} else {
		this.frames.push(input);
	}
}


var bowlingGame = new BowlingGame();