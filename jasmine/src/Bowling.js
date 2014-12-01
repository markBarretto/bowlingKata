var Game = function(input){
	this.firstBall = input;
	this.secondBall = null;
	this.bonus = 0;
}

Game.prototype.getScore = function(){
	return this.firstBall + this.secondBall + this.bonus;
}

var BowlingGame = function (){
	this.totalScore = 0;
	this.games = [];
	this.currentGame = new Game();
}

BowlingGame.prototype.getScore = function(){
//	return this.totalScore;
	var g = this.games;
	var output = 0;
	var ball2 = 0;
	
	for(i =0; i< g.length;i++){

		if(g[i].secondBall != null){
			ball2 = g[i].secondBall
		}
		
		output = g[i].firstBall + ball2 + g[i].bonus + output;
	}
	
	return output;
}

BowlingGame.prototype.bowl = function(input){
	var games = this.games;
	
	
	if(input > 10){
		throw new Error("Error must be less than or equal to 10!");
	} else {
		if(this.currentGame.firstBall == undefined){ //first ball
			this.currentGame.firstBall = input;
		} else { //second ball
			this.currentGame.secondBall = input;			
			if(this.currentGame.firstBall == 10){ //strike
				this.currentGame.bonus = input;
			}
		}
		
		if(games[games.length] == undefined){
			if(this.currentGame.secondBall == null){
				this.games.push(this.currentGame);
			} else {
				var c = this.currentGame;
				this.games[games.length-1] = new Game();
				this.games[games.length-1].firstBall = c.firstBall;
				this.games[games.length-1].secondBall = c.secondBall;
				this.games[games.length-1].bonus = c.bonus;
				this.currentGame = new Game();
			}
		}		
		
	}
}


var bowlingGame = new BowlingGame();