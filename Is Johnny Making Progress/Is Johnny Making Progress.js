/*
https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

Examples
progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

progressDays([10, 11, 12, 9, 10]) ➞ 3

progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

progressDays([9, 9])  ➞ 0
*/



function progressDays(runs) {
	var progressDays = 0;
	for(let index = 0; index <runs.length-1; index++){
		if(runs[index+1]>runs[index]){
			progressDays ++;
		}
	}
	return progressDays;
}


/* solution 2:

function progressDays(runs) {
	let progress = 0
  runs.forEach((num, i) => num < runs[i+1] ? progress++ : null)
  return progress
}



solution 3:
function progressDays(runs) {
	console.log(runs.filter((e,i,a)=>e<a[i+1]));
	return runs.filter((e,i,a)=>e<a[i+1]).length;
}

test result:
[ 3, 1 ]
Test Passed: Value == 2
[ 10, 11, 9 ]
Test Passed: Value == 3
[ 2 ]
Test Passed: Value == 1
[]
Test Passed: Value == 0
[ 10, 11 ]
Test Passed: Value == 2


Solution 4:
const progressDays=(runs)=>
runs.reduce((acc,next,index,arr)=>arr[index]-arr[index-1]>0?acc+1:acc,0)
