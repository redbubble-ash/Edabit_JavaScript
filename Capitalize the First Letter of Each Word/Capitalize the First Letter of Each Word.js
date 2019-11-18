//The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string. 

function makeTitle(str) {
	var arr = str.split(" ");
	var newArr= [];
	for (let i=0; i<arr.length;i++){
		newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].substring(1)); //Begin the extraction at position 1, and extract the rest of the string:
	}
	return newArr.join(" ");

}

/* solution 2:
function makeTitle(str) {
	return str
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

solution 3:

function makeTitle(str) {
  str = str.split(" ");
  
  for (i = 0; i < str.length; i++) {
		str[i] = str[i].substring(0,1).toUpperCase() + str[i].substring(1); 
  }
  
  return str.join(" ");
}

solution 4:

let makeTitle = x => x.replace(/(^\w|\s\w)/g, x => x.toUpperCase());