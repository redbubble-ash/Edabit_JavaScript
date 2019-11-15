//Solution one
function testJackpot(result) {
	return new Set(result).size === 1
}

//Solution two
function testJackpot(result) {
    return result.every(x => x === result[0]);	
  }

//Solution three
function testJackpot(result) {
	var isSame = true;
	for(let index = 0; index < result.length-1; index ++){
		if (result[index+1] !==  result[index]){
			return isSame = false;
		}
	}
	return isSame;
}

// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false