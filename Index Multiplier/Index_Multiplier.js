function indexMultiplier(arr) {
	var arrTotal=0;
	for(let index=0; index<arr.length; index++){
		arrTotal += arr[index]*index;
	}
	return arrTotal;
}

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)