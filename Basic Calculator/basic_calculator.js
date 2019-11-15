function calculator(num1, operator, num2) {
    var result = eval(num1 + operator + num2);
    if(operator === "/" && num2 === 0) {return "Can't divide by 0!";}
    else{return result;}

}

// Examples
// calculator(2, "+", 2) ➞ 4

// calculator(2, "*", 2) ➞ 4

// calculator(4, "/", 2) ➞ 2


// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"