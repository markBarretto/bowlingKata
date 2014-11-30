//rules taken from http://slocums.homestead.com/gamescore.html

describe("Bowling Kata", function(){
	it("bowlingGame should exist", function(){
		expect(bowlingGame).toBeTruthy(); //not null, undefined...
	});
	
	it("bowlingGame should return total score", function(){
		expect(bowlingGame.getScore()).toBeDefined();
	});
	
	it("10 pins is maximum per ball", function(){
		expect(bowlingGame.bowl).toBeDefined();
		expect(bowlingGame.bowl(2)).toBeLessThan(11);
		expect(bowlingGame.bowl(12)).toThrow(new Error("Error must be less than or equal to 10!")); //negative test
	});	
	
	it("if first ball in frame is 10, second ball maximum is 10 and score for second ball are doubled", function(){ //strike
		expect(function(){
			bowlingGame.bowl(10);
			bowlingGame.bowl(10);
		}).toEqual(10);
		expect(bowlingGame.getScore()).toEqual(30);
	});
	
	it("if first ball in frame is less 10, 2nd ball of the frame should be less than or equal to the remaining pins", function(){
		var firstBowl = 8;
		var secondBowl = 2;
		expect(function(){
			bowlingGame.bowl(firstBowl);
			bowlingGame.bowl(secondBowl);
		}).toBeLessThan(11);
	});
	
	it("if first ball in frame is less 10, 2nd ball of the frame should not exceed the remaining pins. First frame of next game is added to previous", function(){ //spare
		var firstBowl = 8;
		var secondBowl = 2;
		var thirdBowl = 3;
		expect(function(){
			bowlingGame.bowl(firstBowl);
			bowlingGame.bowl(secondBowl);
			bowlingGame.bowl(thirdBowl);
			bowlingGame.frames[0].getScore();
		}).toBeEqual(13);
	});
	
})