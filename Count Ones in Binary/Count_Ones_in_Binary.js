//number.toString(radix)


function countOnes(i) {
	return i.toString(2).split("").filter(x=> x=="1").length;
	
}

/*
Examples
countOnes(0) ➞ 0

countOnes(100) ➞ 3

countOnes(999) ➞ 8