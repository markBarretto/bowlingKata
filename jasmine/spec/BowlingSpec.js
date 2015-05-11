//rules taken from http://slocums.homestead.com/gamescore.html

describe("Bowling Kata", function(){
 	beforeEach(function() {  
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
		
		expect(function() {bowlingGame.bowl(10)}).toThrow(new Error("Bowl should have a maximum of 20 bowls"));
	});
})