//The Set object lets you store unique values of any type, whether primitive values or object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//By using Array.from() method:
//This method returns a new Array from an array like object or iterable objects like Map, Set, etc.
//Syntax
//Array.from(arrayLike object);

function removeDups(arr) {
	var newSet = new Set();
	arr.forEach(item => newSet.add(item));
	return Array.from(newSet);
}

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

/* solution 2:
function removeDups(arr) {
  var used = [];
  arr.forEach(function(item){
    if (!used.includes(item)){
      used.push(item);
    }
  });
  return used;
}

solution 3:
function removeDups(arr) {
  var returnArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(returnArr.indexOf(arr[i]) === -1) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

solution 4:

function removeDups(arr) {
  return arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
}

solution 5:

removeDups = a => [...new Set(a)]
