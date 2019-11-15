function checkEquals(arr1, arr2) {
	if (arr1.length === arr2.length && arr1.every((value,index) => value === arr2[index])) {
  	return true 
  } else {
  	return false
  }
}


// Examples
// checkEquals([1, 2], [1, 3]) ➞ false

// checkEquals([1, 2], [1, 2]) ➞ true

// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
// Notes