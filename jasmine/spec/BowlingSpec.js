//rules taken from http://slocums.homestead.com/gamescore.html

describe("Bowling Kata", function(){
 	beforeEach(function() {  
		bowlingGame.bowls = [];
		bowlingGame.totalScore = 0;
 	}); 

	it("bowlingGame should exist", function(){
		expect(bowlingGame).toBeTruthy(); 
	});
	
	it("bowlingGame should show score", function(){
		bowlingGame.bowl(9);
		expect(bowlingGame.getScore()).toBeGreaterThan(0); 
	});
	
	it("bowl should not be greater than 10", function(){
		expect(function() {bowlingGame.bowl(11)}).toThrow(new Error("It should not be greater than 10!"));
	});
	
	it("bowl should have a maximum of 20 bowls", function(){
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
			bowlingGame.bowl(9);
 			bowlingGame.bowl(9);
 			expect(function(){bowlingGame.bowl(9)}).toThrow(new Error("Bowl should have a maximum of 20 bowls"));
			console.log(bowlingGame.bowls.length);
	});
	
	it("if first ball of a frame is 10 second ball score is doubled", function(){
		bowlingGame.bowl(10);
		bowlingGame.bowl(3);
		expect(bowlingGame.getScore()).toEqual(16);
	});
	
	it("if first two throws equal 10, third throw is doubled", function(){
		bowlingGame.bowl(5);
		bowlingGame.bowl(5);
		bowlingGame.bowl(2);
		expect(bowlingGame.getScore()).toEqual(14);
	});
	
})