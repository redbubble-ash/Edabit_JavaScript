//The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop

function toArray(obj) {
	var arr = [];	
	for (let [key, value] of Object.entries(obj)) {
	arr.push([key , value]) 
}
	return arr;
}


// Another solution:
// function toArray(obj) {
// 	var a = [];
// 	for(var i in obj){
// 		a.push([i,obj[i]]);
// 	}
// 	return a;
// }


// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []