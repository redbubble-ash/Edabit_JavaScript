//The Object.keys() method returns an array of a given object's own enumerable property names
//Object.values() returns an array containing all the enumerable property values of the given object.

function keysAndValues(obj) {
    var arr = [];
    arr.push(Object.keys(obj));
    arr.push(Object.values(obj));
       return arr;
   }

/*
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]

solution 2:

//The map() method creates a new array with the results of calling a function for every array element.

function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map( key => obj[key] )]; 
}