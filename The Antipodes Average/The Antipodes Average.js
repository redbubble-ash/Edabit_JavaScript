
//Array.prototype.slice()
//Array.prototype.reverse()
//javascript-es6-map-multiple-arrays
//Array.from()
const antipodesAverage = arr => {
    const half = arr.length / 2;
    const first = arr.slice(0, half);
    const second = arr.slice(Math.ceil(half)).reverse();
  
    return first.map((num, i) => (num + second[i]) / 2);
  };

  /* 
  antipodesAverage([1, 2, 3, 4]) ➞ [2.5, 2.5]
// Left part = [1, 2]
// Reversed right part = [4, 3]
// Array resulting from the sum of each pair = [5, 5]
// Each number is divided by two = [2.5, 2.5]

antipodesAverage([1, 2, 3, 4, 5]) ➞ [3, 3]
// The length of array is odd, number 3 (in the middle) is eliminated
// Left = [1, 2]
// Reversed right = [5, 4]
// Sum = [6, 6]
// Division by two = [3, 3]

antipodesAverage([-1, -2]) ➞ [-1.5]
//  (-1 + -2) / 2 = [-1.5]

***** SOLUTION 2 !!!!
const antipodesAverage = arr => 
	Array.from({length: arr.length / 2}, (_, i) => 
						 (arr[i] + arr[arr.length - 1 - i]) / 2);