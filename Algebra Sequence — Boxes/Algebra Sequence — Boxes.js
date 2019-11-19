function boxSeq(step) {
	if(step === 0){
		return 0;
	} else if(step % 2 ===1){
		return (step+1)/2*3+(step-1)/2*(-1);
	} else if(step % 2 === 0){
		return (step)/2*3+(step)/2*(-1);
	}
}

/*
https://edabit.com/challenge/Q4mYkd8nc8zdFBDE8

Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2 ...
Examples
boxSeq(0) ➞ 0

boxSeq(1) ➞ 3

boxSeq(2) ➞ 2

Solution 2：

const boxSeq = step => (step % 2 === 0 ? step : step + 2);