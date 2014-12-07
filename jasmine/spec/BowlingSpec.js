//rules taken from http://slocums.homestead.com/gamescore.html

describe("Bowling Kata", function(){

	beforeEach(function() { 
		//reset bowlingGame property 
		bowlingGame.games = []
		bowlingGame.currentGame = new Game();
	});
	
	it("bowlingGame should exist", function(){
		expect(bowlingGame).toBeTruthy(); //not null, undefined...
	});
	
	it("bowlingGame should return total score", function(){
		expect(bowlingGame.getScore()).toBeDefined();
	});
	
	it("10 pins is maximum per ball", function(){
		expect(bowlingGame.bowl).toBeDefined();
		bowlingGame.bowl(2);		
		expect(bowlingGame.getScore()).toEqual(2);
		expect(bowlingGame.getScore()).toBeLessThan(11);
		expect(function(){bowlingGame.bowl(12)}).toThrow(new Error("Error must be less than or equal to 10!"));
	});	
	
	it("if first ball in frame is 10, second ball maximum is 10 and score for second ball are doubled", function(){ //strike
		bowlingGame.bowl(10);
		bowlingGame.bowl(9);
		expect(bowlingGame.getScore()).toEqual(28);
		bowlingGame.bowl(10);
		bowlingGame.bowl(9);
		expect(bowlingGame.getScore()).toEqual(56);

	});
	
	it("if first ball in frame is less 10, 2nd ball of the frame should be less than or equal to the remaining pins", function(){
		bowlingGame.bowl(8);
		expect(function(){bowlingGame.bowl(3)}).toThrow(new Error("Error must be less than or equal to 10!"));
	});
	
	it("if first ball in frame is less 10, 2nd ball of the frame should not exceed the remaining pins. First frame of next game is added to previous", function(){ //spare
		bowlingGame.bowl(8);
		bowlingGame.bowl(2);
		bowlingGame.bowl(3);
		expect(bowlingGame.getGameScore(1)).toEqual(13);
	});
	
	it("A bowling game consists of 10 games", function(){
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		bowlingGame.bowl(10);
		expect( function(){ bowlingGame.bowl(1); } ).toThrow(new Error("Game had ended you scored "+300+" in the previous game, play again?"));
	});
})