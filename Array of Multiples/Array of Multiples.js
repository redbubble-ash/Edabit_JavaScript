//Create num=length indexes with undefined values
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

const arrayOfMultiples = (num, length) => {
    return Array.from({length: length}, (_, i)  // Run a map function on said indexes using [undefined] and k(ey)[0 to length]
     => num * (i + 1)); //// Return value 
}

/*
Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

solution 2:

function arrayOfMultiples (num, length) {
	var arr = [num];
	for(let i=2; i<=length; i++){
		arr.push(num * i);
	}
	return arr;
}