// Arrays

// Array Litreal
let fruits = ["apple", "mango", "banana"];

// Array Constructor
let fruits2 = new Array("pineapple", "strawberry", "rasberry");

console.log(fruits[1]);

// Length
console.log(fruits.length);

fruits2.push("cherry");
console.log(fruits2);

fruits2.pop();
console.log(fruits2);
/*
Other Array Methods
- shift(): Removes the first element from the array and returns that element.
- unshift(): Adds one or more elements to the beginning of the array and returns the new length of the array.
- concat(): Combines two or more arrays and returns a new array.
- slice(): Returns a shallow copy of a portion of an array.
- splice(): Adds or removes elements from an array at a specified index.
- indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- includes(): Checks if an array contains a specific element and returns true or false
- forEach(): Iterates over each element in the array and executes a provided function.
- map(): Creates a new array by applying a function to each element in the original array.
- filter(): Creates a new array with all elements that pass a test implemented by the provided function.
- reduce(): Applies a function to accumulate a single result from an array of values.
- sort(): Sorts the elements of an array in place and returns the sorted array.
- reverse(): Reverses the order of elements in an array.
- join(): Combines all the elements of an array into a single string.
- toString(): Returns a string representing the array and its elements.
*/

// Iterate using for loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Iterate using forEach loop
for(let x of fruits){
    console.log(x);
}


