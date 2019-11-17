function rev(n) {
	var arr = Math.abs(n).toString().split("");
	var temp;
	var j=0;
	
	for(let i=arr.length-1; i>=Math.floor((arr.length)/2);i--){
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
		j++;
	}
	return arr.join("");
	
}

/*
Examples
rev(5121) ➞ "1215"

rev(69) ➞ "96"

rev(-122157) ➞ "751221"