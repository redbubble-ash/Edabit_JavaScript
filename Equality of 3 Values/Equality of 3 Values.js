function equal(a, b, c) {
	if(a===b && b===c){return 3;}
	else if(a===b && b!==c){return 2;}
	else if(a===c && a!==b){return 2;}
	else if(b===c && a!==c){return 2;}
	else {return 0;}

}

Examples
equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0