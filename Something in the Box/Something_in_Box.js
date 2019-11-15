function inBox(arr) {

  var result = false;
  arr.forEach(myFunction);
  function myFunction(item) {
    if (item.includes("*")) {
      return (result = true);
    }
  }
  return result;
  
}

// Examples
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "####",
//   "#  #",
//   "#  #",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false