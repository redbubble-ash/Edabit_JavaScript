function XO(str) {
	var newArr = str.toLowerCase().split("");
	var xLength = newArr.filter(x => x=="x").length;
	var oLength = newArr.filter(x => x=="o").length;
	
	return xLength === oLength;
}

//another solution
/*
function XO(str) {
    return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
  }

  Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false